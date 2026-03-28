/*
 * URLs CDN des images d'exercices générées pour le site
 * Chaque image est liée au cycle de vie du projet webdev
 */

// Batch 1 - Exercices principaux
export const IMG_DEADBUG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-deadbug-VXDBWYXDWrCERVXcCr27ok.webp";
export const IMG_BRIDGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-bridge-8W3MkY6nEuf6UKyJLhfwAp.webp";
export const IMG_GOBLET_SQUAT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-goblet-squat-VHgy8bW8BFQiZKGhxtMiJR.webp";
export const IMG_SHOULDER_PRESS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-shoulder-press-gLa9xYA22rEcHHQjSKyqpJ.webp";
export const IMG_PLANK_ROTATION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-plank-rotation-GFPWKsRppS9mzBYwwFGH2i.webp";

// Batch 2 - Exercices complémentaires
export const IMG_CAT_COW = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-cat-cow-CdZYsikH9L55hvNHZagsoV.webp";
export const IMG_REVERSE_LUNGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-reverse-lunge-kygpQ5QzqfdEgV8ARS6HB6.webp";
export const IMG_RDL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-rdl-mN6Uc5CFjkF9yHHPXq5ShE.webp";
export const IMG_CHILD_POSE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-child-pose-GK6mXLYezJ2aehNS8Mo3it.webp";
export const IMG_PUSHUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/EDJjErcDe3f7pkvHdYd45d/ex-pushup-nBq6zJmsZXqihoMNwGafKd.webp";

// Mapping des placeholders vers les URLs réelles
// On réutilise les images les plus proches pour les exercices similaires
export const IMAGE_MAP: Record<string, string> = {
  // Warmup
  "IMG_WARMUP_1": IMG_CAT_COW,       // Mobilité hanches → cat-cow (sol)
  "IMG_WARMUP_2": IMG_PLANK_ROTATION, // Rotation → plank rotation
  "IMG_WARMUP_3": IMG_BRIDGE,         // Extension hanches → bridge
  "IMG_WARMUP_4": IMG_CAT_COW,        // Cat-Cow
  "IMG_WARMUP_5": IMG_PLANK_ROTATION, // Thread the needle → rotation

  // Workout - Abdos
  "IMG_DEADBUG": IMG_DEADBUG,
  "IMG_SINGLE_LEG": IMG_DEADBUG,      // Similar au sol
  "IMG_CRUNCH": IMG_DEADBUG,          // Au sol aussi
  "IMG_BICYCLE": IMG_DEADBUG,         // Au sol

  // Workout - Fessiers & Cuisses
  "IMG_BRIDGE": IMG_BRIDGE,
  "IMG_BRIDGE_MARCH": IMG_BRIDGE,
  "IMG_SINGLE_BRIDGE": IMG_BRIDGE,
  "IMG_GOBLET_SQUAT": IMG_GOBLET_SQUAT,
  "IMG_REVERSE_LUNGE": IMG_REVERSE_LUNGE,
  "IMG_SUMO_SQUAT": IMG_GOBLET_SQUAT,
  "IMG_RDL": IMG_RDL,
  "IMG_SINGLE_RDL": IMG_RDL,

  // Workout - Haut du corps
  "IMG_PUSHUP": IMG_PUSHUP,
  "IMG_PRONE_ROW": IMG_PUSHUP,        // Au sol
  "IMG_SUPERMAN": IMG_PUSHUP,         // Au sol
  "IMG_SNOW_ANGEL": IMG_PUSHUP,       // Au sol
  "IMG_CHEST_PRESS": IMG_DEADBUG,     // Sur le dos
  "IMG_PULLOVER": IMG_DEADBUG,        // Sur le dos

  // Workout - Épaules & Bras
  "IMG_SHOULDER_PRESS": IMG_SHOULDER_PRESS,
  "IMG_LATERAL_RAISE": IMG_SHOULDER_PRESS,
  "IMG_FRONT_RAISE": IMG_SHOULDER_PRESS,
  "IMG_BENT_ROW": IMG_RDL,            // Penché
  "IMG_REVERSE_FLY": IMG_RDL,         // Penché
  "IMG_BICEPS_CURL": IMG_SHOULDER_PRESS,
  "IMG_TRICEPS_KICK": IMG_RDL,        // Penché

  // Workout - Core & Planches
  "IMG_PLANK_ROTATION": IMG_PLANK_ROTATION,
  "IMG_PLANK_KNEE": IMG_PLANK_ROTATION,
  "IMG_HIP_DIPS": IMG_PLANK_ROTATION,
  "IMG_VSIT": IMG_DEADBUG,
  "IMG_ROLLUP": IMG_DEADBUG,
  "IMG_HUNDRED": IMG_DEADBUG,

  // Workout - Fessiers isolés
  "IMG_ABDUCTION": IMG_CAT_COW,       // À 4 pattes
  "IMG_RAINBOW": IMG_CAT_COW,         // À 4 pattes
  "IMG_SIDE_PLANK_CRUNCH": IMG_PLANK_ROTATION,

  // Workout - Finisher
  "IMG_TABLETOP": IMG_BRIDGE,
  "IMG_DIPS": IMG_BRIDGE,
  "IMG_LEG_LOWER": IMG_DEADBUG,
  "IMG_TOE_TAPS": IMG_DEADBUG,

  // Cooldown
  "IMG_CHILD_POSE": IMG_CHILD_POSE,
  "IMG_SPINE_WAVE": IMG_CHILD_POSE,
  "IMG_PUPPY_STRETCH": IMG_CHILD_POSE,
  "IMG_GLUTE_STRETCH": IMG_BRIDGE,
  "IMG_KNEES_CHEST": IMG_DEADBUG,
  "IMG_TWIST": IMG_DEADBUG,
  "IMG_SAVASANA": IMG_CHILD_POSE,
};

export function resolveImageUrl(placeholder: string): string {
  return IMAGE_MAP[placeholder] || "";
}
