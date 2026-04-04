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
