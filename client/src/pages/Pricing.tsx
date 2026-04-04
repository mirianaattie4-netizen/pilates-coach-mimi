import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { getLoginUrl } from "@/const";
import { useLocation, useSearch } from "wouter";
import { useEffect } from "react";
import { toast } from "sonner";
import {
  Check,
  Crown,
  Sparkles,
  Lock,
  ArrowLeft,
  Loader2,
  Star,
  Zap,
  Shield,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const FREE_FEATURES = [
  "3 séances gratuites",
  "Pilates Classique",
  "Mobilité Pure",
  "Stretching Profond",
  "Timer automatique",
  "Signal sonore",
  "Lecteur vocal",
];

const PREMIUM_FEATURES = [
  "21 séances complètes",
  "5 séances Pilates",
  "9 circuits HIIT",
  "3 séances Musculation",
  "3 séances Mobilité",
  "1 séance Stretching",
  "Timer et signal sonore",
  "Lecteur vocal en français",
  "Galerie d'exercices illustrés",
  "Enregistrement vocal personnel",
  "Nouvelles séances régulières",
];

export default function Pricing() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const {
    isPremium,
    isLoading,
    subscribe,
    isSubscribing,
    cancelSubscription,
    isCancelling,
    subscriptionStatus,
  } = useSubscription();
  const [, setLocation] = useLocation();
  const searchString = useSearch();

  useEffect(() => {
    const params = new URLSearchParams(searchString);
    if (params.get("success") === "true") {
      toast.success("Paiement réussi ! Bienvenue dans Coach Mimi Premium !");
    }
    if (params.get("cancelled") === "true") {
      toast.info("Paiement annulé. Vous pouvez réessayer quand vous le souhaitez.");
    }
  }, [searchString]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="container py-6">
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Retour à l'accueil</span>
        </button>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-amber-400" />
              <span className="font-display text-xs uppercase tracking-[0.25em] text-amber-400 font-medium">
                Abonnement
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Choisissez votre{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                programme
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Accédez à toutes les séances de Coach Mimi avec un abonnement
              mensuel simple et accessible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current status banner */}
      {isAuthenticated && isPremium && (
        <div className="container mb-8">
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="w-5 h-5 text-amber-400" />
              <span className="font-display font-bold text-amber-400">
                Vous êtes Premium !
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Vous avez accès à toutes les 21 séances. Profitez de votre entraînement !
            </p>
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl border border-border/50 bg-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Gratuit</h3>
                  <p className="text-sm text-muted-foreground">
                    Découvrez Coach Mimi
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold">0</span>
                <span className="text-muted-foreground ml-1">FCFA/mois</span>
              </div>

              <ul className="space-y-3 mb-8">
                {FREE_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full py-6 rounded-xl font-display"
                onClick={() => setLocation("/session/classique")}
              >
                Commencer gratuitement
              </Button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl border-2 border-amber-500/30 bg-card p-8 overflow-hidden"
            >
              {/* Popular badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-display font-bold px-4 py-1.5 rounded-bl-xl">
                  POPULAIRE
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    Accès complet illimité
                  </p>
                </div>
              </div>

              <div className="mb-2">
                <span className="font-display text-4xl font-bold">10 000</span>
                <span className="text-muted-foreground ml-1">FCFA/mois</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                ≈ 15 EUR/mois &middot; Annulable à tout moment
              </p>

              <ul className="space-y-3 mb-8">
                {PREMIUM_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Star className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {isLoading || authLoading ? (
                <Button
                  disabled
                  className="w-full py-6 rounded-xl font-display"
                >
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Chargement...
                </Button>
              ) : isPremium ? (
                <div className="space-y-3">
                  <Button
                    disabled
                    className="w-full py-6 rounded-xl font-display bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                  >
                    <Crown className="w-4 h-4 mr-2" />
                    Abonnement actif
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full py-4 rounded-xl font-display text-destructive border-destructive/30 hover:bg-destructive/10"
                    onClick={() => cancelSubscription()}
                    disabled={isCancelling}
                  >
                    {isCancelling ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : null}
                    Annuler l'abonnement
                  </Button>
                </div>
              ) : !isAuthenticated ? (
                <Button
                  className="w-full py-6 rounded-xl font-display bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                  onClick={() => {
                    window.location.href = getLoginUrl();
                  }}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Se connecter pour s'abonner
                </Button>
              ) : (
                <Button
                  className="w-full py-6 rounded-xl font-display bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                  onClick={() => subscribe()}
                  disabled={isSubscribing}
                >
                  {isSubscribing ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4 mr-2" />
                  )}
                  S'abonner maintenant
                </Button>
              )}
            </motion.div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-muted-foreground">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4" />
              <span>Paiement sécurisé Stripe</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4" />
              <span>Accès immédiat</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="w-4 h-4" />
              <span>Annulable à tout moment</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
