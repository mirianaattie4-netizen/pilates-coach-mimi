/*
 * useVoiceRecorder — Enregistrement vocal personnel de Coach Mimi
 * Permet d'enregistrer sa propre voix pour chaque exercice
 * Stocke les enregistrements dans IndexedDB (localStorage ne supporte pas les blobs)
 * Les enregistrements persistent entre les sessions
 */

import { useState, useCallback, useRef, useEffect } from "react";

const DB_NAME = "coach-mimi-voice-db";
const STORE_NAME = "voice-recordings";
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveRecording(key: string, blob: Blob): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(blob, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getRecording(key: string): Promise<Blob | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const request = tx.objectStore(STORE_NAME).get(key);
    request.onsuccess = () => resolve(request.result ?? null);
    request.onerror = () => reject(request.error);
  });
}

async function deleteRecording(key: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getAllKeys(): Promise<string[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const request = tx.objectStore(STORE_NAME).getAllKeys();
    request.onsuccess = () => resolve(request.result as string[]);
    request.onerror = () => reject(request.error);
  });
}

export interface VoiceRecorderState {
  isRecording: boolean;
  isPlaying: boolean;
  hasRecording: boolean;
  recordingKeys: Set<string>;
}

export function useVoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingKeys, setRecordingKeys] = useState<Set<string>>(new Set());
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const isSupported =
    typeof window !== "undefined" &&
    "mediaDevices" in navigator &&
    "MediaRecorder" in window;

  // Load existing recording keys on mount
  useEffect(() => {
    getAllKeys()
      .then((keys) => setRecordingKeys(new Set(keys)))
      .catch(() => {});
  }, []);

  const hasRecordingFor = useCallback(
    (exerciseKey: string) => recordingKeys.has(exerciseKey),
    [recordingKeys]
  );

  const startRecording = useCallback(
    async (exerciseKey: string) => {
      if (!isSupported || isRecording) return;
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;
        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: MediaRecorder.isTypeSupported("audio/webm")
            ? "audio/webm"
            : "audio/mp4",
        });
        mediaRecorderRef.current = mediaRecorder;
        chunksRef.current = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) chunksRef.current.push(e.data);
        };

        mediaRecorder.onstop = async () => {
          const blob = new Blob(chunksRef.current, {
            type: mediaRecorder.mimeType,
          });
          await saveRecording(exerciseKey, blob);
          setRecordingKeys((prev) => {
          const next = new Set(prev);
          next.add(exerciseKey);
          return next;
        });
          stream.getTracks().forEach((t) => t.stop());
          streamRef.current = null;
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (err) {
        console.error("Erreur micro:", err);
      }
    },
    [isSupported, isRecording]
  );

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  }, [isRecording]);

  const playRecording = useCallback(
    async (exerciseKey: string) => {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
        return;
      }
      const blob = await getRecording(exerciseKey);
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(url);
      };
      audio.onerror = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(url);
      };
      setIsPlaying(true);
      audio.play();
    },
    [isPlaying]
  );

  const playRecordingForExercise = useCallback(
    async (exerciseKey: string): Promise<boolean> => {
      const blob = await getRecording(exerciseKey);
      if (!blob) return false;
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      return new Promise((resolve) => {
        audio.onended = () => {
          setIsPlaying(false);
          URL.revokeObjectURL(url);
          resolve(true);
        };
        audio.onerror = () => {
          setIsPlaying(false);
          URL.revokeObjectURL(url);
          resolve(false);
        };
        setIsPlaying(true);
        audio.play().catch(() => resolve(false));
      });
    },
    []
  );

  const removeRecording = useCallback(async (exerciseKey: string) => {
    await deleteRecording(exerciseKey);
    setRecordingKeys((prev) => {
      const next = new Set(prev);
      next.delete(exerciseKey);
      return next;
    });
  }, []);

  const stopPlayback = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return {
    isRecording,
    isPlaying,
    isSupported,
    recordingKeys,
    hasRecordingFor,
    startRecording,
    stopRecording,
    playRecording,
    playRecordingForExercise,
    removeRecording,
    stopPlayback,
  };
}
