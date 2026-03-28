/*
 * Page À propos — Coach Mimi
 * Design: "Néon Fitness Flow" — fond sombre, accents corail
 * Parcours, diplômes, services, photo réelle
 */

import { motion } from "framer-motion";
import {
  Award,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Flame,
  ChevronRight,
  Instagram,
  Mail,
  Phone,
  Users,
  Building2,
  Dumbbell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Footer from "@/components/Footer";

const COACH_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/coach-mimi-photo_6625e8f3.jpeg";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/hero-pilates-dark-CZJEWSuRmdsaPbzNWyDpUx.png";

const diplomas = [
  {
    title: "Pilates Mat Work",
    description: "Certification Pilates au sol — exercices classiques et contemporains sur tapis",
    icon: Heart,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Coaching Sportif Fonctionnel",
    description: "Diplôme de coach sportif spécialisé en entraînement fonctionnel body weight",
    icon: Dumbbell,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    title: "Préparation Physique",
    description: "Formation en préparation physique et conditionnement athlétique",
    icon: Flame,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Mobilité & Stretching",
    description: "Certification en mobilité articulaire, souplesse et récupération active",
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Nutrition Sportive",
    description: "Formation en nutrition adaptée à la performance et au bien-être",
    icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    title: "Coaching en Entreprise",
    description: "Certification pour l'animation de séances sportives en milieu professionnel",
    icon: Building2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const services = [
  {
    title: "Pilates au Sol",
    description: "Séances de Pilates classique et contemporain sur tapis, tous niveaux. Renforcement du centre, posture et souplesse.",
    icon: Heart,
  },
  {
    title: "Mobilité & Récupération",
    description: "Séances dédiées à la mobilité articulaire, l'étirement et la récupération active pour prévenir les blessures.",
    icon: Users,
  },
  {
    title: "Coaching Fonctionnel",
    description: "Entraînement au poids du corps axé sur les mouvements fonctionnels du quotidien. Aucun matériel nécessaire.",
    icon: Dumbbell,
  },
  {
    title: "Coaching en Entreprise",
    description: "Je me déplace dans vos locaux (entreprises, banques) pour des séances de groupe adaptées à vos collaborateurs.",
    icon: Building2,
  },
];

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="relative z-10 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-red-400" />
                </div>
                <span className="font-display text-xs uppercase tracking-[0.25em] text-red-400 font-medium">
                  À propos
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Coach Mimi</span>
                <br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Votre coach
                </span>
              </h1>

              <p className="text-lg text-foreground/60 leading-relaxed mb-6 max-w-lg">
                Coach sportif fonctionnel certifiée, spécialisée en Pilates au sol,
                mobilité articulaire et exercices au poids du corps. Basée à Abidjan,
                je me déplace en entreprise et en banque pour des séances adaptées à tous les niveaux.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/60 border border-border/30">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-foreground/80">6 Diplômes</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/60 border border-border/30">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-foreground/80">Abidjan</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/60 border border-border/30">
                  <Briefcase className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-foreground/80">Entreprise & Particulier</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/COACHMIMI87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm text-foreground/80 hover:text-purple-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @COACHMIMI87
                </a>
                <a
                  href="mailto:HFM2026@OUTLOOK.FR"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-sm text-foreground/80 hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  HFM2026@OUTLOOK.FR
                </a>
                <a
                  href="tel:+2250715151408"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-sm text-foreground/80 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  07 15 15 14 08
                </a>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] max-w-md mx-auto relative">
                <img
                  src={COACH_PHOTO}
                  alt="Coach Mimi — Coach sportif fonctionnel à Abidjan"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIPLÔMES */}
      <section className="py-24 border-t border-border/20">
        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
              Certifications
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              6 Diplômes
              <span className="text-amber-400"> Professionnels</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Une formation complète pour un accompagnement de qualité,
              du Pilates au coaching en entreprise.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diplomas.map((diploma, idx) => {
              const Icon = diploma.icon;
              return (
                <motion.div
                  key={diploma.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative rounded-2xl bg-card/60 border border-border/30 p-6 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${diploma.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${diploma.color}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {diploma.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {diploma.description}
                  </p>
                  {/* Subtle number */}
                  <span className="absolute top-4 right-4 font-display text-3xl font-bold text-foreground/5">
                    0{idx + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 border-t border-border/20">
        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
              Mes services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ce que je
              <span className="text-red-400"> propose</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des séances adaptées à vos besoins, en individuel ou en groupe,
              chez vous ou dans vos locaux professionnels.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-card/40 border border-border/20 hover:border-red-500/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/20">
        <div className="container text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prête à commencer ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Choisissez parmi 3 séances de Pilates au sol et mobilité,
              et laissez-vous guider exercice par exercice.
            </p>
            <Button
              size="lg"
              onClick={() => setLocation("/")}
              className="font-display text-lg px-10 py-7 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 glow-coral rounded-2xl group"
            >
              <Flame className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Voir les séances
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
