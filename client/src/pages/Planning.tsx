/*
 * Page Planning — The Labs Training Camp
 * Design: "Néon Fitness Flow" — fond sombre, accents corail
 * 4 plannings : Pilates, Cours Adultes, Kids, Combat
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Flame,
  Clock,
  Swords,
  Baby,
  Dumbbell,
  Medal,
  Heart,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const COACH_PHOTO = "/images/coach-mimi-backyard-ultra.jpg";

/* ─── Data: Planning Pilates & Yoga ─── */

interface PilatesSlot {
  time: string;
  name: string;
}

interface PilatesDay {
  day: string;
  slots: PilatesSlot[];
}

const pilatesSchedule: PilatesDay[] = [
  {
    day: "Lundi",
    slots: [
      { time: "8h30", name: "Mat Pilates" },
      { time: "9h30", name: "Yoga" },
      { time: "15h30", name: "Pilates Kids" },
      { time: "16h30", name: "Reformer" },
      { time: "17h30", name: "Reformer" },
      { time: "18h30", name: "Reformer" },
    ],
  },
  {
    day: "Mardi",
    slots: [
      { time: "11h30", name: "Reformer" },
      { time: "16h30", name: "Reformer" },
      { time: "18h30", name: "Reformer" },
    ],
  },
  {
    day: "Mercredi",
    slots: [
      { time: "8h30", name: "Yoga" },
      { time: "9h30", name: "Reformer" },
      { time: "15h30", name: "Pilates Kids" },
      { time: "17h30", name: "Reformer" },
      { time: "18h30", name: "Mat Pilates" },
      { time: "19h30", name: "Special Core" },
    ],
  },
  {
    day: "Jeudi",
    slots: [
      { time: "8h30", name: "Glutes & Core Training" },
      { time: "16h30", name: "Reformer" },
      { time: "18h30", name: "Reformer" },
      { time: "19h30", name: "Yoga" },
    ],
  },
  {
    day: "Vendredi",
    slots: [
      { time: "8h30", name: "Mat Pilates" },
      { time: "10h30", name: "Reformer" },
      { time: "15h30", name: "Pilates Kids" },
      { time: "16h30", name: "Yoga" },
      { time: "17h30", name: "Reformer" },
    ],
  },
  {
    day: "Samedi",
    slots: [
      { time: "9h00", name: "Reformer" },
      { time: "10h00", name: "Pilates Ado" },
      { time: "11h00", name: "Pilates" },
    ],
  },
];

const pilatesClassColor: Record<string, string> = {
  "Mat Pilates": "bg-emerald-400",
  Pilates: "bg-emerald-400",
  "Pilates Kids": "bg-amber-400",
  "Pilates Ado": "bg-amber-400",
  Yoga: "bg-purple-400",
  Reformer: "bg-cyan-400",
  "Special Core": "bg-rose-400",
  "Glutes & Core Training": "bg-rose-400",
};

/* ─── Data: Planning de Cours (Adultes) ─── */

type Tag = "CROSS" | "STUDIO" | "DOJO";

interface Slot {
  time: string;
  name: string;
  tag: Tag;
}

interface DaySchedule {
  day: string;
  tags: Tag[];
  slots: Slot[];
}

const tagStyles: Record<Tag, string> = {
  CROSS: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  STUDIO: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  DOJO: "bg-red-500/15 text-red-400 border-red-500/30",
};

const coursSchedule: DaySchedule[] = [
  {
    day: "Lundi",
    tags: ["CROSS", "STUDIO"],
    slots: [
      { time: "12H30", name: "Hyrox", tag: "CROSS" },
      { time: "17H30", name: "Hyrox", tag: "CROSS" },
      { time: "18H00", name: "Spinning", tag: "STUDIO" },
      { time: "18H30", name: "Hyrox", tag: "CROSS" },
    ],
  },
  {
    day: "Mardi",
    tags: ["DOJO", "CROSS"],
    slots: [
      { time: "08H30", name: "Hyrox 100% Femme", tag: "DOJO" },
      { time: "12H30", name: "Hyrox", tag: "CROSS" },
      { time: "17H30", name: "Suspension Training", tag: "DOJO" },
      { time: "17H30", name: "Hyrox", tag: "CROSS" },
      { time: "18H30", name: "Boxing Cardio", tag: "DOJO" },
      { time: "18H30", name: "Hyrox", tag: "CROSS" },
    ],
  },
  {
    day: "Mercredi",
    tags: ["CROSS", "STUDIO"],
    slots: [
      { time: "12H00", name: "Hyrox", tag: "CROSS" },
      { time: "17H30", name: "Hyrox", tag: "CROSS" },
      { time: "18H00", name: "Spinning", tag: "STUDIO" },
      { time: "18H30", name: "Hyrox", tag: "CROSS" },
    ],
  },
  {
    day: "Jeudi",
    tags: ["DOJO", "CROSS"],
    slots: [
      { time: "12H30", name: "Hyrox", tag: "CROSS" },
      { time: "17H30", name: "Gluts and Core", tag: "DOJO" },
      { time: "17H30", name: "Hyrox", tag: "CROSS" },
      { time: "18H30", name: "Boxing Cardio", tag: "DOJO" },
      { time: "18H30", name: "Hyrox", tag: "CROSS" },
    ],
  },
  {
    day: "Vendredi",
    tags: ["CROSS", "STUDIO"],
    slots: [
      { time: "12H30", name: "Hyrox", tag: "CROSS" },
      { time: "17H30", name: "Hyrox", tag: "CROSS" },
      { time: "18H00", name: "Spinning", tag: "STUDIO" },
      { time: "18H30", name: "Hyrox", tag: "CROSS" },
    ],
  },
  {
    day: "Samedi",
    tags: ["CROSS"],
    slots: [
      { time: "10H00", name: "Hyrox", tag: "CROSS" },
      { time: "11H00", name: "Hyrox", tag: "CROSS" },
    ],
  },
];

