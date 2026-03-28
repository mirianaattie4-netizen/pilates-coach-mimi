/*
 * SÉANCE 3 — Mobilité Pure — 45 min — Tous Niveaux
 * Coach Mimi — Abidjan
 * AUCUN POIDS — Tapis uniquement
 * Focus : mobilité articulaire, souplesse, décompression, respiration
 * Format: 45s tenue / 15s transition
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";

const exercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════
  // PHASE 1 — RESPIRATION & CENTRAGE (~6 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 1, phase: "warmup", isTransition: false, name: "Respiration Diaphragmatique", duration: 45, startTime: "00:00",
    position: "Allongé sur le dos, genoux pliés, une main sur le ventre, une main sur la poitrine.",
    movement: "Inspirez par le nez en gonflant le ventre sous votre main. La poitrine ne bouge pas. Expirez lentement par la bouche en laissant le ventre redescendre.",
    coaching: "On commence par calmer le système nerveux. Respiration abdominale profonde. 4 temps d'inspiration, 6 temps d'expiration.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Diaphragme, transverse, système nerveux" },
  { id: 2, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "00:45",
    position: "", movement: "Gardez la position.", coaching: "On passe à la respiration costale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 3, phase: "warmup", isTransition: false, name: "Respiration Costale 360°", duration: 45, startTime: "01:00",
    position: "Allongé, mains sur les côtes latérales.",
    movement: "Inspirez en sentant les côtes s'ouvrir dans toutes les directions : devant, sur les côtés, et dans le dos. Expirez en sentant les côtes se refermer.",
    coaching: "Imaginez un ballon qui se gonfle à 360° dans votre cage thoracique. Sentez le dos aussi se dilater contre le sol.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Intercostaux, diaphragme, mobilité costale" },
  { id: 4, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "01:45",
    position: "", movement: "Relâchez les bras.", coaching: "Bascule du bassin.", imageUrl: TRANS, targetMuscles: "" },

  { id: 5, phase: "warmup", isTransition: false, name: "Bascule du Bassin (Pelvic Tilt)", duration: 45, startTime: "02:00",
    position: "Allongé, genoux pliés, pieds à plat.",
    movement: "Expirez en basculant le bassin vers le plafond (dos plat). Inspirez en revenant en position neutre (petite courbe). Mouvement très lent.",
    coaching: "Mouvement fondamental. Explorez la mobilité de votre bassin. Chaque répétition est plus fluide que la précédente.",
    imageUrl: "IMG_PELVIC_TILT", targetMuscles: "Bassin, lombaires, transverse" },
  { id: 6, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "02:45",
    position: "", movement: "Gardez la position.", coaching: "Pelvic Clock.", imageUrl: TRANS, targetMuscles: "" },

  { id: 7, phase: "warmup", isTransition: false, name: "Pelvic Clock", duration: 45, startTime: "03:00",
    position: "Allongé, genoux pliés.",
    movement: "Imaginez une horloge sous votre bassin. Roulez vers 12h, 3h, 6h, 9h. Puis faites des cercles complets. Changez de sens.",
    coaching: "Explorez chaque position. Trouvez les zones rigides et travaillez-les en douceur. Cercles de plus en plus grands.",
    imageUrl: "IMG_PELVIC_TILT", targetMuscles: "Bassin, lombaires, mobilité" },
  { id: 8, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "03:45",
    position: "", movement: "Ramenez un genou.", coaching: "Cercles de hanche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 9, phase: "warmup", isTransition: false, name: "Cercles de Hanche (Droite)", duration: 45, startTime: "04:00",
    position: "Allongé, genou droit ramené vers la poitrine, mains sur le genou.",
    movement: "Faites de grands cercles avec le genou droit dans les deux sens. Explorez toute l'amplitude de la hanche.",
    coaching: "Lubrifiez l'articulation ! Grands cercles fluides. Relâchez la cuisse, laissez les mains guider. Trouvez les points de tension.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Hanche, capsule articulaire, fessiers" },
  { id: 10, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "04:45",
    position: "", movement: "Changez de jambe.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 11, phase: "warmup", isTransition: false, name: "Cercles de Hanche (Gauche)", duration: 45, startTime: "05:00",
    position: "Allongé, genou gauche ramené vers la poitrine.",
    movement: "Grands cercles avec le genou gauche dans les deux sens.",
    coaching: "Comparez les deux côtés. Le côté plus raide a besoin de plus d'attention. Respirez dans le mouvement.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Hanche, capsule articulaire, fessiers" },
  { id: 12, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "05:45",
    position: "", movement: "Retournez-vous à 4 pattes.", coaching: "Mobilité de la colonne.", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 2 — MOBILITÉ ARTICULAIRE (~30 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 13, phase: "workout", isTransition: false, name: "Cat-Cow Lent", duration: 45, startTime: "06:00",
    position: "À quatre pattes, mains sous les épaules, genoux sous les hanches.",
    movement: "Inspirez en creusant le dos très lentement (vache). Expirez en arrondissant très lentement (chat). Sentez chaque vertèbre bouger.",
    coaching: "Ralentissez ! Chaque vertèbre bouge individuellement. Du sacrum jusqu'à la nuque. Prenez 8 secondes pour chaque mouvement.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Colonne vertébrale complète" },
  { id: 14, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "06:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Ondulations latérales.", imageUrl: TRANS, targetMuscles: "" },

  { id: 15, phase: "workout", isTransition: false, name: "Ondulations Latérales", duration: 45, startTime: "07:00",
    position: "À quatre pattes.",
    movement: "Regardez votre hanche droite en courbant le corps en C. Revenez au centre. Regardez la hanche gauche. Puis faites des ondulations fluides.",
    coaching: "La colonne bouge aussi latéralement ! Explorez ce plan de mouvement souvent oublié. Fluide comme un poisson.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Colonne latérale, obliques, intercostaux" },
  { id: 16, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "07:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Thread the Needle.", imageUrl: TRANS, targetMuscles: "" },

  { id: 17, phase: "workout", isTransition: false, name: "Thread the Needle (Droite)", duration: 45, startTime: "08:00",
    position: "À quatre pattes.",
    movement: "Glissez le bras droit sous le corps, posez l'épaule et la tempe au sol. Maintenez et respirez. Puis ouvrez le bras droit vers le plafond.",
    coaching: "Rotation thoracique ! En bas : respirez dans l'étirement. En haut : ouvrez la poitrine vers le plafond. Alternez.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules" },
  { id: 18, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "08:45",
    position: "", movement: "Revenez à 4 pattes.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 19, phase: "workout", isTransition: false, name: "Thread the Needle (Gauche)", duration: 45, startTime: "09:00",
    position: "À quatre pattes.",
    movement: "Glissez le bras gauche sous le corps. Maintenez. Puis ouvrez vers le plafond. Alternez.",
    coaching: "Même ouverture de l'autre côté. Comparez les deux côtés. Le côté plus raide reçoit plus d'attention.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules" },
  { id: 20, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "09:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Cercles de hanches à 4 pattes.", imageUrl: TRANS, targetMuscles: "" },

  { id: 21, phase: "workout", isTransition: false, name: "Cercles de Hanches à 4 Pattes", duration: 45, startTime: "10:00",
    position: "À quatre pattes.",
    movement: "Faites de grands cercles avec le genou droit : avant, côté, arrière. 4 dans chaque sens. Puis changez de jambe.",
    coaching: "Mobilité de la hanche en charge ! Le haut du corps reste stable. Grands cercles fluides.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Hanches, fessiers, mobilité" },
  { id: 22, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "10:45",
    position: "", movement: "Asseyez-vous.", coaching: "90/90 Stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 23, phase: "workout", isTransition: false, name: "90/90 Stretch (Droite)", duration: 45, startTime: "11:00",
    position: "Assis, jambe droite devant pliée à 90°, jambe gauche derrière pliée à 90°.",
    movement: "Penchez le buste vers l'avant au-dessus du genou droit. Maintenez. Puis redressez-vous et tournez le buste vers la droite.",
    coaching: "Position 90/90 fondamentale pour la mobilité des hanches ! Gardez les deux fesses au sol si possible. Respirez dans l'étirement.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Hanches, rotateurs internes/externes, fessiers" },
  { id: 24, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "11:45",
    position: "", movement: "Changez de côté.", coaching: "90/90 gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 25, phase: "workout", isTransition: false, name: "90/90 Stretch (Gauche)", duration: 45, startTime: "12:00",
    position: "Assis, jambe gauche devant pliée à 90°, jambe droite derrière pliée à 90°.",
    movement: "Penchez vers l'avant au-dessus du genou gauche. Maintenez. Puis tournez vers la gauche.",
    coaching: "Même travail de l'autre côté. Sentez la différence entre les deux hanches. Respirez profondément.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Hanches, rotateurs internes/externes, fessiers" },
  { id: 26, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "12:45",
    position: "", movement: "Restez assis.", coaching: "90/90 Transitions.", imageUrl: TRANS, targetMuscles: "" },

  { id: 27, phase: "workout", isTransition: false, name: "90/90 Transitions (Windshield Wipers)", duration: 45, startTime: "13:00",
    position: "Assis, pieds écartés largeur des épaules, genoux pliés.",
    movement: "Laissez tomber les deux genoux vers la droite (90/90 droite), puis vers la gauche (90/90 gauche). Mouvement fluide comme des essuie-glaces.",
    coaching: "Transitions fluides ! Les genoux tombent d'un côté à l'autre. Le buste reste droit. Mobilité interne/externe des hanches.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Hanches, rotateurs, adducteurs" },
  { id: 28, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "13:45",
    position: "", movement: "Tendez les jambes devant.", coaching: "Spine Stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 29, phase: "workout", isTransition: false, name: "Spine Stretch Forward", duration: 45, startTime: "14:00",
    position: "Assis, jambes tendues et écartées, bras tendus devant.",
    movement: "Enroulez vers l'avant vertèbre par vertèbre. Étirez-vous au maximum. Déroulez pour remonter.",
    coaching: "Enroulement de la colonne ! Chaque vertèbre se plie une à une. Le nombril recule quand vous avancez. Grandissez en remontant.",
    imageUrl: "IMG_SPINE_STRETCH", targetMuscles: "Colonne, ischio-jambiers" },
  { id: 30, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "14:45",
    position: "", movement: "Gardez les jambes tendues.", coaching: "Saw.", imageUrl: TRANS, targetMuscles: "" },

  { id: 31, phase: "workout", isTransition: false, name: "Saw (La Scie)", duration: 45, startTime: "15:00",
    position: "Assis, jambes écartées, bras en croix.",
    movement: "Tournez vers la droite et penchez-vous vers le pied droit, main gauche vers le petit orteil droit. Remontez. Alternez.",
    coaching: "Rotation + flexion ! Sciez le petit orteil avec la main opposée. Les fesses restent au sol. Grandissez entre chaque rotation.",
    imageUrl: "IMG_SAW", targetMuscles: "Obliques, ischio-jambiers, colonne thoracique" },
  { id: 32, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "15:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Pont articulé.", imageUrl: TRANS, targetMuscles: "" },

  { id: 33, phase: "workout", isTransition: false, name: "Pont Articulé Lent", duration: 45, startTime: "16:00",
    position: "Allongé, genoux pliés, pieds à plat.",
    movement: "Déroulez la colonne vertèbre par vertèbre en montant. Maintenez en haut. Redescendez vertèbre par vertèbre.",
    coaching: "Prenez 10 secondes pour monter, 10 secondes pour descendre. Sentez chaque vertèbre se décoller et se reposer.",
    imageUrl: "IMG_BRIDGE_PILATES", targetMuscles: "Colonne, fessiers, mobilité vertébrale" },
  { id: 34, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "16:45",
    position: "", movement: "Ramenez les genoux.", coaching: "Torsion allongée.", imageUrl: TRANS, targetMuscles: "" },

  { id: 35, phase: "workout", isTransition: false, name: "Torsion Allongée (Droite)", duration: 45, startTime: "17:00",
    position: "Allongé, bras en croix, genou droit ramené vers la poitrine.",
    movement: "Laissez le genou droit tomber vers la gauche. Tournez la tête vers la droite. Maintenez et respirez.",
    coaching: "Étirement profond ! Les deux épaules restent au sol. Laissez la gravité faire le travail. Chaque expiration vous permet de tourner plus.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Lombaires, obliques, colonne" },
  { id: 36, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "17:45",
    position: "", movement: "Revenez au centre.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 37, phase: "workout", isTransition: false, name: "Torsion Allongée (Gauche)", duration: 45, startTime: "18:00",
    position: "Allongé, bras en croix, genou gauche ramené.",
    movement: "Laissez le genou gauche tomber vers la droite. Tournez la tête vers la gauche. Maintenez.",
    coaching: "Même étirement de l'autre côté. Relâchez tout. Respirez profondément dans la torsion.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Lombaires, obliques, colonne" },
  { id: 38, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "18:45",
    position: "", movement: "Ramenez les genoux.", coaching: "Happy Baby.", imageUrl: TRANS, targetMuscles: "" },

  { id: 39, phase: "workout", isTransition: false, name: "Happy Baby", duration: 45, startTime: "19:00",
    position: "Allongé, genoux ramenés vers les aisselles, mains sur les pieds.",
    movement: "Attrapez l'extérieur de vos pieds. Tirez doucement les genoux vers le sol. Balancez de droite à gauche.",
    coaching: "Comme un bébé heureux ! Ouvrez les hanches. Balancez doucement. Relâchez le bas du dos. Souriez !",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Hanches, adducteurs, bas du dos" },
  { id: 40, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "19:45",
    position: "", movement: "Tendez les jambes.", coaching: "Single Leg Circle.", imageUrl: TRANS, targetMuscles: "" },

  { id: 41, phase: "workout", isTransition: false, name: "Single Leg Circle (Droite)", duration: 45, startTime: "20:00",
    position: "Allongé, jambe droite tendue vers le plafond, jambe gauche tendue au sol.",
    movement: "Faites des cercles avec la jambe droite : croisez vers la gauche, descendez, ouvrez, remontez. 5 dans chaque sens.",
    coaching: "Cercles contrôlés ! Le bassin reste stable au sol. La jambe dessine un cercle parfait. Changez de sens.",
    imageUrl: "IMG_LEG_CIRCLE", targetMuscles: "Hanches, fléchisseurs, stabilisateurs" },
  { id: 42, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "20:45",
    position: "", movement: "Changez de jambe.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 43, phase: "workout", isTransition: false, name: "Single Leg Circle (Gauche)", duration: 45, startTime: "21:00",
    position: "Allongé, jambe gauche tendue vers le plafond.",
    movement: "Cercles avec la jambe gauche dans les deux sens.",
    coaching: "Même précision ! Le bassin est ancré. La jambe est libre. Comparez les deux côtés.",
    imageUrl: "IMG_LEG_CIRCLE", targetMuscles: "Hanches, fléchisseurs, stabilisateurs" },
  { id: 44, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "21:45",
    position: "", movement: "Ramenez les genoux.", coaching: "Figure 4.", imageUrl: TRANS, targetMuscles: "" },

  { id: 45, phase: "workout", isTransition: false, name: "Figure 4 Stretch (Droite)", duration: 45, startTime: "22:00",
    position: "Allongé, cheville droite sur le genou gauche.",
    movement: "Attrapez la cuisse gauche et tirez vers la poitrine. Poussez le genou droit vers l'extérieur avec le coude.",
    coaching: "Étirement du piriforme ! Respirez dans la hanche. Chaque expiration vous permet d'aller un peu plus loin.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Fessiers, piriforme, rotateurs externes" },
  { id: 46, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "22:45",
    position: "", movement: "Changez de côté.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 47, phase: "workout", isTransition: false, name: "Figure 4 Stretch (Gauche)", duration: 45, startTime: "23:00",
    position: "Allongé, cheville gauche sur le genou droit.",
    movement: "Attrapez la cuisse droite et tirez vers la poitrine.",
    coaching: "Même étirement de l'autre côté. Relâchez la mâchoire, les épaules. Respirez.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Fessiers, piriforme, rotateurs externes" },
  { id: 48, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "23:45",
    position: "", movement: "Retournez-vous à 4 pattes.", coaching: "Mobilité des épaules.", imageUrl: TRANS, targetMuscles: "" },

  { id: 49, phase: "workout", isTransition: false, name: "Cercles d'Épaules à 4 Pattes", duration: 45, startTime: "24:00",
    position: "À quatre pattes.",
    movement: "Faites des cercles avec l'épaule droite : vers l'avant, en haut, vers l'arrière, en bas. 5 dans chaque sens. Changez d'épaule.",
    coaching: "Mobilité scapulaire ! Grands cercles fluides. Sentez l'omoplate glisser sur les côtes. Relâchez la tension.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Épaules, omoplates, trapèzes" },
  { id: 50, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "24:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Décompression des poignets.", imageUrl: TRANS, targetMuscles: "" },

  { id: 51, phase: "workout", isTransition: false, name: "Décompression des Poignets", duration: 45, startTime: "25:00",
    position: "À quatre pattes.",
    movement: "Posez les mains doigts vers vous. Roulez doucement. Puis doigts vers l'extérieur. Faites des cercles. Étirez les avant-bras.",
    coaching: "Souvent négligés ! Les poignets ont besoin de mobilité. Soyez doux. Explorez toutes les directions.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Poignets, avant-bras" },
  { id: 52, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "25:45",
    position: "", movement: "Asseyez-vous.", coaching: "Mobilité cervicale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 53, phase: "workout", isTransition: false, name: "Mobilité Cervicale", duration: 45, startTime: "26:00",
    position: "Assis en tailleur, dos droit.",
    movement: "Tournez la tête à droite, maintenez. À gauche, maintenez. Inclinez l'oreille vers l'épaule droite, puis gauche. Demi-cercles vers l'avant.",
    coaching: "Douceur ! La nuque est fragile. Mouvements lents et contrôlés. Pas de cercles complets vers l'arrière. Respirez.",
    imageUrl: "IMG_SPINE_STRETCH", targetMuscles: "Cervicales, trapèzes, SCM" },
  { id: 54, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "26:45",
    position: "", movement: "Restez assis.", coaching: "Rotation thoracique assise.", imageUrl: TRANS, targetMuscles: "" },

  { id: 55, phase: "workout", isTransition: false, name: "Rotation Thoracique Assise", duration: 45, startTime: "27:00",
    position: "Assis en tailleur, bras croisés sur la poitrine.",
    movement: "Tournez le buste vers la droite avec 2 petites pulsations. Revenez. Tournez vers la gauche. Alternez.",
    coaching: "Rotation pure ! Le bassin ne bouge pas. Seul le buste tourne. Grandissez à chaque rotation. Expirez en tournant.",
    imageUrl: "IMG_SPINE_TWIST", targetMuscles: "Colonne thoracique, obliques" },
  { id: 56, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "27:45",
    position: "", movement: "Tendez les jambes.", coaching: "Flexion avant.", imageUrl: TRANS, targetMuscles: "" },

  { id: 57, phase: "workout", isTransition: false, name: "Flexion Avant Assise", duration: 45, startTime: "28:00",
    position: "Assis, jambes tendues et serrées devant, pieds flex.",
    movement: "Enroulez vers l'avant en tendant les bras vers les pieds. Maintenez et respirez. Chaque expiration vous permet d'aller plus loin.",
    coaching: "Étirement des ischio-jambiers et de toute la chaîne postérieure. Ne forcez pas ! Laissez la gravité et la respiration faire le travail.",
    imageUrl: "IMG_SPINE_STRETCH", targetMuscles: "Ischio-jambiers, dos, colonne" },
  { id: 58, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "28:45",
    position: "", movement: "Écartez les jambes.", coaching: "Straddle stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 59, phase: "workout", isTransition: false, name: "Straddle Stretch (Grand Écart Facial)", duration: 45, startTime: "29:00",
    position: "Assis, jambes écartées au maximum, pieds flex.",
    movement: "Penchez-vous vers la jambe droite (15s), vers le centre (15s), vers la jambe gauche (15s). Maintenez chaque position.",
    coaching: "Ouverture des adducteurs ! Ne rebondissez pas. Maintenez et respirez. Chaque côté puis le centre.",
    imageUrl: "IMG_SPINE_STRETCH", targetMuscles: "Adducteurs, ischio-jambiers, dos" },
  { id: 60, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "29:45",
    position: "", movement: "Ramenez les jambes.", coaching: "Pigeon.", imageUrl: TRANS, targetMuscles: "" },

  { id: 61, phase: "workout", isTransition: false, name: "Pigeon (Droite)", duration: 45, startTime: "30:00",
    position: "Genou droit devant plié, jambe gauche tendue derrière.",
    movement: "Descendez le buste vers le sol. Posez les avant-bras ou le front au sol. Respirez dans la hanche.",
    coaching: "Étirement profond du fessier et du piriforme. Si c'est trop intense, rapprochez le pied du bassin. Relâchez tout.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Fessiers, piriforme, fléchisseurs de hanche" },
  { id: 62, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "30:45",
    position: "", movement: "Changez de côté.", coaching: "Pigeon gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 63, phase: "workout", isTransition: false, name: "Pigeon (Gauche)", duration: 45, startTime: "31:00",
    position: "Genou gauche devant plié, jambe droite tendue derrière.",
    movement: "Descendez le buste vers le sol. Respirez dans la hanche gauche.",
    coaching: "Même étirement de l'autre côté. Laissez la gravité vous aider. Chaque expiration vous permet de descendre plus.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Fessiers, piriforme, fléchisseurs de hanche" },
  { id: 64, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "31:45",
    position: "", movement: "Revenez à 4 pattes.", coaching: "Étirement du psoas.", imageUrl: TRANS, targetMuscles: "" },

  { id: 65, phase: "workout", isTransition: false, name: "Étirement du Psoas (Droite)", duration: 45, startTime: "32:00",
    position: "Fente basse, genou gauche au sol, pied droit devant.",
    movement: "Poussez les hanches vers l'avant en gardant le buste droit. Levez le bras gauche vers le plafond pour intensifier.",
    coaching: "Le psoas est le muscle le plus raccourci par la position assise ! Poussez les hanches vers l'avant. Sentez l'étirement profond.",
    imageUrl: "IMG_REVERSE_LUNGE", targetMuscles: "Psoas, fléchisseurs de hanche, quadriceps" },
  { id: 66, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "32:45",
    position: "", movement: "Changez de côté.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 67, phase: "workout", isTransition: false, name: "Étirement du Psoas (Gauche)", duration: 45, startTime: "33:00",
    position: "Fente basse, genou droit au sol, pied gauche devant.",
    movement: "Poussez les hanches vers l'avant. Levez le bras droit.",
    coaching: "Même étirement de l'autre côté. Respirez profondément. Sentez l'ouverture de la hanche.",
    imageUrl: "IMG_REVERSE_LUNGE", targetMuscles: "Psoas, fléchisseurs de hanche, quadriceps" },
  { id: 68, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "33:45",
    position: "", movement: "Revenez à 4 pattes.", coaching: "Posture de l'enfant.", imageUrl: TRANS, targetMuscles: "" },

  { id: 69, phase: "workout", isTransition: false, name: "Posture de l'Enfant Élargie", duration: 45, startTime: "34:00",
    position: "À genoux, genoux écartés, gros orteils joints, fesses sur les talons, bras tendus devant.",
    movement: "Étirez les bras le plus loin possible. Marchez les mains vers la droite (15s), puis vers la gauche (15s), puis au centre.",
    coaching: "Étirement latéral en posture de l'enfant ! Sentez l'ouverture des côtes et des flancs. Respirez dans le côté étiré.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Dos, flancs, épaules, hanches" },
  { id: 70, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "34:45",
    position: "", movement: "Allongez-vous sur le ventre.", coaching: "Sphinx.", imageUrl: TRANS, targetMuscles: "" },

  { id: 71, phase: "workout", isTransition: false, name: "Sphinx + Extension", duration: 45, startTime: "35:00",
    position: "Allongé sur le ventre, appui sur les avant-bras, coudes sous les épaules.",
    movement: "Maintenez le Sphinx. Puis poussez sur les mains pour monter en Cobra léger. Redescendez en Sphinx. Alternez.",
    coaching: "Extension douce de la colonne ! Ne forcez pas. Laissez le bas du dos s'ouvrir naturellement. Les épaules sont loin des oreilles.",
    imageUrl: "IMG_SWAN", targetMuscles: "Colonne lombaire, abdominaux, extension" },
  { id: 72, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "35:45",
    position: "", movement: "Revenez à 4 pattes.", coaching: "Downward Dog.", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 3 — RETOUR AU CALME & RELAXATION (~8 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 73, phase: "cooldown", isTransition: false, name: "Downward Dog (Chien Tête en Bas)", duration: 45, startTime: "36:00",
    position: "Mains au sol, pieds au sol, fesses vers le plafond, corps en V inversé.",
    movement: "Pédalez les pieds en alternance. Puis maintenez. Poussez les talons vers le sol. Poussez le sol avec les mains.",
    coaching: "Étirement de toute la chaîne postérieure ! Pédalez d'abord pour échauffer. Puis maintenez. Les talons n'ont pas besoin de toucher le sol.",
    imageUrl: "IMG_PLANK", targetMuscles: "Ischio-jambiers, mollets, épaules, dos" },
  { id: 74, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "36:45",
    position: "", movement: "Marchez les pieds vers les mains.", coaching: "Ragdoll.", imageUrl: TRANS, targetMuscles: "" },

  { id: 75, phase: "cooldown", isTransition: false, name: "Ragdoll (Flexion Debout)", duration: 45, startTime: "37:00",
    position: "Debout, pieds largeur des hanches, buste penché vers l'avant, bras relâchés.",
    movement: "Laissez le haut du corps pendre. Attrapez les coudes opposés. Balancez doucement. Relâchez la nuque.",
    coaching: "Décompression de la colonne ! Laissez la gravité étirer votre dos. Pliez les genoux si nécessaire. Balancez doucement.",
    imageUrl: "IMG_RDL", targetMuscles: "Colonne, ischio-jambiers, décompression" },
  { id: 76, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "37:45",
    position: "", movement: "Déroulez pour vous relever.", coaching: "Étirement latéral debout.", imageUrl: TRANS, targetMuscles: "" },

  { id: 77, phase: "cooldown", isTransition: false, name: "Étirement Latéral Debout", duration: 45, startTime: "38:00",
    position: "Debout, pieds joints, bras au-dessus de la tête.",
    movement: "Penchez-vous vers la droite en gardant les bras tendus (15s). Revenez au centre. Penchez vers la gauche (15s). Revenez.",
    coaching: "Étirement des flancs et des intercostaux. Respirez dans le côté étiré. Gardez les deux pieds au sol.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Flancs, intercostaux, obliques" },
  { id: 78, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "38:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Genoux à la poitrine.", imageUrl: TRANS, targetMuscles: "" },

  { id: 79, phase: "cooldown", isTransition: false, name: "Genoux à la Poitrine", duration: 45, startTime: "39:00",
    position: "Allongé, genoux ramenés à la poitrine.",
    movement: "Entourez vos genoux. Balancez de droite à gauche. Respirez profondément.",
    coaching: "Massage du bas du dos. Relâchez tout. Laissez le poids des jambes étirer naturellement.",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Lombaires, relaxation" },
  { id: 80, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "39:45",
    position: "", movement: "Tendez les jambes.", coaching: "Full Body Stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 81, phase: "cooldown", isTransition: false, name: "Full Body Stretch", duration: 45, startTime: "40:00",
    position: "Allongé, bras au-dessus de la tête, jambes tendues.",
    movement: "Étirez-vous au maximum : doigts vers le mur derrière, orteils vers le mur devant. Puis relâchez tout.",
    coaching: "Étirez-vous comme au réveil ! Grandissez-vous au maximum. Puis relâchez complètement.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Full body, décompression" },
  { id: 82, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "40:45",
    position: "", movement: "Relâchez tout.", coaching: "Savasana.", imageUrl: TRANS, targetMuscles: "" },

  { id: 83, phase: "cooldown", isTransition: false, name: "Savasana (Relaxation Finale)", duration: 120, startTime: "41:00",
    position: "Allongé sur le dos, bras le long du corps paumes vers le ciel, jambes relâchées.",
    movement: "Ne bougez plus. Fermez les yeux. Scannez votre corps de la tête aux pieds. Relâchez chaque muscle. Laissez-vous fondre dans le tapis.",
    coaching: "Bravo pour cette séance de mobilité ! Votre corps vous remercie. Chaque articulation est plus libre, chaque muscle plus détendu. Prenez ce moment pour vous. À très bientôt avec Coach Mimi !",
    imageUrl: "IMG_SAVASANA", targetMuscles: "Relaxation totale, récupération" },
];

// Apply real image URLs
exercises.forEach((ex) => {
  if (ex.imageUrl && !ex.imageUrl.startsWith("http")) {
    ex.imageUrl = resolveImageUrl(ex.imageUrl);
  }
});

export const session3: SessionConfig = {
  id: "mobilite",
  title: "Mobilité Pure",
  subtitle: "Souplesse & Décompression",
  description: "Séance dédiée à la mobilité articulaire, la souplesse et la décompression. Idéale en récupération active ou pour améliorer l'amplitude de mouvement.",
  level: "Tous niveaux",
  duration: "~43 min",
  equipment: "Tapis uniquement",
  phaseLabels: {
    warmup: "Respiration & Centrage",
    workout: "Mobilité Articulaire",
    cooldown: "Relaxation",
  },
  exercises,
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "cyan",
  finishMessage: "Bravo pour cette séance de mobilité ! Votre corps vous remercie. Chaque articulation est plus libre, chaque muscle plus détendu. Pensez à bien vous hydrater. À très bientôt avec Coach Mimi !",
};
