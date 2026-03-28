/*
 * Gallery — Galerie d'exercices Pilates enseignés par Coach Mimi
 * Design: "Néon Fitness Flow" — fond sombre, grille masonry, lightbox, vidéos YouTube
 * 10 images HD générées + 4 vidéos YouTube de démonstration Pilates au sol
 */

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Flame,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Image as ImageIcon,
  Video,
  ArrowLeft,
  Eye,
} from "lucide-react";
import Footer from "@/components/Footer";

/* ─── Gallery Data ─── */

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  muscles: string;
  description: string;
}

interface GalleryVideo {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  duration: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "hundred",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-hundred-9oeZAPumsaTSKtzuKhqQMy.webp",
    title: "The Hundred",
    category: "Core",
    muscles: "Abdominaux profonds, Transverse",
    description:
      "L'exercice signature du Pilates. Allongée sur le dos, jambes à 45°, bras le long du corps qui pompent. 100 battements de bras en respirant 5 temps d'inspiration, 5 temps d'expiration.",
  },
  {
    id: "rollup",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-rollup-S8VjqdMERVjQbkiswZXxLW.webp",
    title: "Roll-Up",
    category: "Core",
    muscles: "Grand droit, Fléchisseurs de hanche",
    description:
      "Enroulement vertébral contrôlé. Du sol jusqu'à la flexion avant, vertèbre par vertèbre. Travaille la mobilité de la colonne et la force abdominale en profondeur.",
  },
  {
    id: "singleleg",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-singleleg-njU3H3DAnQQJWQQWnokTxy.webp",
    title: "Single Leg Stretch",
    category: "Core",
    muscles: "Obliques, Transverse, Psoas",
    description:
      "Allongée, tête et épaules décollées, un genou tiré vers la poitrine pendant que l'autre jambe s'étend. Alternance fluide avec respiration contrôlée.",
  },
  {
    id: "swimming",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-swimming-SDavH7fBsb3eELCi5WmZR8.webp",
    title: "Swimming",
    category: "Dos & Postural",
    muscles: "Érecteurs du rachis, Fessiers, Deltoïdes",
    description:
      "Sur le ventre, bras et jambes décollés du sol, battements alternés comme en nage. Renforce toute la chaîne postérieure et améliore la posture.",
  },
  {
    id: "plank",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-plank-axLMro8hFGAnv9fxg3Sm7m.webp",
    title: "Planche Pilates",
    category: "Full Body",
    muscles: "Core complet, Épaules, Quadriceps",
    description:
      "Gainage sur les avant-bras avec alignement parfait tête-épaules-hanches-talons. Activation du centre (powerhouse) et respiration latérale thoracique.",
  },
  {
    id: "bridge",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-bridge-J9pLkaNFAreMaTxw2QQsyQ.webp",
    title: "Shoulder Bridge",
    category: "Fessiers & Dos",
    muscles: "Fessiers, Ischio-jambiers, Érecteurs",
    description:
      "Pont sur les épaules avec déroulé vertébral. Les hanches montent en articulant chaque vertèbre. Renforce les fessiers et mobilise la colonne lombaire.",
  },
  {
    id: "teaser",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-teaser-5DmsvhpUwfYGp2moZreYoB.webp",
    title: "Teaser",
    category: "Core Avancé",
    muscles: "Grand droit, Psoas, Transverse",
    description:
      "Position en V sur les ischions, jambes tendues à 45°, bras parallèles aux jambes. L'exercice ultime de contrôle et d'équilibre en Pilates.",
  },
  {
    id: "sidelift",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-sidelift-ZH5ErtrpzthsK4UqARXf9o.webp",
    title: "Side Leg Lift",
    category: "Hanches & Obliques",
    muscles: "Moyen fessier, Obliques, Adducteurs",
    description:
      "Sur le côté, jambe supérieure levée avec contrôle. Travaille les stabilisateurs de hanche et les obliques. Essentiel pour l'équilibre du bassin.",
  },
  {
    id: "catcow",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-catcow-eT75VkUEnxCXq7QwQz79YX.webp",
    title: "Cat-Cow",
    category: "Mobilité",
    muscles: "Colonne vertébrale, Abdominaux",
    description:
      "À quatre pattes, alternance entre flexion (dos rond, chat) et extension (dos creux, vache). Mobilise chaque segment de la colonne vertébrale.",
  },
  {
    id: "crisscross",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-crisscross-CGP9MLNEfo7AjAR9MHcSBT.webp",
    title: "Criss-Cross",
    category: "Obliques",
    muscles: "Obliques internes et externes",
    description:
      "Allongée, mains derrière la tête, rotation du torse pour amener le coude vers le genou opposé. Sculpte la taille et renforce les obliques.",
  },
  {
    id: "pigeon",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-pigeon-6ynPaoMkJcQLWa4Dt2Dt4C.webp",
    title: "Pigeon Profond",
    category: "Stretching",
    muscles: "Piriforme, Fessiers, Psoas",
    description:
      "Étirement profond des rotateurs de hanche. Jambe avant pliée, jambe arrière tendue, torse penché vers l'avant. Tenue longue de 60 secondes pour un relâchement maximal.",
  },
  {
    id: "mermaid",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-mermaid-2DCtHjBxiATJgevJVHbRpG.webp",
    title: "Mermaid Stretch",
    category: "Mobilité",
    muscles: "Obliques, Intercostaux, Grand dorsal",
    description:
      "Étirement latéral gracieux en position assise. Un bras s'étend au-dessus de la tête créant une belle courbe. Ouvre les côtes et étire tout le flanc.",
  },
  {
    id: "spinetwist",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-spine-twist-Hi7wARMA4S7M3XxD4VLqy4.webp",
    title: "Spine Twist",
    category: "Mobilité",
    muscles: "Obliques, Colonne thoracique",
    description:
      "Rotation du torse en position assise, bras en T. Le bassin reste ancré au sol pendant que la colonne thoracique tourne. Améliore la mobilité en rotation.",
  },
  {
    id: "openbook",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-open-book-n7GnWmCEHcEHehzRZ7fUAH.webp",
    title: "Open Book",
    category: "Mobilité",
    muscles: "Colonne thoracique, Pectoraux",
    description:
      "Rotation thoracique sur le côté. Le bras s'ouvre comme un livre vers le plafond, le regard suit la main. Ouvre la poitrine et mobilise la colonne.",
  },
  {
    id: "happybaby",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/gallery-happy-baby-geyHojVSRb6tFwkLbvu62g.webp",
    title: "Happy Baby",
    category: "Stretching",
    muscles: "Adducteurs, Hanches",
    description:
      "Allongée sur le dos, genoux vers les aisselles, mains sur les pieds. Bercement doux pour ouvrir les hanches. Étirement profond et relaxant.",
  },
];

