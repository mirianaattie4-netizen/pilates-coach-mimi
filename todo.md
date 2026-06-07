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

## Phase 7 : Slider/Carrousel page d'accueil
- [x] Créer un composant Slider avec les mêmes motifs visuels
- [x] Intégrer le slider dans Home.tsx
- [x] Navigation du slider (flèches, dots, auto-play)
- [x] Design responsive (mobile/desktop)
- [x] Vérification visuelle et tests

## Phase 8 : Refonte grille tarifaire (5 plans, plus de gratuit)
- [x] Supprimer les séances gratuites
- [x] Créer 5 plans : Pilates 25k, HIIT 30k, Musculation 15k, Mobilité 18k, Pack Complet 45k
- [x] Mettre à jour le schéma DB (subscriptions.planId)
- [x] Mettre à jour les procédures tRPC
- [x] Mettre à jour la page Pricing avec les 5 plans
- [x] Mettre à jour le contrôle d'accès par catégorie
- [x] Mettre à jour Home.tsx (plus de badges gratuit)
- [x] Mettre à jour SessionPage.tsx
- [x] Intégrer le slider sur la page d'accueil
- [x] Tests unitaires mis à jour

## Phase 9 : Nettoyage et finalisation
- [x] Supprimer isSessionFree du hook useSubscription
- [x] Supprimer le prop isSessionFree du composant SessionSlider
- [x] Corriger les erreurs TypeScript
- [x] Vérifier que tous les tests passent (25 tests)
- [x] Sauvegarder checkpoint final
