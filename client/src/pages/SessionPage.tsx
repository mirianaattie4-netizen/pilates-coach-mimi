/*
 * Design: "Néon Fitness Flow" — Page de séance interactive
 * Layout cockpit: Timer en haut, exercice actif au centre, liste en sidebar
 * Mode mains libres avec défilement automatique + signal sonore
 * Séance complète 1h Full Body avec poids légers
 */

import { useTimer } from "@/hooks/useTimer";
import CircularTimer from "@/components/CircularTimer";
import ExerciseCard from "@/components/ExerciseCard";
import ExerciseList from "@/components/ExerciseList";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
  ChevronLeft,
  Trophy,
  Timer,
  Dumbbell,
  Volume2,
} from "lucide-react";
import { useLocation } from "wouter";
import { exercises, PHASE_LABELS, TOTAL_DURATION, getTotalMainExercises } from "@/lib/exerciseData";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/hero-pilates-dark-eDrXjLic23sPpALmrZe8nq.webp";

export default function SessionPage() {
  const [, setLocation] = useLocation();
  const {
    currentExercise,
    currentIndex,
    timeLeft,
    sessionState,
    countdownValue,
    totalElapsed,
    startSession,
    pause,
    resume,
    skipToNext,
    skipToPrev,
    reset,
  } = useTimer();

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const totalMainExercises = getTotalMainExercises();
  const totalMinutes = Math.round(TOTAL_DURATION / 60);

  // Finished screen
  if (sessionState === "finished") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-8 glow-green">
            <Trophy className="w-12 h-12 text-background" />
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Bravo !
          </h1>
          <p className="text-muted-foreground text-lg mb-2">
            Séance Pilates Strength Full Body terminée
          </p>
          <p className="text-muted-foreground text-sm mb-8">
            Durée totale : {formatTime(totalElapsed)}
          </p>
          <p className="text-foreground/70 italic text-base mb-10 px-4">
            "Bravo à tous pour cette séance Pilates Strength d'une heure ! Vous avez travaillé tout le corps. Pensez à bien vous hydrater. À très bientôt avec Coach Mimi !"
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setLocation("/")}
              className="font-display"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Accueil
            </Button>
            <Button
              size="lg"
              onClick={reset}
              className="font-display bg-gradient-to-r from-green-500 to-emerald-500 text-background hover:from-green-600 hover:to-emerald-600"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Recommencer
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Idle / Pre-start screen
  if (sessionState === "idle") {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Dumbbell className="w-5 h-5 text-red-400" />
              <span className="font-display text-xs uppercase tracking-[0.25em] text-red-400">
                Pilates Strength Full Body
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Séance Débutant
              <br />
              <span className="text-red-400">1 Heure avec Poids</span>
            </h1>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              {totalMainExercises} exercices &middot; ~{totalMinutes} min &middot; Haltères légers (1-2 kg)
            </p>

            {/* Quick info */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/30">
                <div className="w-3 h-3 rounded-full bg-green-400 mx-auto mb-2" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-green-400 block">
                  Echauffement
                </span>
                <span className="text-xs text-muted-foreground">~8 min</span>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/30">
                <div className="w-3 h-3 rounded-full bg-red-400 mx-auto mb-2" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-red-400 block">
                  Workout
                </span>
                <span className="text-xs text-muted-foreground">~44 min</span>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/30">
                <div className="w-3 h-3 rounded-full bg-blue-400 mx-auto mb-2" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-blue-400 block">
                  Cool-down
                </span>
                <span className="text-xs text-muted-foreground">~8 min</span>
              </div>
            </div>

            {/* Sound notice */}
            <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
              <Volume2 className="w-4 h-4" />
              <span className="text-xs">Signal sonore activé à chaque changement d'exercice</span>
            </div>

            <Button
              size="lg"
              onClick={startSession}
              className="font-display text-lg px-10 py-6 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 glow-coral rounded-2xl"
            >
              <Play className="w-5 h-5 mr-3" />
              Démarrer la séance
            </Button>

            <button
              onClick={() => setLocation("/")}
              className="block mx-auto mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-3 h-3 inline mr-1" />
              Retour à l'accueil
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Countdown screen
  if (sessionState === "countdown") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          key={countdownValue}
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <span className="font-display text-[120px] font-bold text-red-400 leading-none">
            {countdownValue}
          </span>
          <p className="text-muted-foreground text-lg mt-4 font-display tracking-wider">
            Préparez-vous...
          </p>
        </motion.div>
      </div>
    );
  }

  // Active session (running / paused)
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
        <div className="container py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                pause();
                setLocation("/");
              }}
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Quitter</span>
            </button>
            <div className="flex items-center gap-2">
              <Timer className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="font-display text-sm text-muted-foreground tracking-wider">
                {formatTime(totalElapsed)} / {formatTime(TOTAL_DURATION)}
              </span>
            </div>
            <span className="font-display text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {PHASE_LABELS[currentExercise.phase]}
            </span>
          </div>
          <div className="mt-3">
            <ProgressBar currentIndex={currentIndex} timeLeft={timeLeft} />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container py-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left: Timer + Exercise Card */}
          <div className="flex-1 flex flex-col items-center gap-6">
            {/* Timer */}
            <CircularTimer
              timeLeft={timeLeft}
              totalDuration={currentExercise.duration}
              phase={currentExercise.phase}
              isTransition={currentExercise.isTransition}
            />

            {/* Controls */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={skipToPrev}
                disabled={currentIndex === 0}
                className="rounded-full w-10 h-10 border-border/50"
              >
                <SkipBack className="w-4 h-4" />
              </Button>

              {sessionState === "paused" ? (
                <Button
                  size="icon"
                  onClick={resume}
                  className="rounded-full w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 glow-coral"
                >
                  <Play className="w-6 h-6 text-white" />
                </Button>
              ) : (
                <Button
                  size="icon"
                  onClick={pause}
                  className="rounded-full w-14 h-14 bg-white/10 hover:bg-white/15 border border-white/10"
                >
                  <Pause className="w-6 h-6" />
                </Button>
              )}

              <Button
                variant="outline"
                size="icon"
                onClick={skipToNext}
                disabled={currentIndex >= exercises.length - 1}
                className="rounded-full w-10 h-10 border-border/50"
              >
                <SkipForward className="w-4 h-4" />
              </Button>
            </div>

            {/* Exercise Card */}
            <div className="w-full max-w-xl">
              <ExerciseCard exercise={currentExercise} isActive={true} />
            </div>

            {/* Next up preview */}
            {currentIndex < exercises.length - 1 && (
              <div className="w-full max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <SkipForward className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Prochain
                  </span>
                </div>
                <div className="bg-card/30 rounded-lg border border-border/20 px-4 py-3">
                  <span className="text-sm text-foreground/50 font-display">
                    {exercises[currentIndex + 1].isTransition
                      ? currentIndex + 2 < exercises.length
                        ? exercises[currentIndex + 2].name
                        : "Fin de séance"
                      : exercises[currentIndex + 1].name}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right sidebar: Exercise list (desktop) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-40">
              <h3 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Programme ({totalMainExercises} exercices)
              </h3>
              <ExerciseList currentIndex={currentIndex} />
            </div>
          </aside>
        </div>
      </main>

      {/* Pause overlay */}
      <AnimatePresence>
        {sessionState === "paused" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm flex items-center justify-center"
            onClick={resume}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Pause className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                En pause
              </h2>
              <p className="text-muted-foreground mb-8">
                Appuyez pour reprendre
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={reset}
                  className="font-display"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Recommencer
                </Button>
                <Button
                  size="lg"
                  onClick={resume}
                  className="font-display bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Reprendre
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
