/*
 * Footer — Composant réutilisable avec coordonnées Coach Mimi
 * Design: "Néon Fitness Flow" — fond sombre, accents corail/orange
 * Coordonnées : Instagram, Email, Téléphone
 */

import { Instagram, Mail, Phone, MapPin, Heart, Flame } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/20">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <Flame className="w-4 h-4 text-red-400" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Coach Mimi
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Coach sportif fonctionnel certifiée, spécialisée en Pilates au sol,
              mobilité et exercices au poids du corps. 6 diplômes. Basée à Abidjan,
              je me déplace en entreprise et en banque.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
              <Heart className="w-3 h-3 text-red-400/50" />
              <span>Pilates &middot; Mobilité &middot; Fonctionnel</span>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Navigation
            </h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/a-propos"
                className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                À propos
              </Link>
              <Link
                href="/session/classique"
                className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Pilates Classique
              </Link>
              <Link
                href="/session/contemporain"
                className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Pilates Contemporain
              </Link>
              <Link
                href="/session/mobilite"
                className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Mobilité Pure
              </Link>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/COACHMIMI87"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/70 hover:text-red-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium">@COACHMIMI87</span>
                  <span className="text-[10px] text-muted-foreground/60">Instagram</span>
                </div>
              </a>

              <a
                href="mailto:HFM2026@OUTLOOK.FR"
                className="flex items-center gap-3 text-sm text-foreground/70 hover:text-orange-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium">HFM2026@OUTLOOK.FR</span>
                  <span className="text-[10px] text-muted-foreground/60">Email</span>
                </div>
              </a>

              <a
                href="tel:+2250715151408"
                className="flex items-center gap-3 text-sm text-foreground/70 hover:text-green-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium">07 15 15 14 08</span>
                  <span className="text-[10px] text-muted-foreground/60">Téléphone</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <span className="block font-medium">Abidjan, Côte d'Ivoire</span>
                  <span className="text-[10px] text-muted-foreground/60">Déplacement en entreprise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Coach Mimi &mdash; Tous droits réservés
          </p>
          <p className="text-[11px] text-muted-foreground/50">
            Pilates au Sol &middot; Mobilité &middot; Coaching Fonctionnel &middot; Abidjan
          </p>
        </div>
      </div>
    </footer>
  );
}
