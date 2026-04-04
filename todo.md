# TODO - Système d'abonnement mensuel 10 000 FCFA/mois

## Phase 1 : Mise à niveau backend + auth
- [x] webdev_add_feature web-db-user (backend, DB, auth)
- [x] Lire le README mis à jour

## Phase 2 : Intégration Stripe
- [x] webdev_add_feature stripe
- [x] Configurer le produit abonnement 10 000 FCFA/mois (~15€)

## Phase 3 : Logique d'abonnement
- [x] Définir les 3 séances gratuites (classique, mobilite, stretching)
- [x] Verrouiller les 18 autres séances derrière l'abonnement Premium
- [x] Créer un hook pour vérifier le statut d'abonnement
- [x] Afficher un cadenas sur les séances verrouillées

## Phase 4 : Pages frontend
- [x] Page Pricing (plans gratuit vs premium)
- [x] Gestion d'abonnement (annulation depuis la page pricing)
- [x] Modal de verrouillage séances premium (page bloquante sur SessionPage)
- [x] Badges Gratuit/Premium sur les cartes de séances (Home)
- [x] Lien Abonnement Premium dans le footer
- [x] Bouton Abonnement Premium dans le CTA de la page d'accueil

## Phase 5 : Test et livraison
- [x] Tests unitaires subscription (9 tests passés)
- [x] Vérification visuelle des badges et de la page pricing
- [x] Sauvegarder checkpoint

## Phase 6 : Page Profil utilisateur
- [x] Procédure tRPC pour récupérer les détails d'abonnement (statut, date renouvellement, plan)
- [x] Procédure tRPC pour récupérer l'historique des paiements via Stripe API
- [x] Page Profil avec informations utilisateur (nom, email)
- [x] Section gestion d'abonnement (statut actuel, date renouvellement, bouton annuler/réactiver)
- [x] Section historique des paiements (date, montant, statut, reçu)
- [x] Route /profil dans App.tsx et lien dans le footer/navigation
- [x] Tests unitaires pour les nouvelles procédures
- [x] Vérification visuelle de la page

## Phase 6b : Corrections et améliorations page Profil
- [x] Ajouter une action de réactivation d'abonnement (backend + bouton UI)
- [x] Améliorer gestion d'erreurs dans details et paymentHistory (remonter erreurs côté UI)
- [x] Ajouter tests unitaires avec mocks Stripe pour les cas succès (details + paymentHistory)
- [x] Vérifier visuellement la page profil en état authentifié
