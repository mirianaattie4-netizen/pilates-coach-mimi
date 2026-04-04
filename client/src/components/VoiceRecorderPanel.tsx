/*
 * VoiceRecorderPanel — Panneau d'enregistrement vocal
 * Permet à Coach Mimi d'enregistrer sa voix pour chaque exercice
 * Accessible depuis la page de séance via un bouton "Enregistrer ma voix"
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Play, Square, Trash2, X, Check, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Exercise } from "@/lib/sessionTypes";

interface VoiceRecorderPanelProps {
  exercises: Exercise[];
  sessionId: string;
  isOpen: boolean;
  onClose: () => void;
  isRecording: boolean;
  isPlaying: boolean;
  hasRecordingFor: (key: string) => boolean;
  startRecording: (key: string) => void;
  stopRecording: () => void;
  playRecording: (key: string) => void;
  removeRecording: (key: string) => void;
}

export default function VoiceRecorderPanel({
  exercises,
  sessionId,
  isOpen,
  onClose,
  isRecording,
  isPlaying,
  hasRecordingFor,
  startRecording,
  stopRecording,
  playRecording,
  removeRecording,
}: VoiceRecorderPanelProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const mainExercises = exercises.filter((ex) => !ex.isTransition);
  const getKey = (ex: Exercise) => `${sessionId}-${ex.id}`;

  const recordedCount = mainExercises.filter((ex) => hasRecordingFor(getKey(ex))).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md overflow-y-auto"
        >
          <div className="container max-w-2xl py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3">
                  <Mic className="w-6 h-6 text-red-400" />
                  Enregistrer ma voix
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  {recordedCount} / {mainExercises.length} exercices enregistrés
                </p>
              </div>
              <Button variant="outline" size="icon" onClick={onClose} className="rounded-full">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-card rounded-full h-2 mb-8">
              <div
                className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(recordedCount / mainExercises.length) * 100}%` }}
              />
            </div>

            {/* Instructions */}
            <div className="bg-card/50 border border-border/30 rounded-xl p-4 mb-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Appuyez sur le bouton <Mic className="w-3.5 h-3.5 inline text-red-400" /> pour enregistrer vos instructions vocales pour chaque exercice.
                Votre voix sera jouée automatiquement pendant la séance au lieu de la voix synthétique.
              </p>
            </div>

            {/* Exercise list */}
            <div className="space-y-3">
              {mainExercises.map((ex) => {
                const key = getKey(ex);
                const hasRec = hasRecordingFor(key);
                const isActive = activeKey === key;

                return (
                  <div
                    key={ex.id}
                    className={`bg-card/60 border rounded-xl p-4 transition-all ${
                      isActive
                        ? "border-red-500/50 bg-red-500/5"
                        : hasRec
                          ? "border-green-500/30 bg-green-500/5"
                          : "border-border/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {hasRec ? (
                          <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-green-400" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                            <Volume2 className="w-4 h-4 text-muted-foreground" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {ex.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {ex.coaching.substring(0, 60)}...
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        {/* Play existing recording */}
                        {hasRec && (
                          <>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full w-8 h-8 border-green-500/30"
                              onClick={() => playRecording(key)}
                            >
                              <Play className="w-3.5 h-3.5 text-green-400" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full w-8 h-8 border-red-500/30"
                              onClick={() => removeRecording(key)}
                            >
                              <Trash2 className="w-3.5 h-3.5 text-red-400" />
                            </Button>
                          </>
                        )}

                        {/* Record button */}
                        {isRecording && isActive ? (
                          <Button
                            size="icon"
                            className="rounded-full w-10 h-10 bg-red-500 hover:bg-red-600 animate-pulse"
                            onClick={() => {
                              stopRecording();
                              setActiveKey(null);
                            }}
                          >
                            <Square className="w-4 h-4 text-white" />
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-10 h-10 border-red-500/30 hover:bg-red-500/10"
                            onClick={() => {
                              setActiveKey(key);
                              startRecording(key);
                            }}
                            disabled={isRecording}
                          >
                            <Mic className="w-4 h-4 text-red-400" />
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Recording indicator */}
                    {isRecording && isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs text-red-400 font-display">
                          Enregistrement en cours... Parlez maintenant !
                        </span>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom actions */}
            <div className="sticky bottom-0 bg-background/90 backdrop-blur-md py-4 mt-6 border-t border-border/30">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {recordedCount > 0
                    ? `${recordedCount} enregistrement${recordedCount > 1 ? "s" : ""} sauvegardé${recordedCount > 1 ? "s" : ""}`
                    : "Aucun enregistrement"}
                </p>
                <Button onClick={onClose} className="font-display">
                  <Check className="w-4 h-4 mr-2" />
                  Terminé
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
