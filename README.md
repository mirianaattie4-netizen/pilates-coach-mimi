# Coach Mimi — Plateforme de Coaching Pilates

## Description du projet
Site web interactif pour guider des séances de Pilates au sol et de renforcement fonctionnel, avec minuteur intégré, défilement automatique des exercices, illustrations de mouvements et instructions de coaching lues à voix haute. Le site propose 21 séances (Pilates, HIIT, Musculation, Mobilité, Stretching), une galerie d'exercices, une page À propos, et une page Planning listant les cours et tarifs de studios partenaires (The Labs Training Camp, Studio Baobab).

## Fonctionnalités
- **Séances guidées** : timer, défilement automatique, illustrations et lecteur vocal (TTS) pour chaque exercice.
- **Abonnement Premium** : 3 séances gratuites, 18 séances réservées aux abonnés via Stripe (10 000 FCFA/mois).
- **Authentification** : connexion via le portail OAuth Manus.
- **Galerie d'exercices** : images et vidéos de démonstration par catégorie.
- **Page Planning** : emplois du temps (Pilates, cours adultes, kids, combat) et tarifs de studios partenaires, avec paiement en ligne via Paystack.
- **Profil utilisateur** : gestion d'abonnement, historique des paiements.

## Stack technique
- **Frontend** : React 19, Vite, TypeScript, Tailwind CSS 4, Framer Motion, wouter (routing), tRPC (client)
- **Backend** : Node.js, Express, tRPC (API), Drizzle ORM
- **Base de données** : MySQL
- **Paiements** : Stripe (abonnement Coach Mimi), Paystack (plans The Labs / Studio Baobab)
- **Tests** : Vitest
- **Gestionnaire de paquets** : pnpm

## Installation
1. Cloner le dépôt : `git clone https://github.com/mirianaattie4-netizen/pilates-coach-mimi.git`
2. Se placer dans le dossier : `cd pilates-coach-mimi`
3. Installer les dépendances : `pnpm install`
4. Configurer les variables d'environnement nécessaires : `DATABASE_URL`, `JWT_SECRET`, `OAUTH_SERVER_URL`, `OWNER_OPEN_ID`, `VITE_APP_ID`, `VITE_OAUTH_PORTAL_URL`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `BUILT_IN_FORGE_API_KEY`, `BUILT_IN_FORGE_API_URL`
5. Lancer le serveur de développement : `pnpm dev`

## Scripts disponibles
- `pnpm dev` — serveur de développement (Vite + Express)
- `pnpm build` — build de production (client + serveur)
- `pnpm start` — démarre le build de production
- `pnpm check` — vérification TypeScript
- `pnpm test` — tests (Vitest)

## Déploiement
Le site est conçu pour tourner sur un hôte Node.js persistant (le serveur Express sert à la fois l'API et les fichiers statiques du build en production). Un `netlify.toml` est fourni pour héberger uniquement le frontend statique sur Netlify si besoin — dans ce cas, les fonctionnalités dépendant du backend (connexion, abonnement, profil) nécessitent que le serveur tourne par ailleurs et que les appels `/api/*` y soient redirigés.
