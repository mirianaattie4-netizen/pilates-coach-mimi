import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { toast } from "sonner";

/** Free session IDs — must match server/stripe/products.ts */
const FREE_SESSION_IDS = ["classique", "mobilite", "stretching"];

export function useSubscription() {
  const { user, isAuthenticated } = useAuth();

  const statusQuery = trpc.subscription.status.useQuery(undefined, {
    enabled: isAuthenticated,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const createCheckout = trpc.subscription.createCheckout.useMutation({
    onSuccess: (data) => {
      if (data.checkoutUrl) {
        toast.info("Redirection vers la page de paiement...");
        window.open(data.checkoutUrl, "_blank");
      }
    },
    onError: (error) => {
      toast.error("Erreur lors de la création du paiement : " + error.message);
    },
  });

  const cancelSubscription = trpc.subscription.cancel.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Votre abonnement sera annulé à la fin de la période en cours.");
        statusQuery.refetch();
      } else {
        toast.error(data.error || "Erreur lors de l'annulation");
      }
    },
    onError: (error) => {
      toast.error("Erreur : " + error.message);
    },
  });

  const isPremium = statusQuery.data?.isPremium ?? false;

  function isSessionFree(sessionId: string): boolean {
    return FREE_SESSION_IDS.includes(sessionId);
  }

  function canAccessSession(sessionId: string): boolean {
    if (isSessionFree(sessionId)) return true;
    return isPremium;
  }

  return {
    isPremium,
    isAuthenticated,
    user,
    subscriptionStatus: statusQuery.data?.subscriptionStatus ?? "free",
    isLoading: statusQuery.isLoading,
    isSessionFree,
    canAccessSession,
    subscribe: () => createCheckout.mutate(),
    isSubscribing: createCheckout.isPending,
    cancelSubscription: () => cancelSubscription.mutate(),
    isCancelling: cancelSubscription.isPending,
    refresh: () => statusQuery.refetch(),
  };
}
