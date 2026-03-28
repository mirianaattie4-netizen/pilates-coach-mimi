/*
 * SÉANCE 2 — Pilates Contemporain au Sol — 1 Heure — Niveau Intermédiaire
 * Basée sur la vidéo YouTube : https://youtu.be/mRKu129lP6Y
 * Coach Mimi — Abidjan
 * AUCUN POIDS — Tapis uniquement
 * Phases: warmup (vert ~8 min), workout Pilates contemporain (corail ~44 min), cooldown (bleu ~8 min)
 * Format: 45s effort / 15s transition
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";

const exercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════
  // PHASE 1 — ÉCHAUFFEMENT (~8 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 1, phase: "warmup", isTransition: false, name: "Respiration Latérale", duration: 45, startTime: "00:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat, mains sur les côtes.",
    movement: "Inspirez par le nez en sentant les côtes s'ouvrir latéralement sous vos mains. Expirez par la bouche en sentant les côtes se refermer. Activez le centre à chaque expiration.",
    coaching: "On commence par la connexion au souffle. Sentez vos côtes s'ouvrir comme un accordéon. Chaque expiration active votre centre.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Transverse, diaphragme, intercostaux" },
  { id: 2, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "00:45",
    position: "", movement: "Restez allongé.", coaching: "On mobilise le bassin.", imageUrl: TRANS, targetMuscles: "" },

  { id: 3, phase: "warmup", isTransition: false, name: "Pelvic Clock", duration: 45, startTime: "01:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat.",
    movement: "Imaginez une horloge sous votre bassin. Roulez le bassin vers 12h (pubis vers le plafond), puis 3h, 6h, 9h. Faites des cercles complets dans les deux sens.",
    coaching: "Mouvement subtil et précis. Explorez chaque position de l'horloge. Détendez les fessiers, laissez les abdominaux profonds guider.",
    imageUrl: "IMG_PELVIC_TILT", targetMuscles: "Bassin, lombaires, transverse" },
  { id: 4, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "01:45",
    position: "", movement: "Ramenez le bassin neutre.", coaching: "On passe au pont.", imageUrl: TRANS, targetMuscles: "" },

  { id: 5, phase: "warmup", isTransition: false, name: "Pont Articulé Lent", duration: 45, startTime: "02:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat, bras le long du corps.",
    movement: "Expirez et déroulez la colonne vertèbre par vertèbre en montant le bassin. Inspirez en haut. Expirez et redescendez vertèbre par vertèbre.",
    coaching: "Comme un collier de perles qu'on déroule. Chaque vertèbre se décolle une à une. Sentez l'espace entre chaque vertèbre.",
    imageUrl: "IMG_BRIDGE_PILATES", targetMuscles: "Colonne, fessiers, ischio-jambiers" },
  { id: 6, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "02:45",
    position: "", movement: "Retournez-vous à 4 pattes.", coaching: "Cat-Cow pour la colonne.", imageUrl: TRANS, targetMuscles: "" },

  { id: 7, phase: "warmup", isTransition: false, name: "Cat-Cow Dynamique", duration: 45, startTime: "03:00",
    position: "À quatre pattes, mains sous les épaules, genoux sous les hanches.",
    movement: "Inspirez en creusant le dos (vache), regard vers le plafond. Expirez en arrondissant le dos (chat), menton vers la poitrine. Ajoutez des ondulations latérales.",
    coaching: "Fluidité ! Laissez le mouvement partir du bassin et onduler jusqu'à la tête. Explorez aussi les diagonales.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Colonne vertébrale, abdominaux, dos" },
  { id: 8, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "03:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "On ouvre le thorax.", imageUrl: TRANS, targetMuscles: "" },

  { id: 9, phase: "warmup", isTransition: false, name: "Thread the Needle (Droite)", duration: 45, startTime: "04:00",
    position: "À quatre pattes.",
    movement: "Glissez le bras droit sous le corps vers la gauche, posez l'épaule et la tempe au sol. Le bras gauche reste en appui. Respirez dans la rotation.",
    coaching: "Rotation thoracique profonde. Laissez le poids de l'épaule vous aider à tourner. Respirez dans l'ouverture.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules, obliques" },
  { id: 10, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "04:45",
    position: "", movement: "Revenez à 4 pattes.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 11, phase: "warmup", isTransition: false, name: "Thread the Needle (Gauche)", duration: 45, startTime: "05:00",
    position: "À quatre pattes.",
    movement: "Glissez le bras gauche sous le corps vers la droite, posez l'épaule et la tempe au sol. Respirez dans la rotation.",
    coaching: "Même ouverture de l'autre côté. Comparez les deux côtés. Respirez profondément dans l'étirement.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules, obliques" },
  { id: 12, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "05:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Cercles de hanches.", imageUrl: TRANS, targetMuscles: "" },

  { id: 13, phase: "warmup", isTransition: false, name: "Cercles de Hanches", duration: 45, startTime: "06:00",
    position: "À quatre pattes.",
    movement: "Faites de grands cercles avec le genou droit : vers l'avant, sur le côté, vers l'arrière. 4 cercles dans chaque sens, puis changez de jambe.",
    coaching: "Lubrifiez l'articulation de la hanche. Grands cercles fluides. Le haut du corps reste stable.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Hanches, fessiers, mobilité articulaire" },
  { id: 14, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "06:45",
    position: "", movement: "Asseyez-vous.", coaching: "Spine Stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 15, phase: "warmup", isTransition: false, name: "Spine Stretch Forward", duration: 45, startTime: "07:00",
    position: "Assis, jambes écartées largeur des épaules, bras tendus devant.",
    movement: "Expirez en enroulant vers l'avant vertèbre par vertèbre, bras tendus devant. Inspirez pour vous redresser en empilant les vertèbres.",
    coaching: "Enroulez comme si vous passiez par-dessus un ballon. Le nombril recule quand vous avancez. Grandissez à chaque remontée.",
    imageUrl: "IMG_SPINE_STRETCH", targetMuscles: "Colonne, ischio-jambiers, transverse" },
  { id: 16, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "07:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "On attaque le workout !", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 2 — PILATES CONTEMPORAIN (~44 min)
  // ═══════════════════════════════════════════════════════════════

  // ─── BLOC 1 : Supine Core (~8 min) ───

  { id: 17, phase: "workout", isTransition: false, name: "The Hundred (Le Cent)", duration: 45, startTime: "08:00",
    position: "Allongé, tête et épaules décollées, jambes en table ou tendues à 45°, bras le long du corps.",
    movement: "Battez les bras de haut en bas avec énergie. Inspirez sur 5 battements, expirez sur 5 battements. Visez 100 battements.",
    coaching: "L'exercice signature du Pilates ! Pompez les bras avec énergie. Le ventre est creux, les épaules loin des oreilles. Respirez !",
    imageUrl: "IMG_HUNDRED", targetMuscles: "Transverse, grand droit, stabilisateurs" },
  { id: 18, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "08:45",
    position: "", movement: "Allongez-vous complètement.", coaching: "Roll-Up.", imageUrl: TRANS, targetMuscles: "" },

  { id: 19, phase: "workout", isTransition: false, name: "Roll-Up", duration: 45, startTime: "09:00",
    position: "Allongé, bras tendus au-dessus de la tête, jambes tendues et serrées.",
    movement: "Expirez et enroulez vers l'avant vertèbre par vertèbre, bras vers les pieds. Inspirez en haut. Expirez et déroulez vers l'arrière lentement.",
    coaching: "Contrôle ! Pas d'élan. Si c'est trop dur, pliez les genoux. Chaque vertèbre touche le sol une à une en redescendant.",
    imageUrl: "IMG_ROLLUP", targetMuscles: "Grand droit, transverse, fléchisseurs de hanche" },
  { id: 20, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "09:45",
    position: "", movement: "Restez allongé.", coaching: "Hollow body.", imageUrl: TRANS, targetMuscles: "" },

  { id: 21, phase: "workout", isTransition: false, name: "Hollow Body Hold", duration: 45, startTime: "10:00",
    position: "Allongé, bras tendus derrière la tête, jambes tendues et décollées du sol.",
    movement: "Maintenez la position creuse : bas du dos plaqué au sol, bras et jambes hovering. Respirez sans perdre la forme.",
    coaching: "Position de base du Pilates contemporain ! Le bas du dos est collé au sol. Si c'est trop intense, pliez les genoux ou montez les jambes plus haut.",
    imageUrl: "IMG_HUNDRED", targetMuscles: "Transverse, grand droit, fléchisseurs de hanche" },
  { id: 22, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "10:45",
    position: "", movement: "Ramenez les genoux.", coaching: "On enchaîne.", imageUrl: TRANS, targetMuscles: "" },

  { id: 23, phase: "workout", isTransition: false, name: "Hollow → Side Roll (Droite)", duration: 45, startTime: "11:00",
    position: "En position hollow (bras et jambes hovering).",
    movement: "Maintenez le hollow, puis roulez sur le côté droit en gardant la tension. Revenez sur le dos. Répétez.",
    coaching: "Gardez la forme creuse pendant tout le roulement ! Le corps est une planche rigide qui roule. Contrôle total.",
    imageUrl: "IMG_CRISS_CROSS", targetMuscles: "Core, obliques, stabilisateurs" },
  { id: 24, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "11:45",
    position: "", movement: "Revenez sur le dos.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 25, phase: "workout", isTransition: false, name: "Hollow → Side Roll (Gauche)", duration: 45, startTime: "12:00",
    position: "En position hollow.",
    movement: "Maintenez le hollow, puis roulez sur le côté gauche en gardant la tension. Revenez sur le dos. Répétez.",
    coaching: "Même contrôle de l'autre côté ! Le corps ne se plie pas pendant le roulement. Restez rigide comme une planche.",
    imageUrl: "IMG_CRISS_CROSS", targetMuscles: "Core, obliques, stabilisateurs" },
  { id: 26, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "12:45",
    position: "", movement: "Ramenez les genoux.", coaching: "Série abdominale.", imageUrl: TRANS, targetMuscles: "" },

  // ─── BLOC 2 : Série Abdominale Classique (~6 min) ───

  { id: 27, phase: "workout", isTransition: false, name: "Single Leg Stretch", duration: 45, startTime: "13:00",
    position: "Allongé, tête et épaules décollées, un genou ramené vers la poitrine, l'autre jambe tendue à 45°.",
    movement: "Alternez les jambes en tirant le genou vers la poitrine. Main extérieure sur la cheville, main intérieure sur le genou.",
    coaching: "Précision des mains ! Gardez les épaules décollées tout le long. Le ventre est creux. Mouvement fluide et rythmé.",
    imageUrl: "IMG_SINGLE_LEG_STRETCH", targetMuscles: "Transverse, fléchisseurs de hanche" },
  { id: 28, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "13:45",
    position: "", movement: "Gardez la position.", coaching: "Double Leg Stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 29, phase: "workout", isTransition: false, name: "Double Leg Stretch", duration: 45, startTime: "14:00",
    position: "Allongé, tête et épaules décollées, genoux ramenés à la poitrine, mains sur les chevilles.",
    movement: "Inspirez en tendant bras et jambes en étoile. Expirez en ramenant tout en boule. Bras font un grand cercle.",
    coaching: "Expansion et contraction ! Tendez-vous au maximum puis refermez-vous. Le bas du dos reste plaqué au sol.",
    imageUrl: "IMG_DOUBLE_LEG_STRETCH", targetMuscles: "Transverse, grand droit, coordination" },
  { id: 30, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "14:45",
    position: "", movement: "Gardez les épaules décollées.", coaching: "Criss-Cross.", imageUrl: TRANS, targetMuscles: "" },

  { id: 31, phase: "workout", isTransition: false, name: "Criss-Cross", duration: 45, startTime: "15:00",
    position: "Allongé, mains derrière la tête, épaules décollées.",
    movement: "Amenez le coude droit vers le genou gauche en tendant la jambe droite. Alternez. Rotation complète du buste.",
    coaching: "Rotation profonde ! C'est le buste qui tourne, pas juste le coude. Gardez les deux coudes ouverts. Expirez à chaque rotation.",
    imageUrl: "IMG_CRISS_CROSS", targetMuscles: "Obliques, transverse, fléchisseurs de hanche" },
  { id: 32, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "15:45",
    position: "", movement: "Reposez la tête.", coaching: "Leg Lower & Lift.", imageUrl: TRANS, targetMuscles: "" },

  { id: 33, phase: "workout", isTransition: false, name: "Leg Lower & Scissor", duration: 45, startTime: "16:00",
    position: "Allongé, épaules décollées, jambes tendues vers le plafond.",
    movement: "Abaissez les deux jambes vers le sol en expirant, puis remontez. Enchaînez avec des ciseaux : alternez les jambes haut/bas en torsion.",
    coaching: "Le bas du dos reste collé ! Si ça tire, ne descendez pas trop bas. Les ciseaux ajoutent la rotation. Contrôle !",
    imageUrl: "IMG_SCISSORS", targetMuscles: "Grand droit, obliques, fléchisseurs de hanche" },
  { id: 34, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "16:45",
    position: "", movement: "Ramenez les genoux.", coaching: "On passe à la quadrupédie.", imageUrl: TRANS, targetMuscles: "" },

  // ─── BLOC 3 : Quadrupédie Contemporaine (~10 min) ───

  { id: 35, phase: "workout", isTransition: false, name: "Arm + Leg Opener (Droite)", duration: 45, startTime: "17:00",
    position: "À quatre pattes, bras droit et jambe gauche tendus.",
    movement: "Ouvrez le bras droit et la jambe gauche pliée sur le côté (fire hydrant). Revenez en extension. Répétez.",
    coaching: "Stabilité du tronc ! Le bassin ne bouge pas pendant l'ouverture. Sentez le travail du moyen fessier et de l'épaule.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Fessiers, épaules, core, stabilisateurs" },
  { id: 36, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "17:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Rainbow Taps.", imageUrl: TRANS, targetMuscles: "" },

  { id: 37, phase: "workout", isTransition: false, name: "Rainbow Taps (Droite)", duration: 45, startTime: "18:00",
    position: "À quatre pattes, jambe droite tendue derrière.",
    movement: "Faites un arc-en-ciel avec la jambe droite : tapez le sol à droite, passez par-dessus en arc, tapez à gauche. Répétez.",
    coaching: "Grand mouvement en arc ! Le fessier travaille dans toute son amplitude. Le haut du corps reste stable. Contrôlez la descente.",
    imageUrl: "IMG_DONKEY_KICK", targetMuscles: "Grand fessier, moyen fessier, core" },
  { id: 38, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "18:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Side Plank Knee to Elbow.", imageUrl: TRANS, targetMuscles: "" },

  { id: 39, phase: "workout", isTransition: false, name: "Side Plank Knee to Elbow (Droite)", duration: 45, startTime: "19:00",
    position: "Planche latérale sur le genou droit, main droite au sol, bras gauche tendu.",
    movement: "Amenez le coude gauche et le genou gauche l'un vers l'autre en crunching latéral. Revenez en extension. Répétez.",
    coaching: "Obliques en feu ! Contractez fort au moment du crunch. Gardez les hanches hautes. Expirez au crunch.",
    imageUrl: "IMG_SIDE_PLANK", targetMuscles: "Obliques, fessiers, épaules" },
  { id: 40, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "19:45",
    position: "", movement: "Revenez à 4 pattes.", coaching: "Même séquence à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 41, phase: "workout", isTransition: false, name: "Arm + Leg Opener (Gauche)", duration: 45, startTime: "20:00",
    position: "À quatre pattes, bras gauche et jambe droite tendus.",
    movement: "Ouvrez le bras gauche et la jambe droite pliée sur le côté. Revenez en extension. Répétez.",
    coaching: "Même précision de l'autre côté ! Le tronc est verrouillé. Sentez la différence entre les deux côtés.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Fessiers, épaules, core, stabilisateurs" },
  { id: 42, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "20:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Rainbow Taps gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 43, phase: "workout", isTransition: false, name: "Rainbow Taps (Gauche)", duration: 45, startTime: "21:00",
    position: "À quatre pattes, jambe gauche tendue derrière.",
    movement: "Arc-en-ciel avec la jambe gauche. Tapez à gauche, passez par-dessus, tapez à droite. Répétez.",
    coaching: "Même amplitude ! Comparez les deux côtés. Le mouvement part de la hanche, pas du genou.",
    imageUrl: "IMG_DONKEY_KICK", targetMuscles: "Grand fessier, moyen fessier, core" },
  { id: 44, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "21:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Side Plank gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 45, phase: "workout", isTransition: false, name: "Side Plank Knee to Elbow (Gauche)", duration: 45, startTime: "22:00",
    position: "Planche latérale sur le genou gauche, main gauche au sol, bras droit tendu.",
    movement: "Amenez le coude droit et le genou droit l'un vers l'autre. Revenez en extension. Répétez.",
    coaching: "Même travail de l'autre côté ! Hanches hautes, crunch puissant. Dernières reps de ce bloc !",
    imageUrl: "IMG_SIDE_PLANK", targetMuscles: "Obliques, fessiers, épaules" },
  { id: 46, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "22:45",
    position: "", movement: "Revenez à 4 pattes.", coaching: "Lift Hold et Reach Through.", imageUrl: TRANS, targetMuscles: "" },

  // ─── BLOC 4 : Quadrupédie Avancée (~6 min) ───

  { id: 47, phase: "workout", isTransition: false, name: "Lift Hold → Reach Through (Droite)", duration: 45, startTime: "23:00",
    position: "À quatre pattes, bras droit et jambe gauche tendus en Bird Dog.",
    movement: "Maintenez l'extension, puis passez le bras droit sous le corps en torsion. Revenez en extension. Répétez.",
    coaching: "Stabilité + rotation ! Gardez la jambe tendue pendant que le bras passe dessous. Le bassin ne tourne pas.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Core, épaules, dos, rotateurs" },
  { id: 48, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "23:45",
    position: "", movement: "Changez de côté.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 49, phase: "workout", isTransition: false, name: "Lift Hold → Reach Through (Gauche)", duration: 45, startTime: "24:00",
    position: "À quatre pattes, bras gauche et jambe droite tendus.",
    movement: "Maintenez l'extension, puis passez le bras gauche sous le corps. Revenez en extension. Répétez.",
    coaching: "Même précision ! Sentez la rotation thoracique quand le bras passe dessous. Le dos reste plat.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Core, épaules, dos, rotateurs" },
  { id: 50, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "24:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Quadruped Abduction.", imageUrl: TRANS, targetMuscles: "" },

  { id: 51, phase: "workout", isTransition: false, name: "Quadruped Abduction (Droite)", duration: 45, startTime: "25:00",
    position: "À quatre pattes, genou droit plié à 90°.",
    movement: "Ouvrez le genou droit sur le côté à hauteur de hanche. Maintenez 2 secondes en haut. Redescendez sans toucher le sol.",
    coaching: "Fire Hydrant contrôlé ! Le bassin reste parallèle au sol. Sentez le moyen fessier brûler. Lent et précis.",
    imageUrl: "IMG_FIRE_HYDRANT", targetMuscles: "Moyen fessier, abducteurs, core" },
  { id: 52, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "25:45",
    position: "", movement: "Changez de jambe.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 53, phase: "workout", isTransition: false, name: "Quadruped Abduction (Gauche)", duration: 45, startTime: "26:00",
    position: "À quatre pattes, genou gauche plié à 90°.",
    movement: "Ouvrez le genou gauche sur le côté. Maintenez en haut. Redescendez sans toucher le sol.",
    coaching: "Symétrie ! Même engagement de l'autre côté. Le dos ne bouge pas. Contrôle total.",
    imageUrl: "IMG_FIRE_HYDRANT", targetMuscles: "Moyen fessier, abducteurs, core" },
  { id: 54, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "26:45",
    position: "", movement: "Venez en planche.", coaching: "Séquence Twisted Sit Backs.", imageUrl: TRANS, targetMuscles: "" },

  // ─── BLOC 5 : Plank Sequence (~8 min) ───

  { id: 55, phase: "workout", isTransition: false, name: "Twisted Sit Backs", duration: 45, startTime: "27:00",
    position: "En planche haute, bras tendus.",
    movement: "Depuis la planche, asseyez les hanches vers les talons en tournant le bas du corps sur le côté. Revenez en planche. Alternez les côtés.",
    coaching: "Mouvement fluide ! De la planche au repos torsadé. Les poignets restent sous les épaules. Expirez en vous asseyant.",
    imageUrl: "IMG_PLANK", targetMuscles: "Core, obliques, épaules, quadriceps" },
  { id: 56, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "27:45",
    position: "", movement: "Restez en planche.", coaching: "On ajoute le Leg Lift.", imageUrl: TRANS, targetMuscles: "" },

  { id: 57, phase: "workout", isTransition: false, name: "Twisted Sit Back → Leg Lift (Droite)", duration: 45, startTime: "28:00",
    position: "En planche haute.",
    movement: "Faites le Twisted Sit Back vers la droite. En revenant en planche, levez la jambe droite. Répétez.",
    coaching: "Combo puissant ! Le Sit Back mobilise, le Leg Lift renforce. Gardez les hanches stables au lever de jambe.",
    imageUrl: "IMG_PLANK", targetMuscles: "Core, fessiers, épaules" },
  { id: 58, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "28:45",
    position: "", movement: "Restez en planche.", coaching: "Knee Tuck.", imageUrl: TRANS, targetMuscles: "" },

  { id: 59, phase: "workout", isTransition: false, name: "Twisted Sit Back → Knee Tuck (Droite)", duration: 45, startTime: "29:00",
    position: "En planche haute.",
    movement: "Twisted Sit Back vers la droite. En revenant, amenez le genou droit vers la poitrine. Répétez.",
    coaching: "Le genou vient toucher la poitrine ! Expirez fort au tuck. Le dos reste plat en planche.",
    imageUrl: "IMG_PLANK", targetMuscles: "Core, fléchisseurs de hanche, épaules" },
  { id: 60, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "29:45",
    position: "", movement: "Décompression des poignets.", coaching: "Pause poignets.", imageUrl: TRANS, targetMuscles: "" },

  { id: 61, phase: "workout", isTransition: false, name: "Wrist Decompression", duration: 45, startTime: "30:00",
    position: "À genoux.",
    movement: "Posez les mains au sol doigts vers vous. Roulez doucement sur les poignets. Faites des cercles. Étirez les avant-bras.",
    coaching: "Pause nécessaire pour les poignets ! Prenez soin de vos articulations. Étirez, roulez, relâchez.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Poignets, avant-bras, récupération" },
  { id: 62, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "30:45",
    position: "", movement: "Revenez en planche.", coaching: "Même séquence côté gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 63, phase: "workout", isTransition: false, name: "Twisted Sit Back → Leg Lift (Gauche)", duration: 45, startTime: "31:00",
    position: "En planche haute.",
    movement: "Twisted Sit Back vers la gauche. En revenant, levez la jambe gauche. Répétez.",
    coaching: "Même combo de l'autre côté ! Gardez le rythme. Les hanches restent stables.",
    imageUrl: "IMG_PLANK", targetMuscles: "Core, fessiers, épaules" },
  { id: 64, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "31:45",
    position: "", movement: "Restez en planche.", coaching: "Knee Tuck gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 65, phase: "workout", isTransition: false, name: "Twisted Sit Back → Knee Tuck (Gauche)", duration: 45, startTime: "32:00",
    position: "En planche haute.",
    movement: "Twisted Sit Back vers la gauche. En revenant, amenez le genou gauche vers la poitrine. Répétez.",
    coaching: "Dernière planche de la séquence ! Donnez tout. Expirez fort au tuck. Vous êtes des guerriers !",
    imageUrl: "IMG_PLANK", targetMuscles: "Core, fléchisseurs de hanche, épaules" },
  { id: 66, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "32:45",
    position: "", movement: "Allongez-vous sur le côté droit.", coaching: "Série latérale.", imageUrl: TRANS, targetMuscles: "" },

  // ─── BLOC 6 : Side Lying (~6 min) ───

  { id: 67, phase: "workout", isTransition: false, name: "Side Lift + Leg Lift (Droite)", duration: 45, startTime: "33:00",
    position: "Allongé sur le côté droit, bras droit tendu sous la tête, jambes empilées.",
    movement: "Levez simultanément le buste et la jambe gauche. Redescendez. Répétez.",
    coaching: "Obliques et abducteurs ensemble ! Le mouvement part du centre. Gardez l'alignement. Expirez en montant.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Obliques, moyen fessier, abducteurs" },
  { id: 68, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "33:45",
    position: "", movement: "Restez sur le côté.", coaching: "Roll to Tuck.", imageUrl: TRANS, targetMuscles: "" },

  { id: 69, phase: "workout", isTransition: false, name: "Roll → Tuck (Droite)", duration: 45, startTime: "34:00",
    position: "Sur le côté droit.",
    movement: "Roulez sur le dos en ramenant les genoux vers la poitrine (tuck). Roulez de nouveau sur le côté droit. Répétez.",
    coaching: "Roulement contrôlé ! Utilisez les abdominaux pour initier le mouvement, pas l'élan. Fluide et précis.",
    imageUrl: "IMG_ROLLING_BALL", targetMuscles: "Core, obliques, coordination" },
  { id: 70, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "34:45",
    position: "", movement: "Restez sur le dos.", coaching: "Tuck to V.", imageUrl: TRANS, targetMuscles: "" },

  { id: 71, phase: "workout", isTransition: false, name: "Tuck → V (Droite)", duration: 45, startTime: "35:00",
    position: "Allongé sur le dos, genoux ramenés à la poitrine.",
    movement: "Depuis le tuck, tendez bras et jambes en V-sit. Maintenez 2 secondes. Revenez en tuck. Répétez.",
    coaching: "Le Teaser modifié ! Tendez-vous au maximum. Les bras sont parallèles aux jambes. Équilibre sur les fesses.",
    imageUrl: "IMG_TEASER", targetMuscles: "Grand droit, fléchisseurs de hanche, transverse" },
  { id: 72, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "35:45",
    position: "", movement: "Roulez sur le côté gauche.", coaching: "Même séquence à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 73, phase: "workout", isTransition: false, name: "Side Lift + Leg Lift (Gauche)", duration: 45, startTime: "36:00",
    position: "Allongé sur le côté gauche.",
    movement: "Levez simultanément le buste et la jambe droite. Redescendez. Répétez.",
    coaching: "Même travail de l'autre côté ! Comparez les sensations. Le centre reste engagé.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Obliques, moyen fessier, abducteurs" },
  { id: 74, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "36:45",
    position: "", movement: "Restez sur le côté.", coaching: "Roll to Tuck gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 75, phase: "workout", isTransition: false, name: "Roll → Tuck (Gauche)", duration: 45, startTime: "37:00",
    position: "Sur le côté gauche.",
    movement: "Roulez sur le dos en tuck. Roulez sur le côté gauche. Répétez.",
    coaching: "Même fluidité ! Le corps est une unité qui roule. Pas de mouvements saccadés.",
    imageUrl: "IMG_ROLLING_BALL", targetMuscles: "Core, obliques, coordination" },
  { id: 76, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "37:45",
    position: "", movement: "Restez sur le dos.", coaching: "Tuck to V gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 77, phase: "workout", isTransition: false, name: "Tuck → V (Gauche)", duration: 45, startTime: "38:00",
    position: "Allongé sur le dos, genoux ramenés.",
    movement: "Tuck vers V-sit. Maintenez. Revenez. Répétez.",
    coaching: "Dernière série de V-sit ! Donnez tout. Équilibre, contrôle, puissance du centre.",
    imageUrl: "IMG_TEASER", targetMuscles: "Grand droit, fléchisseurs de hanche, transverse" },
  { id: 78, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "38:45",
    position: "", movement: "Restez sur le dos.", coaching: "Finisher core.", imageUrl: TRANS, targetMuscles: "" },

  // ─── BLOC 7 : Finisher Core (~8 min) ───

  { id: 79, phase: "workout", isTransition: false, name: "Tuck-In → Tuck-Up", duration: 45, startTime: "39:00",
    position: "Allongé sur le dos.",
    movement: "Ramenez les genoux à la poitrine (tuck-in), puis montez en position assise tuck (tuck-up). Redescendez. Répétez.",
    coaching: "Mouvement dynamique ! Utilisez l'élan des abdominaux, pas des bras. Expirez en montant.",
    imageUrl: "IMG_ROLLUP", targetMuscles: "Grand droit, fléchisseurs de hanche" },
  { id: 80, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "39:45",
    position: "", movement: "Restez allongé.", coaching: "Hollow + Circles.", imageUrl: TRANS, targetMuscles: "" },

  { id: 81, phase: "workout", isTransition: false, name: "Hollow + Arm Leg Circles", duration: 45, startTime: "40:00",
    position: "Allongé, jambes vers le plafond, bras tendus.",
    movement: "Depuis les jambes verticales, faites des cercles avec bras et jambes simultanément vers l'extérieur et vers le bas, puis remontez.",
    coaching: "Coordination avancée ! Les cercles sont amples mais contrôlés. Le bas du dos reste plaqué. Respirez !",
    imageUrl: "IMG_LEG_CIRCLE", targetMuscles: "Core, adducteurs, abducteurs, épaules" },
  { id: 82, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "40:45",
    position: "", movement: "Gardez les jambes en l'air.", coaching: "Scissors.", imageUrl: TRANS, targetMuscles: "" },

  { id: 83, phase: "workout", isTransition: false, name: "Scissors Avancés", duration: 45, startTime: "41:00",
    position: "Allongé, épaules décollées, jambes tendues vers le plafond.",
    movement: "Abaissez une jambe vers le sol pendant que l'autre reste haute. Alternez en ciseaux avec une torsion du buste vers la jambe haute.",
    coaching: "Ciseaux avec rotation ! Le buste tourne vers la jambe haute. Mouvement fluide et continu. Le ventre est creux.",
    imageUrl: "IMG_SCISSORS", targetMuscles: "Obliques, grand droit, fléchisseurs de hanche" },
  { id: 84, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "41:45",
    position: "", movement: "Ramenez les genoux.", coaching: "Single Leg Roll-Up.", imageUrl: TRANS, targetMuscles: "" },

  { id: 85, phase: "workout", isTransition: false, name: "Single Leg Roll-Up → Arm Opener", duration: 45, startTime: "42:00",
    position: "Allongé sur le dos.",
    movement: "Montez en Roll-Up en levant une jambe tendue. En haut, ouvrez les bras en croix. Redescendez. Alternez les jambes.",
    coaching: "Roll-Up avancé ! La jambe tendue ajoute un défi d'équilibre. Ouvrez grand les bras en haut. Contrôle total.",
    imageUrl: "IMG_ROLLUP", targetMuscles: "Grand droit, fléchisseurs de hanche, épaules" },
  { id: 86, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "42:45",
    position: "", movement: "Restez allongé.", coaching: "Hollow Swipes.", imageUrl: TRANS, targetMuscles: "" },

  { id: 87, phase: "workout", isTransition: false, name: "Hollow Swipes", duration: 45, startTime: "43:00",
    position: "En position hollow (bras et jambes hovering).",
    movement: "Maintenez le hollow et balayez les bras et jambes de haut en bas en alternance. Mouvement continu.",
    coaching: "Dernier exercice du workout ! Tenez le hollow et balayez. Le bas du dos est collé au sol. Vous êtes des champions !",
    imageUrl: "IMG_HUNDRED", targetMuscles: "Core complet" },
  { id: 88, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "43:45",
    position: "", movement: "Relâchez tout.", coaching: "Tabletop March.", imageUrl: TRANS, targetMuscles: "" },

  { id: 89, phase: "workout", isTransition: false, name: "Tabletop March", duration: 45, startTime: "44:00",
    position: "Assis, mains derrière les hanches, pieds à plat, hanches levées (reverse tabletop).",
    movement: "Maintenez les hanches hautes. Levez un pied du sol en amenant le genou vers la poitrine. Alternez les jambes.",
    coaching: "Reverse tabletop ! Les hanches restent hautes. Marchez en alternant. Sentez les fessiers, les épaules, le core travailler ensemble.",
    imageUrl: "IMG_BRIDGE_PILATES", targetMuscles: "Fessiers, ischio-jambiers, épaules, core" },
  { id: 90, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "44:45",
    position: "", movement: "Allongez-vous sur le ventre.", coaching: "Snow Angel.", imageUrl: TRANS, targetMuscles: "" },

  { id: 91, phase: "workout", isTransition: false, name: "Arch Up Snow Angel", duration: 45, startTime: "45:00",
    position: "Allongé sur le ventre, bras tendus devant, jambes tendues.",
    movement: "Levez la poitrine, les bras et les jambes. Balayez les bras vers les hanches (snow angel) en ouvrant les jambes. Revenez. Répétez.",
    coaching: "Superman + Snow Angel ! Levez tout du sol. Les bras font un grand arc. Les jambes s'ouvrent et se ferment. Puissant !",
    imageUrl: "IMG_SWIMMING", targetMuscles: "Extenseurs du dos, fessiers, dorsaux, deltoïdes" },
  { id: 92, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "45:45",
    position: "", movement: "Reposez-vous sur le ventre.", coaching: "Bravo ! On passe au retour au calme.", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 3 — RETOUR AU CALME (~8 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 93, phase: "cooldown", isTransition: false, name: "Sphinx Cat-Cow", duration: 45, startTime: "46:00",
    position: "Sur le ventre, appui sur les avant-bras (Sphinx).",
    movement: "Arrondissez le dos (cat) puis creusez-le (cow) en restant sur les avant-bras. Mouvement doux et fluide.",
    coaching: "Mobilité douce de la colonne. Laissez le mouvement être naturel et agréable. Respirez profondément.",
    imageUrl: "IMG_SWAN", targetMuscles: "Colonne, abdominaux, mobilité" },
  { id: 94, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "46:45",
    position: "", movement: "Venez à 4 pattes.", coaching: "Torsion thoracique.", imageUrl: TRANS, targetMuscles: "" },

  { id: 95, phase: "cooldown", isTransition: false, name: "Thoracic Twist Hold (Droite)", duration: 45, startTime: "47:00",
    position: "À quatre pattes.",
    movement: "Glissez le bras droit sous le corps, posez l'épaule et la tempe au sol. Maintenez et respirez profondément.",
    coaching: "Étirement profond de la colonne thoracique. Laissez la gravité vous aider. Chaque expiration vous permet de tourner un peu plus.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules" },
  { id: 96, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "47:45",
    position: "", movement: "Revenez à 4 pattes.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 97, phase: "cooldown", isTransition: false, name: "Thoracic Twist Hold (Gauche)", duration: 45, startTime: "48:00",
    position: "À quatre pattes.",
    movement: "Glissez le bras gauche sous le corps, posez l'épaule et la tempe au sol. Maintenez et respirez.",
    coaching: "Même étirement de l'autre côté. Comparez les deux côtés. Respirez dans l'ouverture.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules" },
  { id: 98, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "48:45",
    position: "", movement: "Asseyez-vous sur les talons.", coaching: "Posture de l'enfant.", imageUrl: TRANS, targetMuscles: "" },

  { id: 99, phase: "cooldown", isTransition: false, name: "Posture de l'Enfant (Child's Pose)", duration: 60, startTime: "49:00",
    position: "À genoux, fesses sur les talons, bras tendus devant, front au sol.",
    movement: "Étirez les bras le plus loin possible. Respirez dans le dos. Relâchez tout.",
    coaching: "Position de repos total. Sentez l'étirement dans les épaules, le dos, les hanches. Respirez profondément.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Dos, épaules, hanches, relaxation" },
  { id: 100, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "50:00",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Étirements finaux.", imageUrl: TRANS, targetMuscles: "" },

  { id: 101, phase: "cooldown", isTransition: false, name: "Genoux à la Poitrine", duration: 45, startTime: "50:15",
    position: "Allongé sur le dos, genoux ramenés à la poitrine.",
    movement: "Entourez vos genoux avec les bras. Balancez doucement de droite à gauche.",
    coaching: "Massage du bas du dos. Relâchez la nuque, les épaules. Laissez le poids des jambes étirer le dos.",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Lombaires, relaxation" },
  { id: 102, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "51:00",
    position: "", movement: "Tendez les jambes.", coaching: "Relaxation finale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 103, phase: "cooldown", isTransition: false, name: "Savasana (Relaxation Finale)", duration: 60, startTime: "51:15",
    position: "Allongé sur le dos, bras le long du corps paumes vers le ciel, jambes relâchées.",
    movement: "Ne bougez plus. Fermez les yeux. Relâchez chaque muscle un par un.",
    coaching: "Bravo pour cette séance de Pilates Contemporain ! Vous avez travaillé la force profonde, la coordination et la mobilité. Prenez un moment pour vous féliciter. À très bientôt avec Coach Mimi !",
    imageUrl: "IMG_SAVASANA", targetMuscles: "Relaxation totale" },
];

// Apply real image URLs
exercises.forEach((ex) => {
  if (ex.imageUrl && !ex.imageUrl.startsWith("http")) {
    ex.imageUrl = resolveImageUrl(ex.imageUrl);
  }
});

export const session2: SessionConfig = {
  id: "contemporain",
  title: "Pilates Contemporain",
  subtitle: "Flows & Transitions",
  description: "Séance de Pilates contemporain avec des enchaînements fluides : Twisted Sit Backs, Hollow Body, Side Rolls, Rainbow Taps et séquences de planches créatives.",
  level: "Intermédiaire",
  duration: "~52 min",
  equipment: "Tapis uniquement",
  phaseLabels: {
    warmup: "Échauffement",
    workout: "Pilates Contemporain",
    cooldown: "Retour au calme",
  },
  exercises,
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "orange",
  finishMessage: "Bravo pour cette séance de Pilates Contemporain ! Vous avez travaillé la force profonde, la coordination et la mobilité avec des enchaînements fluides. Pensez à bien vous hydrater. À très bientôt avec Coach Mimi !",
};
