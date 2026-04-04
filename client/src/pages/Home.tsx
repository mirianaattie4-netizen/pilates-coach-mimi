/*
 * Design: "Néon Fitness Flow" — Page d'accueil avec catalogue de 9 séances
 * Hero sombre avec vidéo, photo Coach Mimi, sélecteur de séances par catégorie
 */

import { useAuth } from "@/_core/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
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
  Target,
  Dumbbell,
  ArrowUpRight,
  Mic,
  Lock,
  Crown,
} from "lucide-react";
import { useLocation } from "wouter";
import { useRef, useState } from "react";
import { allSessions } from "@/lib/sessions";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const HERO_VIDEO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/jardindeden_2103c822.mp4";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/hero-pilates-dark-CZJEWSuRmdsaPbzNWyDpUx.png";
const COACH_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/coach-mimi-photo_6625e8f3.jpeg";

/* ─── Session card color mapping ─── */
const SESSION_COLORS: Record<string, {
  gradient: string;
  border: string;
  icon: typeof Flame;
  iconColor: string;
  badgeColor: string;
  ctaGradient: string;
}> = {
  classique: {
    gradient: "from-emerald-500/10 via-transparent to-transparent",
    border: "border-emerald-500/20 hover:border-emerald-400/50",
    icon: Heart,
    iconColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/15 text-emerald-400",
    ctaGradient: "from-emerald-500 to-green-500",
  },
  contemporain: {
    gradient: "from-orange-500/10 via-transparent to-transparent",
    border: "border-orange-500/20 hover:border-orange-400/50",
    icon: Flame,
    iconColor: "text-orange-400",
    badgeColor: "bg-orange-500/15 text-orange-400",
    ctaGradient: "from-orange-500 to-amber-500",
  },
  mobilite: {
    gradient: "from-cyan-500/10 via-transparent to-transparent",
    border: "border-cyan-500/20 hover:border-cyan-400/50",
    icon: Wind,
    iconColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/15 text-cyan-400",
    ctaGradient: "from-cyan-500 to-blue-500",
  },
  avance: {
    gradient: "from-red-500/10 via-transparent to-transparent",
    border: "border-red-500/20 hover:border-red-400/50",
    icon: Zap,
    iconColor: "text-red-400",
    badgeColor: "bg-red-500/15 text-red-400",
    ctaGradient: "from-red-500 to-rose-500",
  },
  "bas-du-corps": {
    gradient: "from-pink-500/10 via-transparent to-transparent",
    border: "border-pink-500/20 hover:border-pink-400/50",
    icon: Target,
    iconColor: "text-pink-400",
    badgeColor: "bg-pink-500/15 text-pink-400",
    ctaGradient: "from-pink-500 to-rose-500",
  },
  "haut-du-corps": {
    gradient: "from-violet-500/10 via-transparent to-transparent",
    border: "border-violet-500/20 hover:border-violet-400/50",
    icon: Dumbbell,
    iconColor: "text-violet-400",
    badgeColor: "bg-violet-500/15 text-violet-400",
    ctaGradient: "from-violet-500 to-purple-500",
  },
  "mobilite-hanches": {
    gradient: "from-teal-500/10 via-transparent to-transparent",
    border: "border-teal-500/20 hover:border-teal-400/50",
    icon: Activity,
    iconColor: "text-teal-400",
    badgeColor: "bg-teal-500/15 text-teal-400",
    ctaGradient: "from-teal-500 to-cyan-500",
  },
  "mobilite-colonne": {
    gradient: "from-amber-500/10 via-transparent to-transparent",
    border: "border-amber-500/20 hover:border-amber-400/50",
    icon: Shield,
    iconColor: "text-amber-400",
    badgeColor: "bg-amber-500/15 text-amber-400",
    ctaGradient: "from-amber-500 to-yellow-500",
  },
  stretching: {
    gradient: "from-fuchsia-500/10 via-transparent to-transparent",
    border: "border-fuchsia-500/20 hover:border-fuchsia-400/50",
    icon: Sparkles,
    iconColor: "text-fuchsia-400",
    badgeColor: "bg-fuchsia-500/15 text-fuchsia-400",
    ctaGradient: "from-fuchsia-500 to-purple-500",
  },
  "hiit-fullbody": {
    gradient: "from-rose-500/10 via-transparent to-transparent",
    border: "border-rose-500/20 hover:border-rose-400/50",
    icon: Zap,
    iconColor: "text-rose-400",
    badgeColor: "bg-rose-500/15 text-rose-400",
    ctaGradient: "from-rose-500 to-red-500",
  },
  "hiit-bas-du-corps": {
    gradient: "from-orange-600/10 via-transparent to-transparent",
    border: "border-orange-600/20 hover:border-orange-500/50",
    icon: Flame,
    iconColor: "text-orange-500",
    badgeColor: "bg-orange-600/15 text-orange-500",
    ctaGradient: "from-orange-600 to-red-500",
  },
  "hiit-haut-du-corps": {
    gradient: "from-sky-500/10 via-transparent to-transparent",
    border: "border-sky-500/20 hover:border-sky-400/50",
    icon: Dumbbell,
    iconColor: "text-sky-400",
    badgeColor: "bg-sky-500/15 text-sky-400",
    ctaGradient: "from-sky-500 to-blue-500",
  },
  "hiit-core": {
    gradient: "from-yellow-500/10 via-transparent to-transparent",
    border: "border-yellow-500/20 hover:border-yellow-400/50",
    icon: Target,
    iconColor: "text-yellow-400",
    badgeColor: "bg-yellow-500/15 text-yellow-400",
    ctaGradient: "from-yellow-500 to-amber-500",
  },
  "hiit-cardio": {
    gradient: "from-red-600/10 via-transparent to-transparent",
    border: "border-red-600/20 hover:border-red-500/50",
    icon: Flame,
    iconColor: "text-red-500",
    badgeColor: "bg-red-600/15 text-red-500",
    ctaGradient: "from-red-600 to-rose-500",
  },
  "hiit-tabata": {
    gradient: "from-purple-600/10 via-transparent to-transparent",
    border: "border-purple-600/20 hover:border-purple-500/50",
    icon: Zap,
    iconColor: "text-purple-400",
    badgeColor: "bg-purple-600/15 text-purple-400",
    ctaGradient: "from-purple-600 to-violet-500",
  },
  "hiit-pyramide": {
    gradient: "from-amber-600/10 via-transparent to-transparent",
    border: "border-amber-600/20 hover:border-amber-500/50",
    icon: Zap,
    iconColor: "text-amber-400",
    badgeColor: "bg-amber-600/15 text-amber-400",
    ctaGradient: "from-amber-600 to-red-500",
  },
  "hiit-emom": {
    gradient: "from-lime-500/10 via-transparent to-transparent",
    border: "border-lime-500/20 hover:border-lime-400/50",
    icon: Flame,
    iconColor: "text-lime-400",
    badgeColor: "bg-lime-500/15 text-lime-400",
    ctaGradient: "from-lime-600 to-green-500",
  },
  "hiit-amrap": {
    gradient: "from-sky-600/10 via-transparent to-transparent",
    border: "border-sky-600/20 hover:border-sky-500/50",
    icon: Zap,
    iconColor: "text-sky-400",
    badgeColor: "bg-sky-600/15 text-sky-400",
    ctaGradient: "from-sky-600 to-blue-500",
  },
  "muscu-fullbody": {
    gradient: "from-slate-500/10 via-transparent to-transparent",
    border: "border-slate-500/20 hover:border-slate-400/50",
    icon: Dumbbell,
    iconColor: "text-slate-400",
    badgeColor: "bg-slate-500/15 text-slate-400",
    ctaGradient: "from-slate-600 to-zinc-500",
  },
  "muscu-push": {
    gradient: "from-rose-600/10 via-transparent to-transparent",
    border: "border-rose-600/20 hover:border-rose-500/50",
    icon: Dumbbell,
    iconColor: "text-rose-400",
    badgeColor: "bg-rose-600/15 text-rose-400",
    ctaGradient: "from-rose-600 to-pink-500",
  },
  "muscu-pull-legs": {
    gradient: "from-emerald-600/10 via-transparent to-transparent",
    border: "border-emerald-600/20 hover:border-emerald-500/50",
    icon: Dumbbell,
    iconColor: "text-emerald-400",
    badgeColor: "bg-emerald-600/15 text-emerald-400",
    ctaGradient: "from-emerald-600 to-teal-500",
  },
};