/* ─── Data: Planning Kids ─── */

const kidsDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const kidsHours = ["09H00", "10H00", "15H00", "15H30", "16H00", "16H15"];

const kidsGrid: Record<string, Record<string, string>> = {
  "10H00": { Samedi: "Judo" },
  "15H00": { Mardi: "Taekwondo", Mercredi: "Judo", Jeudi: "Taekwondo" },
  "15H30": { Lundi: "Pilates", Mercredi: "Pilates", Vendredi: "Pilates" },
  "16H00": {
    Mardi: "Gymnastique",
    Mercredi: "Cross Training (15H)",
    Jeudi: "Gymnastique",
  },
  "16H15": { Lundi: "Boxe", Mercredi: "Boxe", Vendredi: "Boxe" },
};

/* ─── Data: Planning Combat ─── */

const pledPoingSchedule = [
  { day: "Lundi", slots: ["Ado : 17H15", "Adulte : 18H15", "Adulte : 19H15"] },
  { day: "Mercredi", slots: ["Ado : 17H15", "Adulte : 18H15", "Adulte : 19H15"] },
  { day: "Vendredi", slots: ["Ado : 17H15", "Adulte : 18H15", "Adulte : 19H15"] },
  { day: "Samedi", slots: ["Adulte : 11H00"] },
];

const jiuJitsuSchedule = [
  { day: "Lundi", slots: ["Adulte : 20H00"] },
  { day: "Mercredi", slots: ["Adulte : 20H00"] },
  { day: "Samedi", slots: ["Adulte : 09H00"] },
];

