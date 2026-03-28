/*
 * useSpeech — Hook de synthèse vocale (Text-to-Speech)
 * Lit à voix haute les instructions de coaching pendant la séance
 * Utilise l'API Web Speech Synthesis native du navigateur
 * Voix française préférée, avec fallback automatique
 */

import { useState, useCallback, useRef, useEffect } from "react";

interface UseSpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
}

export function useSpeech(options: UseSpeechOptions = {}) {
  const {
    rate = 0.95,
    pitch = 1,
    volume = 1,
    lang = "fr-FR",
  } = options;

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const isSpeakingRef = useRef(false);

  const isSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  const findFrenchVoice = useCallback(() => {
    if (!isSupported) return null;
    const voices = window.speechSynthesis.getVoices();
    const googleFr = voices.find(
      (v) => v.lang.startsWith("fr") && v.name.toLowerCase().includes("google")
    );
    const nativeFr = voices.find(
      (v) => v.lang.startsWith("fr") && !v.localService === false
    );
    const anyFr = voices.find((v) => v.lang.startsWith("fr"));
    return googleFr || nativeFr || anyFr || null;
  }, [isSupported]);

  useEffect(() => {
    if (!isSupported) return;
    const loadVoices = () => {
      voiceRef.current = findFrenchVoice();
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [isSupported, findFrenchVoice]);

  const cancel = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    isSpeakingRef.current = false;
  }, [isSupported]);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported || !isEnabled || !text.trim()) return;
      window.speechSynthesis.cancel();
      isSpeakingRef.current = false;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;
      utterance.lang = lang;
      if (voiceRef.current) {
        utterance.voice = voiceRef.current;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        isSpeakingRef.current = true;
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        isSpeakingRef.current = false;
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        isSpeakingRef.current = false;
      };

      // Small delay to let cancel complete
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 50);
    },
    [isSupported, isEnabled, rate, pitch, volume, lang]
  );

  const speakExercise = useCallback(
    (name: string, coaching: string, isTransition: boolean) => {
      if (!isSupported || !isEnabled) return;
      if (isTransition) {
        speak(`Transition. ${name}.`);
      } else {
        speak(`${name}. ${coaching}`);
      }
    },
    [isSupported, isEnabled, speak]
  );

  const toggleEnabled = useCallback(() => {
    setIsEnabled((prev) => {
      const next = !prev;
      if (!next) cancel();
      return next;
    });
  }, [cancel]);

  useEffect(() => {
    return () => {
      if (isSupported) window.speechSynthesis.cancel();
    };
  }, [isSupported]);

  return {
    speak,
    speakExercise,
    cancel,
    isSpeaking,
    isEnabled,
    toggleEnabled,
    isSupported,
  };
}