const defaultColor = SESSION_COLORS.classique;

/* ─── Category filter ─── */
type Category = "all" | "pilates" | "mobilite" | "stretching" | "hiit" | "musculation";

const CATEGORIES: { key: Category; label: string; color: string }[] = [
  { key: "all", label: "Toutes", color: "from-red-500/20 to-orange-500/20 text-orange-300" },
  { key: "pilates", label: "Pilates", color: "from-emerald-500/20 to-green-500/20 text-emerald-300" },
  { key: "mobilite", label: "Mobilité", color: "from-cyan-500/20 to-blue-500/20 text-cyan-300" },
  { key: "stretching", label: "Stretching", color: "from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300" },
  { key: "hiit", label: "HIIT Circuit", color: "from-red-600/20 to-rose-500/20 text-red-400" },
  { key: "musculation", label: "Musculation", color: "from-slate-500/20 to-zinc-500/20 text-slate-300" },
];

function getSessionCategory(id: string): Category {
  if (["classique", "contemporain", "avance", "bas-du-corps", "haut-du-corps"].includes(id)) return "pilates";
  if (["mobilite", "mobilite-hanches", "mobilite-colonne"].includes(id)) return "mobilite";
  if (id === "stretching") return "stretching";
  if (["hiit-fullbody", "hiit-bas-du-corps", "hiit-haut-du-corps", "hiit-core", "hiit-cardio", "hiit-tabata", "hiit-pyramide", "hiit-emom", "hiit-amrap"].includes(id)) return "hiit";
  if (["muscu-fullbody", "muscu-push", "muscu-pull-legs"].includes(id)) return "musculation";
  return "pilates";
}

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const { isPremium, isSessionFree, canAccessSession } = useSubscription();

  const [, setLocation] = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const handleSessionClick = (sessionId: string) => {
    if (canAccessSession(sessionId)) {
      setLocation(`/session/${sessionId}`);
    } else {
      toast.info("Cette séance nécessite un abonnement Premium.");
      setLocation("/abonnement");
    }
  };

  const filteredSessions = activeCategory === "all"
    ? allSessions
    : allSessions.filter((s) => getSessionCategory(s.id) === activeCategory);

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
                <span className="text-foreground">21 Séances</span>
                <br />
                <span className="text-foreground">Pilates, HIIT, Muscu &amp; Mobilité</span>
                <br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Guidées au Sol
                </span>
              </h1>

              <p className="text-lg text-foreground/60 leading-relaxed mb-8 max-w-lg">
                21 séances complètes : Pilates (Classique, Avancé, Contemporain, Bas &amp; Haut du Corps), 
                9 circuits HIIT (Full Body, Bas du Corps, Haut du Corps, Core, Cardio, Tabata, Pyramide, EMOM, AMRAP), 
                Musculation (Full Body, Push, Pull &amp; Legs), Mobilité et Stretching. Timer, signal sonore, lecteur vocal et coaching en temps réel.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground/70">21 séances</span>
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
                  <Mic className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground/70">Lecteur vocal</span>
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
            className="text-center mb-12"
          >
            <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
              Catalogue de séances
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choisissez votre programme
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              21 séances complètes au sol, sans matériel, guidées pas à pas avec timer,
              illustrations, signal sonore et lecteur vocal.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? `bg-gradient-to-r ${cat.color} shadow-lg`
                    : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {cat.label}
                {activeCategory === cat.key && (
                  <span className="text-xs opacity-70">
                    ({cat.key === "all" ? allSessions.length : allSessions.filter(s => getSessionCategory(s.id) === cat.key).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Sessions Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session, idx) => {
              const style = SESSION_COLORS[session.id] || defaultColor;
              const Icon = style.icon;
              const totalMin = Math.round(session.totalDuration / 60);
              const mainExCount = session.exercises.filter(e => !e.isTransition).length;

              return (
                <motion.div
                  key={session.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`group relative rounded-2xl overflow-hidden border bg-card transition-all duration-500 ${style.border} cursor-pointer`}
                  onClick={() => handleSessionClick(session.id)}
                >
                  {/* Free/Premium badge */}
                  {isSessionFree(session.id) ? (
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-display font-bold uppercase tracking-wider flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      Gratuit
                    </div>
                  ) : !canAccessSession(session.id) ? (
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-display font-bold uppercase tracking-wider flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Premium
                    </div>
                  ) : null}

                  {/* Lock overlay for premium sessions */}
                  {!canAccessSession(session.id) && (
                    <div className="absolute inset-0 z-[5] bg-background/30 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full">
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400 text-sm font-display font-bold">Abonnement requis</span>
                      </div>
                    </div>
                  )}

                  {/* Top gradient accent */}
                  <div className={`h-1 bg-gradient-to-r ${style.ctaGradient}`} />

                  {/* Card content */}
                  <div className={`p-6 bg-gradient-to-b ${style.gradient}`}>
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 ${style.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                          {session.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">{session.subtitle}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-foreground/60 transition-colors shrink-0 mt-1" />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {session.description}
                    </p>

                    {/* Stats row */}
                    <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-display uppercase tracking-wider font-bold ${style.badgeColor}`}>
                        {session.level}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>~{totalMin} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        <span>{mainExCount} ex.</span>
                      </div>
                    </div>

                    {/* Phase pills */}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400/80 font-display uppercase tracking-wider">
                        {session.phaseLabels.warmup}
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400/80 font-display uppercase tracking-wider">
                        {session.phaseLabels.workout}
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400/80 font-display uppercase tracking-wider">
                        {session.phaseLabels.cooldown}
                      </span>
                    </div>
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
                      d'effort, transitions guidées. 21 séances complètes disponibles.
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
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Mic className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Lecteur vocal
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Les instructions de coaching sont lues à voix haute automatiquement.
                      Activez/désactivez d'un clic. Idéal pour coacher sans regarder l'écran.
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
              21 séances de Pilates, HIIT, Musculation, Mobilité et Stretching au sol. Choisissez votre programme
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
                onClick={() => setLocation('/abonnement')}
                className="font-display text-lg px-10 py-7 bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 rounded-2xl group"
              >
                <Crown className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Abonnement Premium
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
