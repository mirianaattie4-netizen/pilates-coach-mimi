/*
 * Design: "Néon Fitness Flow" — Page d'accueil avec catalogue de 3 séances
 * Hero sombre avec vidéo, photo Coach Mimi, sélecteur de séances
 */

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Play,
  Clock,
  Flame,
  Heart,
  ChevronRight,
  Zap,
  Shield,
  Volume2,
  Image as ImageIcon,
  Sparkles,
  Wind,
  Activity,
} from "lucide-react";
import { useLocation } from "wouter";
import { useRef, useState } from "react";
import { allSessions } from "@/lib/sessions";
import Footer from "@/components/Footer";

const HERO_VIDEO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/jardindeden_2103c822.mp4";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/hero-pilates-dark-CZJEWSuRmdsaPbzNWyDpUx.png";
const WARMUP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/warmup-phase-iSfdrwRGbXZhdPcMxwmxMe.webp";
const WORKOUT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/workout-phase-dCquAFYUfWGuPVnKqNuaQV.webp";
const COOLDOWN_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/cooldown-phase-Js4T7k9uzVys8RZyKVjwgM.webp";
const COACH_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/coach-mimi-photo_6625e8f3.jpeg";

// Session card styling
const SESSION_CARD_STYLES: Record<string, {
  gradient: string;
  border: string;
  icon: typeof Flame;
  iconColor: string;
  badgeColor: string;
  ctaGradient: string;
  glowClass: string;
  image: string;
}> = {
  classique: {
    gradient: "from-emerald-500/10 via-transparent to-transparent",
    border: "border-emerald-500/30 hover:border-emerald-400/60",
    icon: Heart,
    iconColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/15 text-emerald-400",
    ctaGradient: "from-emerald-500 to-green-500",
    glowClass: "glow-green",
    image: WARMUP_IMG,
  },
  contemporain: {
    gradient: "from-orange-500/10 via-transparent to-transparent",
    border: "border-orange-500/30 hover:border-orange-400/60",
    icon: Flame,
    iconColor: "text-orange-400",
    badgeColor: "bg-orange-500/15 text-orange-400",
    ctaGradient: "from-orange-500 to-amber-500",
    glowClass: "glow-coral",
    image: WORKOUT_IMG,
  },
  mobilite: {
    gradient: "from-cyan-500/10 via-transparent to-transparent",
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    icon: Wind,
    iconColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/15 text-cyan-400",
    ctaGradient: "from-cyan-500 to-blue-500",
    glowClass: "glow-blue",
    image: COOLDOWN_IMG,
  },
};

export default function Home() {
  const [, setLocation] = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION with Video Background */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-30" : "opacity-0"}`}
          poster={HERO_IMG}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {!videoLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

        <div className="relative z-10 container">
          <div className="max-w-2xl py-20 md:py-0">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-red-400" />
                </div>
                <span className="font-display text-xs uppercase tracking-[0.25em] text-red-400 font-medium">
                  Pilates &middot; Mobilité &middot;{" "}
                  <a href="/a-propos" className="underline underline-offset-2 hover:text-red-300 transition-colors">Coach Mimi</a>
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
                <span className="text-foreground">3 Séances</span>
                <br />
                <span className="text-foreground">Pilates &amp; Mobilité</span>
                <br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Guidées au Sol
                </span>
              </h1>

              <p className="text-lg text-foreground/60 leading-relaxed mb-8 max-w-lg">
                Choisissez votre séance parmi 3 programmes complets : Pilates Classique,
                Pilates Contemporain ou Mobilité Pure. Timer, illustrations, signal sonore
                et coaching en temps réel.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground/70">3 séances</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground/70">Tapis uniquement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground/70">Signal sonore</span>
                </div>
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground/70">Illustrations</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => {
                  document.getElementById("seances")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-display text-lg px-10 py-7 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 glow-coral rounded-2xl group"
              >
                <Sparkles className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Choisir ma séance
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

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

      {/* SESSIONS CATALOGUE */}
      <section id="seances" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
              Catalogue de séances
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choisissez votre programme
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              3 séances complètes au sol, sans matériel, guidées pas à pas avec timer,
              illustrations et signal sonore.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {allSessions.map((session, idx) => {
              const style = SESSION_CARD_STYLES[session.id] || SESSION_CARD_STYLES.classique;
              const Icon = style.icon;
              const totalMin = Math.round(session.totalDuration / 60);
              const mainExCount = session.exercises.filter(e => !e.isTransition).length;

              return (
                <motion.div
                  key={session.id}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`group relative rounded-2xl overflow-hidden border bg-card transition-all duration-500 ${style.border}`}
                >
                  {/* Card image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={style.image}
                      alt={session.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    {/* Level badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-display uppercase tracking-[0.15em] font-bold ${style.badgeColor}`}>
                      {session.level}
                    </div>
                    {/* Duration badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-[10px] font-display text-white/80 flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      ~{totalMin} min
                    </div>
                  </div>

                  {/* Card content */}
                  <div className={`p-6 bg-gradient-to-b ${style.gradient}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${style.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                          {session.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">{session.subtitle}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                      {session.description}
                    </p>

                    {/* Stats row */}
                    <div className="flex items-center gap-3 mb-6 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        <span>{mainExCount} exercices</span>
                      </div>
                      <span className="text-border">&middot;</span>
                      <span>{session.equipment}</span>
                    </div>

                    {/* Phase pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 font-display uppercase tracking-wider">
                        {session.phaseLabels.warmup}
                      </span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 font-display uppercase tracking-wider">
                        {session.phaseLabels.workout}
                      </span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-display uppercase tracking-wider">
                        {session.phaseLabels.cooldown}
                      </span>
                    </div>

                    {/* CTA */}
                    <Button
                      size="lg"
                      onClick={() => setLocation(`/session/${session.id}`)}
                      className={`w-full font-display bg-gradient-to-r ${style.ctaGradient} text-white hover:opacity-90 rounded-xl group/btn`}
                    >
                      <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Lancer la séance
                      <ChevronRight className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION with Coach Mimi real photo */}
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
                      d'effort, transitions guidées. 3 séances complètes disponibles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                    <Volume2 className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Signal sonore
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Bip audio à chaque changement d'exercice et alerte à 3 secondes
                      de la fin. Plus besoin de regarder l'écran en permanence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <ImageIcon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Illustrations de mouvements
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Chaque exercice est accompagné d'une illustration montrant
                      la position correcte et le mouvement à réaliser.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Tous niveaux
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Du débutant à l'intermédiaire, chaque séance propose des mouvements
                      adaptés avec des instructions de coaching détaillées.
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
              <div className="aspect-[3/4] max-w-md mx-auto relative">
                <img
                  src={COACH_PHOTO}
                  alt="Coach Mimi"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-red-400 block mb-1">
                    Votre coach
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Coach Mimi
                  </h3>
                  <p className="text-sm text-white/70 mt-1">
                    Coach sportif fonctionnel &middot; 6 diplômes &middot; Abidjan
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
              Prête à transpirer ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              3 séances de Pilates au sol et mobilité. Choisissez votre programme
              et laissez-vous guider exercice par exercice.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => {
                document.getElementById("seances")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-display text-lg px-10 py-7 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 glow-coral rounded-2xl group"
            >
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Voir les séances
            </Button>
            <Button
              size="lg"
              onClick={() => setLocation('/galerie')}
              className="font-display text-lg px-10 py-7 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-2xl group"
            >
              <ImageIcon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Galerie d'exercices
            </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
