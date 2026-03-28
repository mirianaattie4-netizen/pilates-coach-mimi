/*
 * Design: "Néon Fitness Flow" — Page d'accueil immersive
 * Hero sombre avec image de fond, présentation de la séance, CTA puissant
 */

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Play,
  Dumbbell,
  Clock,
  Flame,
  Heart,
  ChevronRight,
  Zap,
  Shield,
} from "lucide-react";
import { useLocation } from "wouter";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/hero-pilates-dark-CZJEWSuRmdsaPbzNWyDpUx.png";
const WARMUP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/warmup-phase-iSfdrwRGbXZhdPcMxwmxMe.webp";
const WORKOUT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/workout-phase-dCquAFYUfWGuPVnKqNuaQV.webp";
const COOLDOWN_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/cooldown-phase-Js4T7k9uzVys8RZyKVjwgM.webp";
const AVATAR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/coach-mimi-avatar-hfcycmBwyyDs9wsxruTsZB.webp";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

        {/* Content */}
        <div className="relative z-10 container">
          <div className="max-w-2xl py-20 md:py-0">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-red-400" />
                </div>
                <span className="font-display text-xs uppercase tracking-[0.25em] text-red-400 font-medium">
                  Pilates-Strength &middot; Débutant
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
                <span className="text-foreground">Séance</span>
                <br />
                <span className="text-foreground">Pilates avec</span>
                <br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Poids Légers
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-foreground/60 leading-relaxed mb-8 max-w-lg">
                Inspirée du style de Marie Steffen. 24 exercices guidés avec
                timer intégré, instructions de coaching en temps réel et
                défilement automatique.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground/70">~24 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground/70">
                    Haltères 1-2 kg
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground/70">
                    45s effort / 15s repos
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                onClick={() => setLocation("/session")}
                className="font-display text-lg px-10 py-7 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 glow-coral rounded-2xl group"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Commencer la séance
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-white/30" />
          </div>
        </motion.div>
      </section>

      {/* PHASES SECTION */}
      <section className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
              Structure de la séance
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              3 phases, 24 exercices
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Warmup */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="group relative rounded-2xl overflow-hidden border border-border/30 bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={WARMUP_IMG}
                  alt="Echauffement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="relative p-6 -mt-16 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="font-display text-xs uppercase tracking-[0.15em] text-green-400">
                    Phase 1
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Echauffement & Mobilité
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Déverrouiller les articulations et préparer la colonne
                  vertébrale avec des exercices de mobilité 90/90.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>5 exercices</span>
                  <span>&middot;</span>
                  <span>5 min</span>
                  <span>&middot;</span>
                  <span>Sans poids</span>
                </div>
              </div>
            </motion.div>

            {/* Workout */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-border/30 bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={WORKOUT_IMG}
                  alt="Workout"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="relative p-6 -mt-16 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="font-display text-xs uppercase tracking-[0.15em] text-red-400">
                    Phase 2
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Pilates Strength
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Renforcement musculaire complet avec haltères légers. Abdos,
                  fessiers, planches et rotations.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>15 exercices</span>
                  <span>&middot;</span>
                  <span>15 min</span>
                  <span>&middot;</span>
                  <span>Avec poids</span>
                </div>
              </div>
            </motion.div>

            {/* Cooldown */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative rounded-2xl overflow-hidden border border-border/30 bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={COOLDOWN_IMG}
                  alt="Cool-down"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="relative p-6 -mt-16 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <span className="font-display text-xs uppercase tracking-[0.15em] text-blue-400">
                    Phase 3
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Retour au calme
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Relâcher les tensions, étirer la colonne et les fessiers.
                  Respiration profonde et récupération.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>4 exercices</span>
                  <span>&middot;</span>
                  <span>4 min</span>
                  <span>&middot;</span>
                  <span>Étirements</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 border-t border-border/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
                Fonctionnalités
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Votre coach
                <br />
                <span className="text-red-400">dans la poche</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Timer automatique
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Compte à rebours visuel pour chaque exercice. 45 secondes
                      d'effort, 15 secondes de transition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Instructions de coaching
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Chaque exercice est accompagné de consignes vocales
                      détaillées : position, mouvement et motivation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Adapté débutants
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Mouvements contrôlés, low impact, avec des options de
                      modification pour chaque niveau.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <img
                  src={AVATAR_IMG}
                  alt="Coach Mimi"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-red-400 block mb-1">
                    Votre coach
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Coach Mimi
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1">
                    Coach sportif fonctionnel &middot; Abidjan
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 border-t border-border/20">
        <div className="container text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt à transpirer ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Lancez la séance et laissez-vous guider exercice par exercice.
            </p>
            <Button
              size="lg"
              onClick={() => setLocation("/session")}
              className="font-display text-lg px-10 py-7 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 glow-coral rounded-2xl group"
            >
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Démarrer maintenant
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/10">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground">
            Coach Mimi &middot; Pilates-Strength &middot; Abidjan
          </p>
          <p className="text-[10px] text-muted-foreground/50 mt-1">
            Inspiré du style de Marie Steffen - The Art of Health
          </p>
        </div>
      </footer>
    </div>
  );
}
