import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import {
  ArrowLeft,
  Crown,
  User,
  CreditCard,
  Calendar,
  ExternalLink,
  FileText,
  Loader2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Sparkles,
  Shield,
  Clock,
  RefreshCw,
  RotateCcw,
} from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import Footer from "@/components/Footer";

function formatDate(timestamp: number | null): string {
  if (!timestamp) return "\u2014";
  return new Date(timestamp).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatCurrency(amount: number, currency: string): string {
  if (currency.toLowerCase() === "xof") {
    return `${amount.toLocaleString("fr-FR")} FCFA`;
  }
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "active":
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium">
          <CheckCircle className="w-3 h-3" />
          Actif
        </span>
      );
    case "past_due":
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-medium">
          <AlertCircle className="w-3 h-3" />
          Paiement en retard
        </span>
      );
    case "cancelled":
    case "canceled":
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 text-red-400 text-xs font-medium">
          <XCircle className="w-3 h-3" />
          Annul\u00e9
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
          {status}
        </span>
      );
  }
}

function InvoiceStatusBadge({ status }: { status: string }) {
  if (status === "paid") {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium">
        <CheckCircle className="w-3 h-3" />
        Pay\u00e9
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
      {status}
    </span>
  );
}

function ErrorBanner({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
      <div className="flex-1">
        <p className="text-sm text-red-300">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-2 flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            R\u00e9essayer
          </button>
        )}
      </div>
    </div>
  );
}