const galleryVideos: GalleryVideo[] = [
  {
    id: "v1",
    youtubeId: "CdjRQ6GG8bA",
    title: "Pilates Doux — Débutant",
    category: "Débutant",
    duration: "15 min",
    description:
      "Séance douce de Pilates au sol, accessible à tous les niveaux. Mouvements lents et contrôlés pour découvrir les fondamentaux.",
  },
  {
    id: "v2",
    youtubeId: "136ZLuy40TE",
    title: "Express Pilates Mat",
    category: "Intermédiaire",
    duration: "10 min",
    description:
      "Séance express de Pilates au tapis. Aucun équipement nécessaire, juste vous et votre tapis. Idéal pour une pause active.",
  },
  {
    id: "v3",
    youtubeId: "SMUQ5fB8_jE",
    title: "Pilates Classique Niveau 1",
    category: "Débutant",
    duration: "20 min",
    description:
      "Séance de Pilates classique au tapis sans équipement. Travaille la force, l'équilibre et la flexibilité. Base essentielle.",
  },
  {
    id: "v4",
    youtubeId: "nfmcXtwGYsk",
    title: "Full Body Mat Pilates",
    category: "Intermédiaire",
    duration: "20 min",
    description:
      "Mix de Pilates classique et contemporain. Mouvements de sculpt pour un travail complet du corps au tapis.",
  },
];

