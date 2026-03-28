/*
 * URLs CDN des images d'exercices pour le site Pilates au Sol
 * Chaque image est liée au cycle de vie du projet webdev
 */

// Images générées (Batch 1)
export const IMG_DEADBUG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-deadbug-VXDBWYXDWrCERVXcCr27ok.webp";
export const IMG_BRIDGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-bridge-8W3MkY6nEuf6UKyJLhfwAp.webp";
export const IMG_GOBLET_SQUAT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-goblet-squat-VHgy8bW8BFQiZKGhxtMiJR.webp";
export const IMG_SHOULDER_PRESS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-shoulder-press-gLa9xYA22rEcHHQjSKyqpJ.webp";
export const IMG_PLANK_ROTATION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-plank-rotation-GFPWKsRppS9mzBYwwFGH2i.webp";

// Images générées (Batch 2)
export const IMG_CAT_COW = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-cat-cow-CdZYsikH9L55hvNHZagsoV.webp";
export const IMG_REVERSE_LUNGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-reverse-lunge-kygpQ5QzqfdEgV8ARS6HB6.webp";
export const IMG_RDL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-rdl-mN6Uc5CFjkF9yHHPXq5ShE.webp";
export const IMG_CHILD_POSE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-child-pose-GK6mXLYezJ2aehNS8Mo3it.webp";
export const IMG_PUSHUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-pushup-nBq6zJmsZXqihoMNwGafKd.webp";

// Mapping des placeholders Pilates au sol vers les URLs réelles
export const IMAGE_MAP: Record<string, string> = {
  // ── MOBILITÉ & ÉCHAUFFEMENT ──
  "IMG_RESPIRATION": IMG_DEADBUG,         // Allongé sur le dos, respiration
  "IMG_PELVIC_TILT": IMG_BRIDGE,          // Bascule du bassin → similaire au pont
  "IMG_BRIDGE_PILATES": IMG_BRIDGE,       // Pont articulé
  "IMG_CAT_COW": IMG_CAT_COW,            // Chat-Vache
  "IMG_THREAD_NEEDLE": IMG_PLANK_ROTATION, // Rotation thoracique
  "IMG_HIP_CIRCLES": IMG_CAT_COW,        // À 4 pattes, cercles de hanches
  "IMG_SPINE_STRETCH": IMG_RDL,           // Assis, étirement colonne
  "IMG_SAW": IMG_PLANK_ROTATION,          // Rotation assise

  // ── PILATES AU SOL — Série Abdominale ──
  "IMG_HUNDRED": IMG_DEADBUG,             // The Hundred, allongé
  "IMG_ROLLUP": IMG_DEADBUG,              // Roll-Up, allongé
  "IMG_SINGLE_LEG_STRETCH": IMG_DEADBUG,  // Single Leg Stretch
  "IMG_DOUBLE_LEG_STRETCH": IMG_DEADBUG,  // Double Leg Stretch
  "IMG_CRISS_CROSS": IMG_DEADBUG,         // Criss-Cross, allongé

  // ── PILATES AU SOL — Jambes ──
  "IMG_LEG_CIRCLE": IMG_DEADBUG,          // Single Leg Circle, allongé
  "IMG_SHOULDER_BRIDGE": IMG_BRIDGE,      // Shoulder Bridge
  "IMG_SIDE_LEG": IMG_REVERSE_LUNGE,      // Side Leg Lift, latéral
  "IMG_SIDE_CIRCLES": IMG_REVERSE_LUNGE,  // Cercles latéraux

  // ── PILATES AU SOL — Abdos avancés ──
  "IMG_SCISSORS": IMG_DEADBUG,            // Ciseaux, allongé
  "IMG_LOWER_LIFT": IMG_DEADBUG,          // Lower & Lift
  "IMG_TEASER": IMG_DEADBUG,              // Teaser modifié

  // ── PILATES AU SOL — Sur le ventre ──
  "IMG_SWAN": IMG_PUSHUP,                 // Swan Prep, sur le ventre
  "IMG_SWIMMING": IMG_PUSHUP,             // Swimming, sur le ventre
  "IMG_SINGLE_LEG_KICK": IMG_PUSHUP,      // Single Leg Kick
  "IMG_DOUBLE_LEG_KICK": IMG_PUSHUP,      // Double Leg Kick

  // ── PILATES AU SOL — Planches ──
  "IMG_PLANK": IMG_PLANK_ROTATION,        // Planche avant-bras
  "IMG_HIP_DIPS": IMG_PLANK_ROTATION,     // Planche Hip Dips
  "IMG_SIDE_PLANK": IMG_PLANK_ROTATION,   // Planche latérale
  "IMG_HIGH_PLANK": IMG_PUSHUP,           // Planche haute

  // ── PILATES AU SOL — Série classique ──
  "IMG_ROLLING_BALL": IMG_DEADBUG,        // Rolling Like a Ball
  "IMG_SPINE_TWIST": IMG_PLANK_ROTATION,  // Spine Twist, assis
  "IMG_GLUTE_BRIDGE": IMG_BRIDGE,         // Pont fessier
  "IMG_SINGLE_BRIDGE": IMG_BRIDGE,        // Pont 1 jambe

  // ── PILATES AU SOL — Quadrupédie ──
  "IMG_BIRD_DOG": IMG_CAT_COW,            // Bird Dog, à 4 pattes
  "IMG_DONKEY_KICK": IMG_CAT_COW,         // Donkey Kick, à 4 pattes
  "IMG_FIRE_HYDRANT": IMG_CAT_COW,        // Fire Hydrant, à 4 pattes

  // ── PILATES AU SOL — Finisher ──
  "IMG_TOE_TAPS": IMG_DEADBUG,            // Toe Taps, allongé
  "IMG_DEAD_BUG": IMG_DEADBUG,            // Dead Bug
  "IMG_SEAL": IMG_DEADBUG,                // Seal, assis
  "IMG_BICYCLE": IMG_DEADBUG,             // Bicycle, allongé
  "IMG_PILATES_PUSHUP": IMG_PUSHUP,       // Pilates Push-Up

  // ── RETOUR AU CALME ──
  "IMG_KNEES_CHEST": IMG_DEADBUG,         // Genoux poitrine
  "IMG_SPINAL_TWIST": IMG_DEADBUG,        // Torsion allongée
  "IMG_CHILD_POSE": IMG_CHILD_POSE,       // Posture de l'enfant
  "IMG_PIGEON": IMG_CHILD_POSE,           // Pigeon
  "IMG_FIGURE4": IMG_DEADBUG,             // Figure 4 Stretch
  "IMG_FULL_STRETCH": IMG_DEADBUG,        // Étirement total
  "IMG_SAVASANA": IMG_CHILD_POSE,         // Savasana
};

export function resolveImageUrl(placeholder: string): string {
  return IMAGE_MAP[placeholder] || "";
}