export default function Planning() {
  const [tab, setTab] = useState("pilates");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Coach */}
      <section className="border-b border-border/20">
        <div className="container py-14">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[auto_1fr] gap-8 items-center"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 shrink-0">
              <img
                src={COACH_PHOTO}
                alt="Coach Mimi"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Medal className="w-3.5 h-3.5 text-red-400" />
                </div>
                <span className="font-display text-xs uppercase tracking-[0.25em] text-red-400 font-medium">
                  Votre coach
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Coach Mimi
              </h2>
              <p className="text-sm md:text-base text-foreground/60 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Coach sportif fonctionnel certifiée (6 diplômes), Coach Mimi encadre
                les cours de Pilates, mobilité et renforcement de The Labs Training
                Camp. Passionnée de dépassement de soi, elle est aussi ultra-traileuse :
                elle a couru le Backyard Ultra Abidjan aux côtés de Terres d'Endurance,
                repoussant ses limites tour après tour avec la même exigence qu'elle
                transmet à chacun de ses élèves.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
        <div className="container relative pt-8 pb-16">
          <nav className="flex items-center justify-between mb-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                <Flame className="w-4 h-4 text-red-400" />
              </div>
              <span className="font-display text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                Coach Mimi
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              >
                Accueil
              </Link>
              <Link
                href="/a-propos"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              >
                À propos
              </Link>
              <Link href="/planning" className="text-xs text-red-400 font-medium">
                Planning
              </Link>
            </div>
          </nav>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-red-400" />
              </div>
              <span className="font-display text-xs uppercase tracking-[0.25em] text-red-400 font-medium">
                Emploi du temps
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-foreground">The Labs</span>{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Training Camp
              </span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg">
              Retrouvez tous les plannings de la semaine : cours adultes,
              cours enfants et disciplines de combat.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Plannings */}
      <section className="pb-24">
        <div className="container">
          <Tabs value={tab} onValueChange={setTab} className="gap-10">
            <TabsList className="h-auto p-1.5 bg-card/60 border border-border/30 rounded-2xl">
              <TabsTrigger
                value="pilates"
                className="rounded-xl px-4 py-2.5 gap-2 font-display text-xs uppercase tracking-wider"
              >
                <Heart className="w-4 h-4" />
                Pilates
              </TabsTrigger>
              <TabsTrigger
                value="cours"
                className="rounded-xl px-4 py-2.5 gap-2 font-display text-xs uppercase tracking-wider"
              >
                <Dumbbell className="w-4 h-4" />
                Cours Adultes
              </TabsTrigger>
              <TabsTrigger
                value="kids"
                className="rounded-xl px-4 py-2.5 gap-2 font-display text-xs uppercase tracking-wider"
              >
                <Baby className="w-4 h-4" />
                Kids
              </TabsTrigger>
              <TabsTrigger
                value="combat"
                className="rounded-xl px-4 py-2.5 gap-2 font-display text-xs uppercase tracking-wider"
              >
                <Swords className="w-4 h-4" />
                Combat
              </TabsTrigger>
            </TabsList>

            {/* Pilates & Yoga */}
            <TabsContent value="pilates">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pilatesSchedule.map((day, idx) => (
                  <motion.div
                    key={day.day}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="rounded-2xl bg-card/60 border border-border/30 p-6"
                  >
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">
                      {day.day}
                    </h3>
                    <ul className="space-y-2.5">
                      {day.slots.map((slot, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between text-sm border-b border-border/10 pb-2.5 last:border-0 last:pb-0"
                        >
                          <span className="text-muted-foreground font-medium tabular-nums">
                            {slot.time}
                          </span>
                          <span className="flex items-center gap-2 text-foreground/90">
                            {slot.name}
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                pilatesClassColor[slot.name] ?? "bg-foreground/30"
                              }`}
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Cours Adultes */}
            <TabsContent value="cours">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursSchedule.map((day, idx) => (
                  <motion.div
                    key={day.day}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="rounded-2xl bg-card/60 border border-border/30 p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {day.day}
                      </h3>
                      <div className="flex gap-1.5">
                        {day.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className={tagStyles[tag]}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {day.slots.map((slot, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between text-sm border-b border-border/10 pb-2.5 last:border-0 last:pb-0"
                        >
                          <span className="text-muted-foreground font-medium tabular-nums">
                            {slot.time}
                          </span>
                          <span className="flex items-center gap-2 text-foreground/90">
                            {slot.name}
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                slot.tag === "CROSS"
                                  ? "bg-orange-400"
                                  : slot.tag === "STUDIO"
                                    ? "bg-pink-400"
                                    : "bg-red-400"
                              }`}
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Kids */}
            <TabsContent value="kids">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-card/60 border border-border/30 overflow-hidden"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/30 bg-card/80">
                        <th className="font-display text-xs uppercase tracking-wider text-muted-foreground text-left px-4 py-3">
                          Heure
                        </th>
                        {kidsDays.map((d) => (
                          <th
                            key={d}
                            className="font-display text-xs uppercase tracking-wider text-muted-foreground text-left px-4 py-3"
                          >
                            {d}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {kidsHours.map((hour) => (
                        <tr
                          key={hour}
                          className="border-b border-border/10 last:border-0"
                        >
                          <td className="px-4 py-3 font-medium text-foreground/80 tabular-nums whitespace-nowrap">
                            {hour}
                          </td>
                          {kidsDays.map((d) => (
                            <td key={d} className="px-4 py-3 text-foreground/90">
                              {kidsGrid[hour]?.[d] ?? ""}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </TabsContent>

            {/* Combat */}
            <TabsContent value="combat">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-card/60 border border-border/30 p-6"
                >
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Pied Poing / Anglaise
                  </h3>
                  <p className="text-xs text-muted-foreground mb-5">
                    Boxe pieds-poings et boxe anglaise
                  </p>
                  <ul className="space-y-4">
                    {pledPoingSchedule.map((d) => (
                      <li key={d.day}>
                        <span className="font-display text-xs uppercase tracking-wider text-red-400 block mb-1.5">
                          {d.day}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {d.slots.map((s, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-foreground/80"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="rounded-2xl bg-card/60 border border-border/30 p-6"
                >
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Jiu-Jitsu
                  </h3>
                  <p className="text-xs text-muted-foreground mb-5">
                    Jiu-jitsu brésilien, tous niveaux
                  </p>
                  <ul className="space-y-4">
                    {jiuJitsuSchedule.map((d) => (
                      <li key={d.day}>
                        <span className="font-display text-xs uppercase tracking-wider text-amber-400 block mb-1.5">
                          {d.day}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {d.slots.map((s, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-foreground/80"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
