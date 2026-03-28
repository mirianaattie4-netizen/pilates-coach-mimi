/*
 * Design: "Néon Fitness Flow" — Signal sonore via Web Audio API
 * Bip court à chaque changement d'exercice, double bip à la fin
 * Pas de fichier audio externe nécessaire
 */

import { useRef, useCallback } from "react";

export function useSound() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Simple beep: frequency in Hz, duration in ms
  const beep = useCallback(
    (freq: number = 880, durationMs: number = 150, volume: number = 0.3) => {
      try {
        const ctx = getCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          ctx.currentTime + durationMs / 1000
        );

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + durationMs / 1000);
      } catch {
        // Silently fail if audio not supported
      }
    },
    [getCtx]
  );

  // Transition beep: short high-pitched beep
  const playTransition = useCallback(() => {
    beep(880, 150, 0.25);
  }, [beep]);

  // Exercise start beep: two quick beeps
  const playExerciseStart = useCallback(() => {
    beep(1046, 120, 0.3);
    setTimeout(() => beep(1318, 120, 0.3), 180);
  }, [beep]);

  // Countdown beep: low tick
  const playCountdownTick = useCallback(() => {
    beep(660, 80, 0.15);
  }, [beep]);

  // Session finished: ascending triple beep
  const playFinished = useCallback(() => {
    beep(880, 150, 0.3);
    setTimeout(() => beep(1046, 150, 0.3), 200);
    setTimeout(() => beep(1318, 250, 0.35), 400);
  }, [beep]);

  // Warning beep at 3 seconds remaining
  const playWarning = useCallback(() => {
    beep(440, 100, 0.15);
  }, [beep]);

  return {
    playTransition,
    playExerciseStart,
    playCountdownTick,
    playFinished,
    playWarning,
  };
}
