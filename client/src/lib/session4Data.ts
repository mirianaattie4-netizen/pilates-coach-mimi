/*
 * SÉANCE 4 — Pilates Avancé — 1 Heure — Niveau Avancé
 * Coach Mimi — Abidjan
 * AUCUN POIDS — Tapis uniquement
 * Exercices avancés : Teaser complet, Boomerang, Corkscrew, Control Balance, etc.
 * Format: 45s effort / 15s transition
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";

const exercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════
  // PHASE 1 — ÉCHAUFFEMENT AVANCÉ (~8 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 1, phase: "warmup", isTransition: false, name: "Respiration Powerhouse", duration: 45, startTime: "00:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat, bras le long du corps.",
    movement: "Inspirez par le nez en 5 temps, sentez les côtes s'ouvrir. Expirez par la bouche en 5 temps, engagez le plancher pelvien et le transverse profondément. Sentez le nombril se rapprocher de la colonne.",
    coaching: "Connexion profonde au centre. Chaque expiration active votre powerhouse — plancher pelvien, transverse, multifides. C'est votre moteur pour toute la séance.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Transverse, plancher pelvien, diaphragme" },
  { id: 2, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "00:45",
    position: "", movement: "Restez allongé.", coaching: "On passe au Roll-Up dynamique.", imageUrl: TRANS, targetMuscles: "" },

  { id: 3, phase: "warmup", isTransition: false, name: "Roll-Up Dynamique", duration: 45, startTime: "01:00",
    position: "Allongé sur le dos, bras tendus au-dessus de la tête.",
    movement: "Inspirez, levez les bras au plafond. Expirez, enroulez la colonne vertèbre par vertèbre jusqu'à la flexion avant complète. Inspirez en haut. Expirez, déroulez lentement vers le sol.",
    coaching: "Fluidité et contrôle ! Pas d'élan. Chaque vertèbre se décolle une à une. Si ça bloque, pliez légèrement les genoux.",
    imageUrl: "IMG_ROLLUP", targetMuscles: "Grand droit, transverse, fléchisseurs de hanche" },
  { id: 4, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "01:45",
    position: "", movement: "Restez allongé.", coaching: "Préparez les jambes.", imageUrl: TRANS, targetMuscles: "" },

  { id: 5, phase: "warmup", isTransition: false, name: "Leg Circles Amples", duration: 45, startTime: "02:00",
    position: "Allongé sur le dos, une jambe tendue au plafond, l'autre au sol.",
    movement: "Faites de grands cercles avec la jambe tendue. 5 cercles dans un sens, 5 dans l'autre. Gardez le bassin stable et ancré au sol.",
    coaching: "Grands cercles mais bassin stable ! C'est le défi. Plus le cercle est grand, plus le core travaille pour stabiliser.",
    imageUrl: "IMG_LEG_CIRCLE", targetMuscles: "Psoas, adducteurs, transverse" },
  { id: 6, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "02:45",
    position: "", movement: "Changez de jambe.", coaching: "Même chose de l'autre côté.", imageUrl: TRANS, targetMuscles: "" },

  { id: 7, phase: "warmup", isTransition: false, name: "Leg Circles Amples (Gauche)", duration: 45, startTime: "03:00",
    position: "Allongé sur le dos, jambe gauche tendue au plafond.",
    movement: "Grands cercles avec la jambe gauche. 5 dans chaque sens. Bassin ancré, abdominaux engagés.",
    coaching: "Même qualité des deux côtés. Observez les différences entre droite et gauche. C'est normal !",
    imageUrl: "IMG_LEG_CIRCLE", targetMuscles: "Psoas, adducteurs, transverse" },
  { id: 8, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "03:45",
    position: "", movement: "Ramenez les deux genoux à la poitrine.", coaching: "On passe au Rolling.", imageUrl: TRANS, targetMuscles: "" },

  { id: 9, phase: "warmup", isTransition: false, name: "Rolling Like a Ball", duration: 45, startTime: "04:00",
    position: "Assis en boule, genoux pliés, mains sur les tibias, pieds décollés du sol.",
    movement: "Roulez en arrière jusqu'aux omoplates en inspirant. Expirez et revenez en équilibre assis. Gardez la forme en boule serrée tout le long.",
    coaching: "Massage de la colonne ! Gardez la boule compacte. Ne roulez jamais sur la nuque. Trouvez le rythme avec la respiration.",
    imageUrl: "IMG_ROLLING_BALL", targetMuscles: "Abdominaux, colonne vertébrale" },
  { id: 10, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "04:45",
    position: "", movement: "Allongez-vous lentement.", coaching: "Série abdominale avancée !", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 2 — PILATES AVANCÉ (~44 min)
  // ═══════════════════════════════════════════════════════════════

  // ── Série Abdominale Avancée ──
  { id: 11, phase: "workout", isTransition: false, name: "The Hundred (Jambes tendues)", duration: 45, startTime: "05:00",
    position: "Allongé, tête et épaules décollées, jambes tendues à 45° du sol.",
    movement: "Bras le long du corps, pompez vigoureusement. 5 temps d'inspiration, 5 temps d'expiration. Jambes basses et tendues pour le défi maximal.",
    coaching: "Version avancée ! Jambes basses et tendues. Plus les jambes sont basses, plus c'est intense. Gardez le bas du dos plaqué au sol !",
    imageUrl: "IMG_HUNDRED", targetMuscles: "Transverse, grand droit, obliques" },
  { id: 12, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "05:45",
    position: "", movement: "Restez allongé.", coaching: "Single Leg Stretch rapide.", imageUrl: TRANS, targetMuscles: "" },

  { id: 13, phase: "workout", isTransition: false, name: "Single Leg Stretch Rapide", duration: 45, startTime: "06:00",
    position: "Allongé, tête et épaules décollées.",
    movement: "Tirez un genou vers la poitrine, l'autre jambe tendue basse. Alternez rapidement avec précision. Main extérieure sur le genou, main intérieure sur la cheville.",
    coaching: "Rythme soutenu mais contrôlé ! Chaque changement est net et précis. Le centre ne bouge pas, seules les jambes alternent.",
    imageUrl: "IMG_SINGLE_LEG_STRETCH", targetMuscles: "Transverse, obliques, psoas" },
  { id: 14, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "06:45",
    position: "", movement: "Restez en position.", coaching: "Double Leg Stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 15, phase: "workout", isTransition: false, name: "Double Leg Stretch", duration: 45, startTime: "07:00",
    position: "Allongé, tête et épaules décollées, genoux à la poitrine.",
    movement: "Inspirez : étendez bras et jambes simultanément en étoile. Expirez : ramenez tout en boule. Les bras font un grand cercle pour revenir.",
    coaching: "Extension maximale ! Étirez-vous comme une étoile puis refermez-vous. Le centre reste engagé même dans l'extension complète.",
    imageUrl: "IMG_DOUBLE_LEG_STRETCH", targetMuscles: "Grand droit, transverse, deltoïdes" },
  { id: 16, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "07:45",
    position: "", movement: "Restez allongé.", coaching: "Ciseaux avancés.", imageUrl: TRANS, targetMuscles: "" },

  { id: 17, phase: "workout", isTransition: false, name: "Scissors Avancés", duration: 45, startTime: "08:00",
    position: "Allongé, tête et épaules décollées, les deux jambes tendues au plafond.",
    movement: "Abaissez une jambe vers le sol pendant que l'autre reste haute. Tirez 2 fois la jambe haute vers vous. Alternez avec fluidité.",
    coaching: "Jambes tendues comme des épées ! Double pulsion sur chaque jambe. Gardez le torse stable et les épaules décollées.",
    imageUrl: "IMG_SCISSORS", targetMuscles: "Psoas, ischio-jambiers, transverse" },
  { id: 18, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "08:45",
    position: "", movement: "Les deux jambes au plafond.", coaching: "Lower & Lift.", imageUrl: TRANS, targetMuscles: "" },

  { id: 19, phase: "workout", isTransition: false, name: "Lower & Lift", duration: 45, startTime: "09:00",
    position: "Allongé, mains derrière la tête, les deux jambes tendues au plafond.",
    movement: "Abaissez les deux jambes ensemble vers le sol en inspirant. Expirez et remontez. Descendez seulement aussi bas que le dos reste plaqué.",
    coaching: "Contrôle absolu ! Les jambes descendent ensemble. Dès que le dos se cambre, c'est trop bas. Qualité avant amplitude.",
    imageUrl: "IMG_LOWER_LIFT", targetMuscles: "Grand droit inférieur, transverse, psoas" },
  { id: 20, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "09:45",
    position: "", movement: "Restez allongé.", coaching: "Criss-Cross avancé.", imageUrl: TRANS, targetMuscles: "" },

  { id: 21, phase: "workout", isTransition: false, name: "Criss-Cross Lent", duration: 45, startTime: "10:00",
    position: "Allongé, mains derrière la tête, genoux à la poitrine.",
    movement: "Rotation du torse : coude vers genou opposé, l'autre jambe tendue basse. Tenez 3 secondes de chaque côté. Rotation profonde du thorax.",
    coaching: "Lent et profond ! Tenez la rotation 3 secondes. Ce n'est pas le coude qui va vers le genou, c'est tout le thorax qui tourne.",
    imageUrl: "IMG_CRISS_CROSS", targetMuscles: "Obliques internes et externes" },
  { id: 22, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "10:45",
    position: "", movement: "Asseyez-vous.", coaching: "Spine Stretch Forward.", imageUrl: TRANS, targetMuscles: "" },

  // ── Série Assise ──
  { id: 23, phase: "workout", isTransition: false, name: "Spine Stretch Forward", duration: 45, startTime: "11:00",
    position: "Assis, jambes écartées largeur des épaules, pieds flex, bras devant.",
    movement: "Expirez et enroulez la colonne vers l'avant, vertèbre par vertèbre, bras tendus devant. Inspirez et remontez en empilant les vertèbres.",
    coaching: "Grandissez-vous avant de descendre ! Imaginez que vous passez par-dessus un ballon. La colonne s'arrondit en C.",
    imageUrl: "IMG_SPINE_STRETCH", targetMuscles: "Érecteurs du rachis, ischio-jambiers, abdominaux" },
  { id: 24, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "11:45",
    position: "", movement: "Restez assis.", coaching: "Open Leg Rocker.", imageUrl: TRANS, targetMuscles: "" },

  { id: 25, phase: "workout", isTransition: false, name: "Open Leg Rocker", duration: 45, startTime: "12:00",
    position: "Assis en équilibre sur les ischions, jambes tendues en V, mains sur les chevilles.",
    movement: "Roulez en arrière jusqu'aux omoplates en gardant les jambes en V. Revenez en équilibre. Maintenez la forme en V tout le long.",
    coaching: "Équilibre et contrôle ! Gardez les jambes tendues et la forme en V. C'est le core qui contrôle le roulement, pas l'élan.",
    imageUrl: "IMG_TEASER", targetMuscles: "Abdominaux, psoas, ischio-jambiers" },
  { id: 26, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "12:45",
    position: "", movement: "Fermez les jambes.", coaching: "Spine Twist.", imageUrl: TRANS, targetMuscles: "" },

  { id: 27, phase: "workout", isTransition: false, name: "Spine Twist", duration: 45, startTime: "13:00",
    position: "Assis, jambes tendues serrées, pieds flex, bras en croix.",
    movement: "Expirez et tournez le torse vers la droite avec 2 pulsations. Inspirez au centre. Expirez vers la gauche. Le bassin reste ancré.",
    coaching: "Rotation pure du thorax ! Le bassin ne bouge pas. Grandissez-vous à chaque rotation. Les bras restent dans le champ de vision périphérique.",
    imageUrl: "IMG_SPINE_TWIST", targetMuscles: "Obliques, colonne thoracique, érecteurs" },
  { id: 28, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "13:45",
    position: "", movement: "Restez assis.", coaching: "Saw — la scie.", imageUrl: TRANS, targetMuscles: "" },

  { id: 29, phase: "workout", isTransition: false, name: "Saw", duration: 45, startTime: "14:00",
    position: "Assis, jambes écartées, bras en croix.",
    movement: "Tournez vers la droite, puis penchez-vous en avant pour toucher le petit orteil droit avec la main gauche. La main droite s'étire vers l'arrière. Revenez au centre.",
    coaching: "Rotation puis flexion ! Essorez-vous comme une serviette. Expirez à fond en descendant. Sentez l'étirement dans tout le flanc.",
    imageUrl: "IMG_SAW", targetMuscles: "Obliques, ischio-jambiers, colonne" },
  { id: 30, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "14:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Corkscrew !", imageUrl: TRANS, targetMuscles: "" },

  // ── Série Avancée — Corkscrew & Jackknife ──
  { id: 31, phase: "workout", isTransition: false, name: "Corkscrew", duration: 45, startTime: "15:00",
    position: "Allongé sur le dos, bras le long du corps, jambes tendues au plafond.",
    movement: "Faites un cercle avec les deux jambes ensemble : droite, bas, gauche, haut. Puis inversez. Le bassin peut se soulever légèrement.",
    coaching: "Contrôle du centre ! Les jambes dessinent un cercle ensemble. Plus le cercle est grand, plus c'est intense. Gardez les épaules au sol.",
    imageUrl: "IMG_LEG_CIRCLE", targetMuscles: "Obliques, grand droit, psoas" },
  { id: 32, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "15:45",
    position: "", movement: "Jambes au plafond.", coaching: "Jackknife.", imageUrl: TRANS, targetMuscles: "" },

  { id: 33, phase: "workout", isTransition: false, name: "Jackknife", duration: 45, startTime: "16:00",
    position: "Allongé sur le dos, jambes tendues au plafond.",
    movement: "Roulez les jambes par-dessus la tête (comme un Rollover). Puis poussez les jambes vers le plafond en diagonale. Redescendez vertèbre par vertèbre.",
    coaching: "Mouvement puissant ! Utilisez le core pour propulser les jambes vers le plafond. La descente est lente et contrôlée. Protégez votre nuque.",
    imageUrl: "IMG_TEASER", targetMuscles: "Abdominaux profonds, érecteurs, épaules" },
  { id: 34, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "16:45",
    position: "", movement: "Redescendez lentement.", coaching: "Teaser complet.", imageUrl: TRANS, targetMuscles: "" },

  // ── Série Teaser ──
  { id: 35, phase: "workout", isTransition: false, name: "Teaser I", duration: 45, startTime: "17:00",
    position: "Allongé sur le dos, bras au-dessus de la tête, jambes tendues à 45°.",
    movement: "Enroulez le torse et les bras simultanément pour atteindre la position en V. Bras parallèles aux jambes. Redescendez lentement.",
    coaching: "Le roi du Pilates ! Montez en un seul mouvement fluide. Les bras et le torse arrivent ensemble. Contrôle total à la descente.",
    imageUrl: "IMG_TEASER", targetMuscles: "Grand droit, psoas, transverse" },
  { id: 36, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "17:45",
    position: "", movement: "Restez allongé.", coaching: "Teaser II.", imageUrl: TRANS, targetMuscles: "" },

  { id: 37, phase: "workout", isTransition: false, name: "Teaser II", duration: 45, startTime: "18:00",
    position: "En position Teaser (V), bras parallèles aux jambes.",
    movement: "Abaissez et remontez les jambes 3 fois en gardant le torse immobile. Le haut du corps ne bouge pas, seules les jambes montent et descendent.",
    coaching: "Le torse est un roc ! Seules les jambes bougent. C'est un défi de stabilité incroyable. Respirez !",
    imageUrl: "IMG_TEASER", targetMuscles: "Psoas, grand droit, transverse" },
  { id: 38, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "18:45",
    position: "", movement: "Redescendez.", coaching: "Teaser III.", imageUrl: TRANS, targetMuscles: "" },

  { id: 39, phase: "workout", isTransition: false, name: "Teaser III", duration: 45, startTime: "19:00",
    position: "Allongé complètement, bras au-dessus de la tête, jambes au sol.",
    movement: "Montez tout en même temps : bras, torse et jambes pour atteindre le Teaser complet. Redescendez tout en même temps. Répétez.",
    coaching: "La version ultime ! Tout monte et tout descend ensemble. C'est le contrôle absolu du powerhouse. Vous êtes des warriors !",
    imageUrl: "IMG_TEASER", targetMuscles: "Core complet, psoas, deltoïdes" },
  { id: 40, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "19:45",
    position: "", movement: "Retournez-vous sur le ventre.", coaching: "Série dorsale.", imageUrl: TRANS, targetMuscles: "" },

  // ── Série Sur le Ventre ──
  { id: 41, phase: "workout", isTransition: false, name: "Swan Dive", duration: 45, startTime: "20:00",
    position: "Sur le ventre, mains sous les épaules.",
    movement: "Poussez dans les mains pour lever le torse en extension. Lâchez les mains et basculez vers l'avant, les jambes montent. Rattrapez avec les mains. Mouvement de bascule.",
    coaching: "Bascule dynamique ! Le corps est un arc. Quand le torse monte, les jambes descendent et vice versa. Courage !",
    imageUrl: "IMG_SWAN", targetMuscles: "Érecteurs du rachis, fessiers, deltoïdes" },
  { id: 42, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "20:45",
    position: "", movement: "Restez sur le ventre.", coaching: "Swimming avancé.", imageUrl: TRANS, targetMuscles: "" },

  { id: 43, phase: "workout", isTransition: false, name: "Swimming Rapide", duration: 45, startTime: "21:00",
    position: "Sur le ventre, bras et jambes décollés du sol.",
    movement: "Battements alternés rapides bras/jambes opposés. Montez plus haut que d'habitude. Respirez en 5 temps inspiration, 5 temps expiration.",
    coaching: "Nagez vite et haut ! Amplitude maximale. Le regard reste vers le sol pour protéger la nuque. Respirez comme pour le Hundred !",
    imageUrl: "IMG_SWIMMING", targetMuscles: "Chaîne postérieure complète" },
  { id: 44, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "21:45",
    position: "", movement: "Restez sur le ventre.", coaching: "Double Leg Kick.", imageUrl: TRANS, targetMuscles: "" },

  { id: 45, phase: "workout", isTransition: false, name: "Double Leg Kick", duration: 45, startTime: "22:00",
    position: "Sur le ventre, mains croisées dans le dos, tête tournée d'un côté.",
    movement: "Pliez les deux genoux et donnez 3 coups de talon vers les fessiers. Puis étendez les jambes et levez le torse en tirant les bras vers l'arrière. Alternez le côté de la tête.",
    coaching: "3 kicks puis extension ! Les mains tirent vers les fessiers pour ouvrir la poitrine. Sentez l'ouverture des épaules et du thorax.",
    imageUrl: "IMG_DOUBLE_LEG_KICK", targetMuscles: "Fessiers, érecteurs, deltoïdes postérieurs" },
  { id: 46, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "22:45",
    position: "", movement: "Passez sur le côté droit.", coaching: "Série latérale.", imageUrl: TRANS, targetMuscles: "" },

  // ── Série Latérale ──
  { id: 47, phase: "workout", isTransition: false, name: "Side Kick Series — Front/Back (Droite)", duration: 45, startTime: "23:00",
    position: "Couché sur le côté droit, tête sur la main, jambes légèrement en avant.",
    movement: "Balancez la jambe gauche vers l'avant (2 pulsations) puis vers l'arrière. Gardez le torse parfaitement stable.",
    coaching: "Le torse est un pilier ! Seule la jambe bouge. Kick avant avec 2 pulsations, kick arrière avec contrôle. Pas de balancement du corps.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Psoas, fessiers, obliques" },
  { id: 48, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "23:45",
    position: "", movement: "Restez sur le côté.", coaching: "Cercles.", imageUrl: TRANS, targetMuscles: "" },

  { id: 49, phase: "workout", isTransition: false, name: "Side Kick — Circles (Droite)", duration: 45, startTime: "24:00",
    position: "Couché sur le côté droit, jambe gauche levée à hauteur de hanche.",
    movement: "Faites de petits cercles avec la jambe gauche. 10 dans un sens, 10 dans l'autre. Gardez la jambe à hauteur de hanche.",
    coaching: "Petits cercles précis ! La jambe trace des cercles parfaits. Sentez le moyen fessier brûler. C'est le signe que ça travaille !",
    imageUrl: "IMG_SIDE_CIRCLES", targetMuscles: "Moyen fessier, tenseur du fascia lata" },
  { id: 50, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "24:45",
    position: "", movement: "Restez sur le côté.", coaching: "Inner Thigh Lift.", imageUrl: TRANS, targetMuscles: "" },

  { id: 51, phase: "workout", isTransition: false, name: "Inner Thigh Lift (Droite)", duration: 45, startTime: "25:00",
    position: "Couché sur le côté droit, jambe gauche croisée devant, pied au sol.",
    movement: "Levez la jambe droite (celle du dessous) vers le plafond. Montez et descendez avec contrôle. Sentez l'adducteur travailler.",
    coaching: "La jambe du dessous ! C'est un exercice souvent oublié mais essentiel. Les adducteurs sont clés pour la stabilité du bassin.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Adducteurs, obliques" },
  { id: 52, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "25:45",
    position: "", movement: "Retournez-vous sur le côté gauche.", coaching: "Même série à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 53, phase: "workout", isTransition: false, name: "Side Kick Series — Front/Back (Gauche)", duration: 45, startTime: "26:00",
    position: "Couché sur le côté gauche, tête sur la main, jambes légèrement en avant.",
    movement: "Balancez la jambe droite vers l'avant (2 pulsations) puis vers l'arrière. Torse stable.",
    coaching: "Même qualité à gauche ! Comparez les sensations. Un côté est souvent plus fort que l'autre, c'est normal.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Psoas, fessiers, obliques" },
  { id: 54, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "26:45",
    position: "", movement: "Restez sur le côté.", coaching: "Cercles à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 55, phase: "workout", isTransition: false, name: "Side Kick — Circles (Gauche)", duration: 45, startTime: "27:00",
    position: "Couché sur le côté gauche, jambe droite levée.",
    movement: "Petits cercles avec la jambe droite. 10 dans chaque sens.",
    coaching: "Précision et contrôle ! Sentez la brûlure dans le moyen fessier. C'est le muscle qui sculpte la silhouette.",
    imageUrl: "IMG_SIDE_CIRCLES", targetMuscles: "Moyen fessier, tenseur du fascia lata" },
  { id: 56, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "27:45",
    position: "", movement: "Restez sur le côté.", coaching: "Inner Thigh à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 57, phase: "workout", isTransition: false, name: "Inner Thigh Lift (Gauche)", duration: 45, startTime: "28:00",
    position: "Couché sur le côté gauche, jambe droite croisée devant.",
    movement: "Levez la jambe gauche (dessous) vers le plafond avec contrôle.",
    coaching: "Adducteurs en feu ! Montez lentement, descendez encore plus lentement. La qualité prime sur la quantité.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Adducteurs, obliques" },
  { id: 58, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "28:45",
    position: "", movement: "Passez en planche.", coaching: "Série planches avancées.", imageUrl: TRANS, targetMuscles: "" },

  // ── Série Planches Avancées ──
  { id: 59, phase: "workout", isTransition: false, name: "Planche avec Leg Pull Front", duration: 45, startTime: "29:00",
    position: "En planche haute, mains sous les épaules.",
    movement: "Levez une jambe vers le plafond en gardant le bassin stable. Poussez le talon d'appui vers l'arrière. Alternez les jambes.",
    coaching: "Planche dynamique ! Le bassin ne tourne pas quand la jambe monte. C'est le défi. Serrez les fessiers et le core.",
    imageUrl: "IMG_HIGH_PLANK", targetMuscles: "Core complet, fessiers, épaules" },
  { id: 60, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "29:45",
    position: "", movement: "Retournez-vous face au plafond.", coaching: "Leg Pull Back.", imageUrl: TRANS, targetMuscles: "" },

  { id: 61, phase: "workout", isTransition: false, name: "Leg Pull Back", duration: 45, startTime: "30:00",
    position: "En planche inversée, mains derrière, doigts vers les pieds, corps en ligne.",
    movement: "Levez une jambe vers le plafond. Reposez. Alternez. Gardez les hanches hautes et le corps en ligne droite.",
    coaching: "Planche inversée ! Poussez les hanches vers le plafond. Ouvrez la poitrine. Levez la jambe sans perdre la ligne du corps.",
    imageUrl: "IMG_PLANK", targetMuscles: "Triceps, fessiers, ischio-jambiers, épaules" },
  { id: 62, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "30:45",
    position: "", movement: "Asseyez-vous.", coaching: "Boomerang.", imageUrl: TRANS, targetMuscles: "" },

  // ── Exercices Signature Avancés ──
  { id: 63, phase: "workout", isTransition: false, name: "Boomerang", duration: 45, startTime: "31:00",
    position: "Assis, jambes tendues croisées, bras le long du corps.",
    movement: "Roulez en arrière, décroisez et recroisez les jambes, revenez en Teaser, puis penchez-vous en avant en étirant les bras vers l'arrière.",
    coaching: "Mouvement complexe et fluide ! C'est une chorégraphie : rouler, croiser, Teaser, étirement. Prenez votre temps pour le maîtriser.",
    imageUrl: "IMG_TEASER", targetMuscles: "Core complet, ischio-jambiers, épaules" },
  { id: 64, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "31:45",
    position: "", movement: "Restez assis.", coaching: "Seal.", imageUrl: TRANS, targetMuscles: "" },

  { id: 65, phase: "workout", isTransition: false, name: "Seal", duration: 45, startTime: "32:00",
    position: "Assis en boule, pieds décollés, mains passées à l'intérieur des jambes pour tenir les chevilles.",
    movement: "Clappez les pieds 3 fois (comme un phoque). Roulez en arrière. Clappez 3 fois en haut. Revenez en équilibre.",
    coaching: "Le phoque ! 3 claps en bas, roulez, 3 claps en haut. C'est ludique mais ça demande un contrôle abdominal énorme.",
    imageUrl: "IMG_SEAL", targetMuscles: "Abdominaux, colonne vertébrale" },
  { id: 66, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "32:45",
    position: "", movement: "Allongez-vous.", coaching: "Hip Circles.", imageUrl: TRANS, targetMuscles: "" },

  { id: 67, phase: "workout", isTransition: false, name: "Hip Circles", duration: 45, startTime: "33:00",
    position: "Assis en appui sur les mains derrière, jambes tendues en diagonale.",
    movement: "Faites des cercles avec les deux jambes ensemble. Droite, bas, gauche, haut. Puis inversez. Le torse reste stable.",
    coaching: "Cercles ambitieux ! Les jambes dessinent de grands cercles. Le core travaille pour stabiliser le torse. Respirez !",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Obliques, psoas, triceps" },
  { id: 68, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "33:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Control Balance.", imageUrl: TRANS, targetMuscles: "" },

  { id: 69, phase: "workout", isTransition: false, name: "Control Balance", duration: 45, startTime: "34:00",
    position: "Allongé, jambes par-dessus la tête (Rollover), mains tenant une cheville.",
    movement: "Tenez une cheville, l'autre jambe monte vers le plafond. Alternez en ciseaux. Gardez le poids sur les épaules, pas sur la nuque.",
    coaching: "Équilibre et contrôle total ! Les jambes alternent comme des ciseaux inversés. Protégez votre nuque en gardant le poids sur les épaules.",
    imageUrl: "IMG_SCISSORS", targetMuscles: "Abdominaux, ischio-jambiers, épaules" },
  { id: 70, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "34:45",
    position: "", movement: "Redescendez lentement.", coaching: "Planche latérale avancée.", imageUrl: TRANS, targetMuscles: "" },

  // ── Planches Latérales ──
  { id: 71, phase: "workout", isTransition: false, name: "Side Plank Twist (Droite)", duration: 45, startTime: "35:00",
    position: "En planche latérale sur la main droite, pieds empilés, bras gauche au plafond.",
    movement: "Tournez le torse et passez le bras gauche sous le corps (Thread the Needle). Revenez en planche latérale ouverte. Répétez.",
    coaching: "Rotation en planche latérale ! C'est un défi d'équilibre et de force. Gardez les hanches hautes pendant la rotation.",
    imageUrl: "IMG_SIDE_PLANK", targetMuscles: "Obliques, deltoïdes, moyen fessier" },
  { id: 72, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "35:45",
    position: "", movement: "Changez de côté.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 73, phase: "workout", isTransition: false, name: "Side Plank Twist (Gauche)", duration: 45, startTime: "36:00",
    position: "En planche latérale sur la main gauche, bras droit au plafond.",
    movement: "Rotation : passez le bras droit sous le corps puis revenez ouvert. Répétez avec fluidité.",
    coaching: "Fluidité et force ! Comparez les deux côtés. Gardez les hanches hautes et le corps aligné.",
    imageUrl: "IMG_SIDE_PLANK", targetMuscles: "Obliques, deltoïdes, moyen fessier" },
  { id: 74, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "36:45",
    position: "", movement: "Passez à 4 pattes.", coaching: "Série quadrupédie avancée.", imageUrl: TRANS, targetMuscles: "" },

  // ── Quadrupédie Avancée ──
  { id: 75, phase: "workout", isTransition: false, name: "Bird Dog Dynamique", duration: 45, startTime: "37:00",
    position: "À quatre pattes, mains sous les épaules, genoux sous les hanches.",
    movement: "Étendez le bras droit et la jambe gauche. Ramenez coude et genou sous le corps. Ré-étendez. Gardez le dos plat comme une table.",
    coaching: "Stabilité dynamique ! Le dos reste plat comme une table. Le mouvement vient des extrémités, pas du centre. Lent et contrôlé.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Multifides, fessiers, deltoïdes" },
  { id: 76, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "37:45",
    position: "", movement: "Changez de côté.", coaching: "Autre diagonale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 77, phase: "workout", isTransition: false, name: "Bird Dog Dynamique (Gauche)", duration: 45, startTime: "38:00",
    position: "À quatre pattes.",
    movement: "Bras gauche et jambe droite. Extension puis flexion sous le corps. Répétez.",
    coaching: "Même qualité ! Observez si un côté est plus stable que l'autre. C'est une information précieuse sur votre corps.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Multifides, fessiers, deltoïdes" },
  { id: 78, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "38:45",
    position: "", movement: "Passez en planche.", coaching: "Pilates Push-Up.", imageUrl: TRANS, targetMuscles: "" },

  { id: 79, phase: "workout", isTransition: false, name: "Pilates Push-Up", duration: 45, startTime: "39:00",
    position: "Debout, pieds joints.",
    movement: "Enroulez vers le sol, marchez les mains en planche, faites 3 push-ups coudes serrés, marchez les mains vers les pieds, déroulez pour revenir debout.",
    coaching: "L'exercice signature de fin ! Enroulement, marche, push-ups, retour. C'est la synthèse de tout le Pilates : mobilité, force, contrôle.",
    imageUrl: "IMG_PILATES_PUSHUP", targetMuscles: "Pectoraux, triceps, core, ischio-jambiers" },
  { id: 80, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "39:45",
    position: "", movement: "Répétez.", coaching: "Encore une série.", imageUrl: TRANS, targetMuscles: "" },

  { id: 81, phase: "workout", isTransition: false, name: "Pilates Push-Up (Série 2)", duration: 45, startTime: "40:00",
    position: "Debout.",
    movement: "Même séquence : enroulement, marche en planche, 3 push-ups, retour debout. Plus fluide cette fois.",
    coaching: "Plus fluide ! Chaque répétition doit être meilleure que la précédente. Sentez la connexion entre chaque partie du mouvement.",
    imageUrl: "IMG_PILATES_PUSHUP", targetMuscles: "Pectoraux, triceps, core, ischio-jambiers" },
  { id: 82, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "40:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Retour au calme.", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 3 — RETOUR AU CALME (~8 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 83, phase: "cooldown", isTransition: false, name: "Genoux à la Poitrine", duration: 45, startTime: "41:00",
    position: "Allongé sur le dos, genoux ramenés à la poitrine.",
    movement: "Bercez-vous doucement de droite à gauche. Massez le bas du dos. Respirez profondément.",
    coaching: "Bravo pour cette séance avancée ! Bercez-vous doucement. Votre dos a travaillé dur, offrez-lui ce massage.",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Lombaires, détente" },
  { id: 84, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "41:45",
    position: "", movement: "Ouvrez les bras en croix.", coaching: "Torsion spinale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 85, phase: "cooldown", isTransition: false, name: "Torsion Spinale (Droite)", duration: 45, startTime: "42:00",
    position: "Allongé, bras en croix, genoux pliés.",
    movement: "Laissez tomber les genoux vers la droite. Tournez la tête à gauche. Respirez dans l'étirement. Laissez la gravité faire le travail.",
    coaching: "Lâchez prise ! Laissez la gravité étirer votre colonne. Respirez dans les espaces qui s'ouvrent. Détendez les épaules.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne, obliques, pectoraux" },
  { id: 86, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "42:45",
    position: "", movement: "Revenez au centre.", coaching: "Autre côté.", imageUrl: TRANS, targetMuscles: "" },

  { id: 87, phase: "cooldown", isTransition: false, name: "Torsion Spinale (Gauche)", duration: 45, startTime: "43:00",
    position: "Allongé, bras en croix.",
    movement: "Genoux à gauche, tête à droite. Respirez profondément. Sentez l'étirement dans tout le flanc droit.",
    coaching: "Même durée des deux côtés. Observez les différences. Un côté est souvent plus raide. C'est une information pour votre pratique.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne, obliques, pectoraux" },
  { id: 88, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "43:45",
    position: "", movement: "Retournez-vous.", coaching: "Posture de l'enfant.", imageUrl: TRANS, targetMuscles: "" },

  { id: 89, phase: "cooldown", isTransition: false, name: "Posture de l'Enfant", duration: 45, startTime: "44:00",
    position: "À genoux, fesses sur les talons, bras tendus devant, front au sol.",
    movement: "Respirez profondément. Étirez les bras le plus loin possible. Sentez l'allongement de toute la colonne. Relâchez complètement.",
    coaching: "Repos mérité ! Laissez tout le poids du corps s'abandonner. Respirez dans le dos. Sentez les côtes s'ouvrir à chaque inspiration.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Colonne, épaules, détente" },
  { id: 90, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "44:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Figure 4.", imageUrl: TRANS, targetMuscles: "" },

  { id: 91, phase: "cooldown", isTransition: false, name: "Figure 4 Stretch (Droite)", duration: 45, startTime: "45:00",
    position: "Allongé, cheville droite sur le genou gauche.",
    movement: "Tirez le genou gauche vers la poitrine. Sentez l'étirement profond dans la hanche droite et le piriforme.",
    coaching: "Étirement profond des rotateurs de hanche. Après tout ce travail latéral, vos hanches en ont besoin. Respirez dans l'étirement.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Piriforme, fessiers, rotateurs externes" },
  { id: 92, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "45:45",
    position: "", movement: "Changez de côté.", coaching: "Figure 4 gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 93, phase: "cooldown", isTransition: false, name: "Figure 4 Stretch (Gauche)", duration: 45, startTime: "46:00",
    position: "Allongé, cheville gauche sur le genou droit.",
    movement: "Tirez le genou droit vers la poitrine. Respirez dans l'étirement de la hanche gauche.",
    coaching: "Même chose à gauche. Comparez les deux côtés. Respirez et relâchez toute tension.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Piriforme, fessiers, rotateurs externes" },
  { id: 94, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "46:45",
    position: "", movement: "Étendez-vous complètement.", coaching: "Relaxation finale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 95, phase: "cooldown", isTransition: false, name: "Savasana — Relaxation", duration: 60, startTime: "47:00",
    position: "Allongé sur le dos, bras le long du corps, paumes vers le plafond, yeux fermés.",
    movement: "Relâchez chaque muscle de votre corps. Scannez mentalement des pieds à la tête. Laissez la respiration devenir naturelle.",
    coaching: "Félicitations pour cette séance avancée ! Vous avez repoussé vos limites. Savourez ce moment de calme. Votre corps se régénère. Namaste, Coach Mimi.",
    imageUrl: "IMG_SAVASANA", targetMuscles: "Relaxation complète" },
];

export const session4: SessionConfig = {
  id: "avance",
  title: "Pilates Avancé",
  subtitle: "Maîtrise & Contrôle",
  description: "Séance avancée avec les exercices les plus exigeants du répertoire Pilates : Teaser complet, Boomerang, Corkscrew, Jackknife, Control Balance. Pour pratiquants confirmés.",
  level: "Avancé",
  duration: "~48 min",
  equipment: "Tapis uniquement",
  phaseLabels: { warmup: "Échauffement Avancé", workout: "Pilates Avancé", cooldown: "Retour au Calme" },
  exercises: exercises.map((ex) => ({ ...ex, imageUrl: ex.imageUrl ? resolveImageUrl(ex.imageUrl) || ex.imageUrl : "" })),
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "purple",
  finishMessage: "Incroyable ! Vous avez terminé la séance Pilates Avancé. Teaser, Boomerang, Corkscrew — vous maîtrisez le répertoire complet. Votre powerhouse est en acier ! À très bientôt avec Coach Mimi !",
};
