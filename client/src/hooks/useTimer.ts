import { useState, useCallback, useRef, useEffect } from "react";
import { exercises, type Exercise } from "@/lib/exerciseData";

export type SessionState = "idle" | "countdown" | "running" | "paused" | "finished";

export function useTimer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exercises[0].duration);
  const [sessionState, setSessionState] = useState<SessionState>("idle");
  const [countdownValue, setCountdownValue] = useState(5);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentExercise: Exercise = exercises[currentIndex];

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
    if (currentIndex < exercises.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setTimeLeft(exercises[nextIdx].duration);
    }
  }, [currentIndex]);

  const skipToPrev = useCallback(() => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      setTimeLeft(exercises[prevIdx].duration);
    }
  }, [currentIndex]);

  const reset = useCallback(() => {
    clearTimer();
    setCurrentIndex(0);
    setTimeLeft(exercises[0].duration);
    setSessionState("idle");
    setTotalElapsed(0);
  }, [clearTimer]);

  // Main timer effect
  useEffect(() => {
    if (sessionState !== "running") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Move to next exercise
          setCurrentIndex((idx) => {
            if (idx >= exercises.length - 1) {
              setSessionState("finished");
              return idx;
            }
            const nextIdx = idx + 1;
            setTimeLeft(exercises[nextIdx].duration);
            return nextIdx;
          });
          return 0;
        }
        return prev - 1;
      });
      setTotalElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionState]);

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
