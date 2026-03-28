import { useState, useCallback, useRef, useEffect } from "react";
import type { Exercise } from "@/lib/sessionTypes";
import { useSound } from "./useSound";

export type SessionState = "idle" | "countdown" | "running" | "paused" | "finished";

export function useTimer(exerciseList: Exercise[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exerciseList[0]?.duration ?? 45);
  const [sessionState, setSessionState] = useState<SessionState>("idle");
  const [countdownValue, setCountdownValue] = useState(5);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevIndexRef = useRef(0);
  const exercisesRef = useRef(exerciseList);
  exercisesRef.current = exerciseList;

  const { playTransition, playExerciseStart, playCountdownTick, playFinished, playWarning } = useSound();

  const currentExercise: Exercise = exerciseList[currentIndex];

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startSession = useCallback(() => {
    setSessionState("countdown");
    setCountdownValue(5);
    clearTimer();
    intervalRef.current = setInterval(() => {
      setCountdownValue((prev) => {
        if (prev <= 1) {
          clearTimer();
          setSessionState("running");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clearTimer]);

  const pause = useCallback(() => {
    clearTimer();
    setSessionState("paused");
  }, [clearTimer]);

  const resume = useCallback(() => {
    setSessionState("running");
  }, []);

  const skipToNext = useCallback(() => {
    const exs = exercisesRef.current;
    if (currentIndex < exs.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setTimeLeft(exs[nextIdx].duration);
    }
  }, [currentIndex]);

  const skipToPrev = useCallback(() => {
    const exs = exercisesRef.current;
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      setTimeLeft(exs[prevIdx].duration);
    }
  }, [currentIndex]);

  const reset = useCallback(() => {
    clearTimer();
    setCurrentIndex(0);
    setTimeLeft(exercisesRef.current[0]?.duration ?? 45);
    setSessionState("idle");
    setTotalElapsed(0);
    prevIndexRef.current = 0;
  }, [clearTimer]);

  // Play sound on exercise change
  useEffect(() => {
    if (sessionState !== "running" && sessionState !== "paused") return;
    if (currentIndex === prevIndexRef.current) return;
    
    const exercise = exercisesRef.current[currentIndex];
    if (exercise?.isTransition) {
      playTransition();
    } else {
      playExerciseStart();
    }
    prevIndexRef.current = currentIndex;
  }, [currentIndex, sessionState, playTransition, playExerciseStart]);

  // Play countdown tick
  useEffect(() => {
    if (sessionState === "countdown" && countdownValue > 0) {
      playCountdownTick();
    }
  }, [countdownValue, sessionState, playCountdownTick]);

  // Play warning beep at 3 seconds remaining
  useEffect(() => {
    if (sessionState === "running" && timeLeft === 3) {
      playWarning();
    }
  }, [timeLeft, sessionState, playWarning]);

  // Main timer effect
  useEffect(() => {
    if (sessionState !== "running") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCurrentIndex((idx) => {
            const exs = exercisesRef.current;
            if (idx >= exs.length - 1) {
              setSessionState("finished");
              playFinished();
              return idx;
            }
            const nextIdx = idx + 1;
            setTimeLeft(exs[nextIdx].duration);
            return nextIdx;
          });
          return 0;
        }
        return prev - 1;
      });
      setTotalElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionState, playFinished]);

  const progress = currentExercise
    ? ((currentExercise.duration - timeLeft) / currentExercise.duration) * 100
    : 0;

  return {
    currentExercise,
    currentIndex,
    timeLeft,
    sessionState,
    countdownValue,
    totalElapsed,
    progress,
    startSession,
    pause,
    resume,
    skipToNext,
    skipToPrev,
    reset,
  };
}