/* ─── Category colors ─── */
const categoryColors: Record<string, string> = {
  Core: "from-orange-500/20 to-red-500/20 text-orange-300",
  "Core Avancé": "from-red-500/20 to-pink-500/20 text-red-300",
  "Dos & Postural": "from-cyan-500/20 to-blue-500/20 text-cyan-300",
  "Full Body": "from-amber-500/20 to-orange-500/20 text-amber-300",
  "Fessiers & Dos": "from-pink-500/20 to-rose-500/20 text-pink-300",
  "Hanches & Obliques": "from-violet-500/20 to-purple-500/20 text-violet-300",
  Mobilité: "from-emerald-500/20 to-teal-500/20 text-emerald-300",
  Obliques: "from-sky-500/20 to-indigo-500/20 text-sky-300",
  Stretching: "from-purple-500/20 to-fuchsia-500/20 text-purple-300",
  Débutant: "from-green-500/20 to-emerald-500/20 text-green-300",
  Intermédiaire: "from-yellow-500/20 to-amber-500/20 text-yellow-300",
};

/* ─── Lightbox Component ─── */
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Prev button */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Next button */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Image + Info */}
        <div
          className="max-w-5xl w-full mx-4 flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={img.src}
            alt={img.title}
            className="w-full max-h-[65vh] object-contain rounded-2xl"
          />
          <div className="mt-6 text-center max-w-xl">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {img.title}
            </h3>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                categoryColors[img.category] || "from-gray-500/20 to-gray-500/20 text-gray-300"
              } mb-3`}
            >
              {img.category}
            </span>
            <p className="text-sm text-white/60 leading-relaxed">
              {img.description}
            </p>
            <p className="text-xs text-white/40 mt-2">
              Muscles : {img.muscles}
            </p>
          </div>
          <p className="mt-4 text-xs text-white/30">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Main Gallery Page ─── */
export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev < galleryImages.length - 1 ? prev + 1 : prev
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
        <div className="container relative pt-8 pb-16">
          {/* Nav */}
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
              <Link
                href="/galerie"
                className="text-xs text-red-400 font-medium"
              >
                Galerie
              </Link>
            </div>
          </nav>

          {/* Hero */}
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Retour à l'accueil
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-6"
            >
              <span className="text-foreground">Galerie</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Exercices Pilates
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl"
            >
              Découvrez les exercices de Pilates au sol que j'enseigne lors de
              mes séances. Chaque mouvement est conçu pour renforcer votre
              centre, améliorer votre posture et développer votre mobilité.
            </motion.p>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <section className="container mb-12">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("images")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === "images"
                ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-300 shadow-lg shadow-red-500/10"
                : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card"
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Images ({galleryImages.length})
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === "videos"
                ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-300 shadow-lg shadow-red-500/10"
                : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card"
            }`}
          >
            <Video className="w-4 h-4" />
            Vidéos ({galleryVideos.length})
          </button>
        </div>
      </section>

      {/* Images Grid */}
      {activeTab === "images" && (
        <section className="container pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative rounded-2xl overflow-hidden bg-card/30 border border-border/10 hover:border-red-500/20 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="flex items-center gap-2 text-white/90">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">Voir en grand</span>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gradient-to-r ${
                        categoryColors[img.category] ||
                        "from-gray-500/20 to-gray-500/20 text-gray-300"
                      } backdrop-blur-sm`}
                    >
                      {img.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-foreground mb-1">
                    {img.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {img.description}
                  </p>
                  <p className="text-[10px] text-muted-foreground/50 mt-2">
                    {img.muscles}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Videos Grid */}
      {activeTab === "videos" && (
        <section className="container pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-2xl overflow-hidden bg-card/30 border border-border/10 hover:border-red-500/20 transition-all duration-300"
              >
                {/* Video embed or thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  {activeVideoId === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setActiveVideoId(video.id)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-red-500/90 flex items-center justify-center shadow-2xl shadow-red-500/30 group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      {/* Duration badge */}
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2.5 py-1 rounded-lg bg-black/70 text-white text-xs font-medium backdrop-blur-sm">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gradient-to-r ${
                        categoryColors[video.category] ||
                        "from-gray-500/20 to-gray-500/20 text-gray-300"
                      }`}
                    >
                      {video.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground/50">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