export default function Profile() {
  const { user, loading: authLoading, isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"subscription" | "payments">("subscription");

  const detailsQuery = trpc.subscription.details.useQuery(undefined, {
    enabled: isAuthenticated,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const paymentsQuery = trpc.subscription.paymentHistory.useQuery(undefined, {
    enabled: isAuthenticated && activeTab === "payments",
    retry: false,
    refetchOnWindowFocus: false,
  });

  const cancelMutation = trpc.subscription.cancel.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Votre abonnement sera annul\u00e9 \u00e0 la fin de la p\u00e9riode en cours.");
        detailsQuery.refetch();
      } else {
        toast.error(data.error || "Erreur lors de l'annulation");
      }
    },
    onError: (error) => {
      toast.error("Erreur : " + error.message);
    },
  });

  const reactivateMutation = trpc.subscription.reactivate.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Votre abonnement a \u00e9t\u00e9 r\u00e9activ\u00e9 avec succ\u00e8s !");
        detailsQuery.refetch();
      } else {
        toast.error(data.error || "Erreur lors de la r\u00e9activation");
      }
    },
    onError: (error) => {
      toast.error("Erreur : " + error.message);
    },
  });

  const checkoutMutation = trpc.subscription.createCheckout.useMutation({
    onSuccess: (data) => {
      if (data.checkoutUrl) {
        toast.info("Redirection vers la page de paiement...");
        window.open(data.checkoutUrl, "_blank");
      }
    },
    onError: (error) => {
      toast.error("Erreur : " + error.message);
    },
  });

  // Redirect to login if not authenticated
  if (!authLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            <User className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="font-display text-2xl font-bold mb-3">Connexion requise</h1>
          <p className="text-muted-foreground mb-6">
            Connectez-vous pour acc\u00e9der \u00e0 votre profil et g\u00e9rer votre abonnement.
          </p>
          <Button
            onClick={() => { window.location.href = getLoginUrl("/profil"); }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 rounded-xl px-8 py-3"
          >
            Se connecter
          </Button>
        </div>
      </div>
    );
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-red-400" />
      </div>
    );
  }

  const details = detailsQuery.data;
  const payments = paymentsQuery.data?.payments ?? [];
  const paymentsError = paymentsQuery.data?.error ?? null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border/30">
        <div className="container py-6">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour \u00e0 l'accueil
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/20 flex items-center justify-center shrink-0">
              <span className="font-display text-2xl font-bold text-red-400">
                {(user?.name ?? "U").charAt(0).toUpperCase()}
              </span>
            </div>

            <div className="flex-1">
              <h1 className="font-display text-2xl font-bold text-foreground">
                {user?.name ?? "Utilisateur"}
              </h1>
              <p className="text-muted-foreground text-sm mt-0.5">
                {user?.email ?? ""}
              </p>
            </div>

            {/* Status badge */}
            {details?.isPremium ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                <Crown className="w-4 h-4 text-amber-400" />
                <span className="font-display text-sm font-semibold text-amber-400">Premium</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50">
                <Shield className="w-4 h-4 text-muted-foreground" />
                <span className="font-display text-sm font-medium text-muted-foreground">Gratuit</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border/30">
        <div className="container flex gap-1">
          <button
            onClick={() => setActiveTab("subscription")}
            className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "subscription"
                ? "border-red-400 text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Crown className="w-4 h-4" />
            Abonnement
          </button>
          <button
            onClick={() => setActiveTab("payments")}
            className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "payments"
                ? "border-red-400 text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <CreditCard className="w-4 h-4" />
            Historique des paiements
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        {activeTab === "subscription" && (
          <SubscriptionTab
            details={details}
            isLoading={detailsQuery.isLoading}
            onCancel={() => cancelMutation.mutate()}
            isCancelling={cancelMutation.isPending}
            onReactivate={() => reactivateMutation.mutate()}
            isReactivating={reactivateMutation.isPending}
            onSubscribe={() => checkoutMutation.mutate()}
            isSubscribing={checkoutMutation.isPending}
            onRetryDetails={() => detailsQuery.refetch()}
          />
        )}

        {activeTab === "payments" && (
          <PaymentsTab
            payments={payments}
            isLoading={paymentsQuery.isLoading}
            error={paymentsError}
            onRetry={() => paymentsQuery.refetch()}
          />
        )}
      </div>

      {/* Actions */}
      <div className="border-t border-border/30">
        <div className="container py-6 flex justify-end">
          <Button
            variant="outline"
            onClick={() => {
              logout();
              setLocation("/");
            }}
            className="text-muted-foreground hover:text-foreground border-border/50"
          >
            Se d\u00e9connecter
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ─── Subscription Tab ─── */
function SubscriptionTab({
  details,
  isLoading,
  onCancel,
  isCancelling,
  onReactivate,
  isReactivating,
  onSubscribe,
  isSubscribing,
  onRetryDetails,
}: {
  details: any;
  isLoading: boolean;
  onCancel: () => void;
  isCancelling: boolean;
  onReactivate: () => void;
  isReactivating: boolean;
  onSubscribe: () => void;
  isSubscribing: boolean;
  onRetryDetails: () => void;
}) {
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Show error banner if Stripe details failed to load
  if (details?.error) {
    return (
      <div className="max-w-2xl space-y-6">
        <ErrorBanner message={details.error} onRetry={onRetryDetails} />
        {details.isPremium && (
          <p className="text-sm text-muted-foreground">
            Votre abonnement est actif, mais nous n'avons pas pu charger les d\u00e9tails depuis Stripe.
          </p>
        )}
      </div>
    );
  }

  // Free user — show upgrade CTA
  if (!details?.isPremium) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
          <Crown className="w-8 h-8 text-amber-400" />
        </div>
        <h2 className="font-display text-xl font-bold mb-3">
          Passez \u00e0 Premium
        </h2>
        <p className="text-muted-foreground mb-2">
          D\u00e9bloquez les 21 s\u00e9ances compl\u00e8tes de Pilates, HIIT, Musculation, Mobilit\u00e9 et Stretching.
        </p>
        <p className="text-2xl font-display font-bold text-foreground mb-6">
          10 000 <span className="text-base font-normal text-muted-foreground">FCFA/mois</span>
        </p>
        <Button
          onClick={onSubscribe}
          disabled={isSubscribing}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 rounded-xl px-8 py-3 font-display"
        >
          {isSubscribing ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Sparkles className="w-4 h-4 mr-2" />
          )}
          S'abonner maintenant
        </Button>
      </div>
    );
  }

  // Premium user — show subscription details
  return (
    <div className="max-w-2xl space-y-6">
      {/* Plan card */}
      <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-orange-500/5 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Crown className="w-5 h-5 text-amber-400" />
              <h3 className="font-display text-lg font-bold text-foreground">
                {details.plan ?? "Coach Mimi Premium"}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Acc\u00e8s illimit\u00e9 \u00e0 toutes les s\u00e9ances
            </p>
          </div>
          <StatusBadge status={details.cancelAtPeriodEnd ? "cancelled" : (details.status ?? "active")} />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-card/50">
            <CreditCard className="w-4 h-4 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Montant</p>
              <p className="text-sm font-medium text-foreground">10 000 FCFA/mois</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-card/50">
            <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">
                {details.cancelAtPeriodEnd ? "Acc\u00e8s jusqu'au" : "Prochain renouvellement"}
              </p>
              <p className="text-sm font-medium text-foreground">
                {formatDate(details.currentPeriodEnd)}
              </p>
            </div>
          </div>
        </div>

        {details.cancelAtPeriodEnd && (
          <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-amber-300">
                  Votre abonnement est annul\u00e9 et prendra fin le{" "}
                  <strong>{formatDate(details.currentPeriodEnd)}</strong>.
                  Vous conservez l'acc\u00e8s premium jusqu'\u00e0 cette date.
                </p>
                <Button
                  size="sm"
                  onClick={onReactivate}
                  disabled={isReactivating}
                  className="mt-3 bg-amber-500 text-black hover:bg-amber-400 font-display"
                >
                  {isReactivating ? (
                    <Loader2 className="w-3 h-3 animate-spin mr-1.5" />
                  ) : (
                    <RotateCcw className="w-3 h-3 mr-1.5" />
                  )}
                  R\u00e9activer l'abonnement
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cancel action — only shown when subscription is active and NOT set to cancel */}
      {!details.cancelAtPeriodEnd && (
        <div className="rounded-2xl border border-border/30 p-6">
          <h3 className="font-display font-semibold text-foreground mb-2">
            G\u00e9rer l'abonnement
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Vous pouvez annuler votre abonnement \u00e0 tout moment. L'acc\u00e8s premium sera maintenu
            jusqu'\u00e0 la fin de la p\u00e9riode de facturation en cours.
          </p>

          {!showCancelConfirm ? (
            <Button
              variant="outline"
              onClick={() => setShowCancelConfirm(true)}
              className="text-red-400 border-red-500/20 hover:bg-red-500/10 hover:text-red-300"
            >
              Annuler l'abonnement
            </Button>
          ) : (
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 space-y-3">
              <p className="text-sm text-foreground">
                \u00cates-vous s\u00fbr(e) de vouloir annuler votre abonnement ? Vous perdrez l'acc\u00e8s aux
                18 s\u00e9ances premium \u00e0 la fin de la p\u00e9riode en cours.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCancelConfirm(false)}
                  className="border-border/50"
                >
                  Non, garder mon abonnement
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    onCancel();
                    setShowCancelConfirm(false);
                  }}
                  disabled={isCancelling}
                  className="bg-red-500 text-white hover:bg-red-600"
                >
                  {isCancelling && <Loader2 className="w-3 h-3 animate-spin mr-1" />}
                  Oui, annuler
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Payments Tab ─── */
function PaymentsTab({
  payments,
  isLoading,
  error,
  onRetry,
}: {
  payments: Array<{
    id: string;
    date: number;
    amount: number;
    currency: string;
    status: string;
    description: string;
    receiptUrl: string | null;
    invoicePdf: string | null;
    periodStart: number;
    periodEnd: number;
  }>;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto py-12">
        <ErrorBanner message={error} onRetry={onRetry} />
      </div>
    );
  }

  if (payments.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4">
          <CreditCard className="w-7 h-7 text-muted-foreground" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
          Aucun paiement
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Votre historique de paiements appara\u00eetra ici une fois que vous aurez souscrit \u00e0 un abonnement.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-foreground">
          Vos paiements
        </h2>
        <span className="text-xs text-muted-foreground">
          {payments.length} paiement{payments.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="rounded-xl border border-border/30 bg-card p-4 space-y-3"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {payment.description}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {formatDate(payment.date)}
                </p>
              </div>
              <InvoiceStatusBadge status={payment.status} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-display font-bold text-foreground">
                {formatCurrency(payment.amount, payment.currency)}
              </span>
              <div className="flex gap-2">
                {payment.receiptUrl && (
                  <a
                    href={payment.receiptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Re\u00e7u
                  </a>
                )}
                {payment.invoicePdf && (
                  <a
                    href={payment.invoicePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300"
                  >
                    <FileText className="w-3 h-3" />
                    PDF
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              P\u00e9riode : {formatDate(payment.periodStart)} \u2014 {formatDate(payment.periodEnd)}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block rounded-xl border border-border/30 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border/30 hover:bg-transparent">
              <TableHead className="text-muted-foreground font-display">Date</TableHead>
              <TableHead className="text-muted-foreground font-display">Description</TableHead>
              <TableHead className="text-muted-foreground font-display">P\u00e9riode</TableHead>
              <TableHead className="text-muted-foreground font-display text-right">Montant</TableHead>
              <TableHead className="text-muted-foreground font-display text-center">Statut</TableHead>
              <TableHead className="text-muted-foreground font-display text-right">Documents</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id} className="border-border/20">
                <TableCell className="text-sm text-foreground whitespace-nowrap">
                  {formatDate(payment.date)}
                </TableCell>
                <TableCell className="text-sm text-foreground">
                  {payment.description}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                  {formatDate(payment.periodStart)} \u2014 {formatDate(payment.periodEnd)}
                </TableCell>
                <TableCell className="text-sm font-medium text-foreground text-right whitespace-nowrap">
                  {formatCurrency(payment.amount, payment.currency)}
                </TableCell>
                <TableCell className="text-center">
                  <InvoiceStatusBadge status={payment.status} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {payment.receiptUrl && (
                      <a
                        href={payment.receiptUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Re\u00e7u
                      </a>
                    )}
                    {payment.invoicePdf && (
                      <a
                        href={payment.invoicePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition-colors"
                      >
                        <FileText className="w-3 h-3" />
                        PDF
                      </a>
                    )}
                    {!payment.receiptUrl && !payment.invoicePdf && (
                      <span className="text-xs text-muted-foreground">\u2014</span>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
