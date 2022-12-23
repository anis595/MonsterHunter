const bouton1 = '<img class="inputCombo" src= "./public/click/left click.png">';
const bouton2 =
  '<img class="inputCombo" src = "./public/click/right click.png"">';
const bouton3 = '<img class="inputCombo" src="./public/click/space.png">';
const bouton4 = '<img class="inputCombo" src="./public/click/mb4.png">';
const bouton5 = '<img class="inputCombo" src="./public/click/molette.png">';
const bouton6 = '<img class="inputCombo" src="./public/click/pngegg.png">';
const bouton7 = '<img class="inputCombo" src="./public/click/mb5.png">';
const bouton8 = '<img class="inputCombo" src="./public/click/ctrl.png">';
const bouton9 = '<img class="inputCombo" src="./public/click/shift.png">';

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalData = {
  "charge-blade": {
    title: "CHARGE BLADE",
    paragraph:
      "Une arme complexe avec une forme d'épée et de bouclier et une forme de hache qui utilisent toutes deux un système de fiole.La forme de l'épée et du bouclier établit un équilibre entre mobilité, défense et attaque.La forme de la hache remplace la défense par des attaques puissantes, une bonne portée et le bonus de la fiole.La forme d'épée et de bouclier accumule une charge qui peut être stockée dans des fioles et libérée sous forme de hache.",

    image: "./public/image/arme mhr/Accel_Axe_Icon_White.webp",
    combo: [
      {
        name: "Weak Slash",
        input: `${bouton1}`,
        description: "Attaque simple ...",
      },
      {
        name: "Forward Slash",
        description: "Forward Slash :)",
        input: `${bouton1}+${bouton2}`,
      },
      {
        name: "Morph Slash",
        description: "Morph Slash",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Fade Slash",
        description: "dash en avant avec les deux lames",
        input: `${bouton6}+${bouton2}`,
      },
      {
        name: "Charge",
        description: "Charge",
        input: `${bouton4}+${bouton2}`,
      },
      {
        name: "Guard",
        description: "Guard",
        input: `${bouton4}`,
      },
      {
        name: "Charged Double Slash",
        description: "Charged Double Slash",
        input: `Maintenir ${bouton2}`,
      },
      {
        name: "Counter Peak Performance",
        description: "Counter Peak Performance",
        input: `${bouton4}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/Bcv1ltU9z1s",
  },
  bow: {
    title: "BOW",
    paragraph:
      "De toutes les armes de Monster Hunter Rise , l'arc est un choix assez stellaire pour un certain nombre de raisons. C'est excellent pour infliger des dégâts, c'est fantastique pour apprendre à aborder les combats en toute sécurité, et c'est l'un des plus efficaces pour infliger des altérations d'état dans le jeu.",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Aim",
        input: `${bouton2}`,
        description: "Aim",
      },
      {
        name: "Shoot",
        description: "Shoot",
        input: `${bouton1}`,
      },
      {
        name: "Melee Attack",
        description: "Melee Attack",
        input: `${bouton4}`,
      },
      {
        name: "Dragon Piercer",
        description: "Dragon Piercer",
        input: `${bouton4}+${bouton7}`,
      },
      {
        name: "Select Coating",
        description: "Select Coating",
        input: `Hold ${bouton8}+${bouton4}+${bouton7}`,
      },
      {
        name: "Load/Unload Coating",
        description: "Load/Unload Coating",
        input: `${bouton7}`,
      },
      {
        name: "Herculean Draw",
        description: "Herculean Draw",
        input: `${bouton9}+${bouton4}`,
      },
      {
        name: "Focus Shot",
        description: "Focus Shot",
        input: `${bouton9}+${bouton7}`,
      },
    ],
    link: "https://www.youtube.com/embed/WyB98LUKCtI",
  },

  dualBlade: {
    title: "DUAL BLADE",
    paragraph:
      "Des lames qui livrent un assaut de tranches en succession rapide. Activez le mode démon pour danser des anneaux mortels autour de vos ennemis en échange d'endurance.",
    image: "./public/image/arme mhr/Dual_Blades_Icon_White.webp",
    combo: [
      {
        name: "Double Slash",
        input: `${bouton1}`,
        description: "Double Slash",
      },
      {
        name: "Double Slash Return Stroke",
        description: "Double Slash Return Stroke",
        input: `${bouton1}+${bouton1}`,
      },
      {
        name: "Circle Slash",
        description: "Circle Slash",
        input: `${bouton1}+${bouton1}+${bouton1} (X3)`,
      },
      {
        name: "Lunging Strike",
        description: "Lunging Strike",
        input: `${bouton2}`,
      },
      {
        name: "Roundslash",
        description: "Roundslash",
        input: `${bouton2}+${bouton2}`,
      },
      {
        name: "Demon Mode",
        description: "Demon Mode",
        input: `${bouton4}`,
      },
      {
        name: "Silkbind Attack: Piercing Bind",
        description: "Silkbind Attack: Piercing Bind",
        input: `${bouton5}+${bouton1}`,
      },
      {
        name: "Silkbind Attack: Shrouded Vault",
        description: "Silkbind Attack: Shrouded Vault",
        input: `${bouton5}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/Q-GDmnb37RA",
  },
  greatSword: {
    title: "GREAT SWORD",
    paragraph:
      "Cette lame massive se fend en un large arc avec une puissance terrifiante et peut même être utilisée pour se protéger en cas de besoin. La puissance d'un Charged Slash complet est écrasante.",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Overhead Slash",
        description: "Overhead Slash",
        input: `${bouton1}`,
      },
      {
        name: "Charged Slash",
        description: "Charged Slash",
        input: `Hold ${bouton1}`,
      },
      {
        name: "Wide Sweep",
        description: "Wide Sweep",
        input: `${bouton2}`,
      },
      {
        name: "Rising Slash",
        description: "Rising Slash",
        input: `${bouton1}+${bouton2}`,
      },
      {
        name: "Wide Sweep",
        description: "Wide Sweep",
        input: `${bouton2}`,
      },
      {
        name: "Tackle",
        description: "Tackle",
        input: `${bouton2}`,
      },
      {
        name: "Guard",
        description: "Guard",
        input: `${bouton4}`,
      },
      {
        name: "Plunging Thrust",
        description: "Plunging Thrust",
        input: `En l'air${bouton4}`,
      },
      {
        name: "Hunting Edge",
        description: "Hunting Edge",
        input: `${bouton5}+${bouton1}`,
      },
      {
        name: "Power Sheathe",
        description: "Power Sheathe",
        input: `${bouton5}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/ebGXinjh5YE",
  },
  gunLance: {
    title: "GUN LANCE",
    paragraph:
      "Une lance robuste fixée avec un canon. Faites pression sur votre proie avec une multitude de bombardements, puis infligez un coup super puissant au bon moment.",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Lateral Thrust",
        input: `${bouton1}`,
        description: "Lateral Thrust",
      },
      {
        name: "Shelling",
        description: "Shelling",
        input: `${bouton2}`,
      },
      {
        name: "Charged Shelling",
        description: "Charged Shelling",
        input: `Hold ${bouton2}`,
      },
      {
        name: "Rising Slash",
        description: "Rising Slash",
        input: `${bouton1}+${bouton2}`,
      },
      {
        name: "Overhead Smash",
        description: "dash en avant avec les deux lames",
        input: `After Rising Slash,${bouton1}`,
      },
      {
        name: "Wide Sweep",
        description: "Wide Sweep",
        input: `After Overhead Smash,${bouton1}`,
      },
      {
        name: "Guard",
        description: "Guard",
        input: `${bouton4}`,
      },
      {
        name: "Guard Thrust",
        description: "Guard Thrust",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Reload",
        description: "Reload",
        input: `${bouton4}+${bouton2}`,
      },
      {
        name: "Quick Reload",
        description: "Quick Reload",
        input: `After an attack,${bouton4}+${bouton2}`,
      },
      {
        name: "Backstep",
        description: "Backstep",
        input: `${bouton3}`,
      },
      {
        name: "Burst Fire",
        description: "Burst Fire",
        input: `After Overhead Smash,${bouton1} |After Hail Cutter,${bouton1} `,
      },
      {
        name: "Wyvern's Fire",
        description: "Wyvern's Fire",
        input: `${bouton4}+${bouton1}+${bouton2}`,
      },
      {
        name: "Hail Cutter",
        description: "Hail Cutter",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Guard Edge",
        description: "Wyvern's Fire",
        input: `${bouton4}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/OrgDshm845c",
  },
  hammer: {
    title: "HAMMER",
    paragraph:
      "Une arme contondante qui frappe fort mais n'entrave pas la mobilité. Une claque sur la tête peut étourdir les ennemis. Possède de puissantes attaques de charge et une variété de manœuvres.",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Overhead Smash",
        input: `${bouton1}`,
        description: "Overhead Smash",
      },
      {
        name: "Upswing",
        description: "Upswing",
        input: `${bouton1}+${bouton1}+${bouton1}`,
      },
      {
        name: "Side Smash",
        description: "Side Smash",
        input: `${bouton2}`,
      },
      {
        name: "Charge",
        description: "Charge",
        input: `${bouton4}`,
      },
      {
        name: "Charged Side Blow",
        description: "Charged Side Blow",
        input: `Release while Charge Lv 1 ${bouton4}`,
      },
      {
        name: "Charged Upswing",
        description: "Charged Upswing",
        input: `Release while Charge Lv 2 ${bouton4}`,
      },
      {
        name: "Charged Big Bang",
        description: "Charged Big Bang",
        input: `Release while Charge Lv 3 ${bouton4}`,
      },
      {
        name: "Spinning Bludgeon",
        description: "Spinning Bludgeon",
        input: `Release while Charge Lv 3 ${bouton6}+${bouton4}`,
      },
      {
        name: "Charge Switch",
        description: "Charge Switch",
        input: `While charging ${bouton2}`,
      },
      {
        name: "Guard",
        description: "Guard",
        input: `${bouton4}`,
      },
      {
        name: "Silkbind Spinning Bludgeon",
        description: "Silkbind Spinning Bludgeon",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Impact Crater",
        description: "Impact Crater",
        input: `${bouton4}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/tyUWsU9cgzM",
  },
  huntingHorn: {
    title: "HUNTING HORN",
    paragraph:
      "Sous certains aspects, la Corne de chasse est une des meilleures armes, puisqu'elle permet de renforcer significativement les performances de tout le groupe en multijoueur, en plus d'être viable et performante en termes de dégâts",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Left Swing",
        input: `${bouton1}`,
        description: "Left Swing",
      },
      {
        name: "Right Swing",
        description: "Right Swing",
        input: `${bouton2}`,
      },
      {
        name: "Backwards Strike",
        description: "Backwards Strike",
        input: `${bouton1}+${bouton2}`,
      },
      {
        name: "Perform",
        description: "Perform",
        input: `${bouton4}`,
      },
      {
        name: "Magnificent Trio",
        description: "Magnificent Trio",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Silkbind Attack: Slide Beat",
        description: "Silkbind Attack: Slide Beat",
        input: `${bouton4}+${bouton2}`,
      },
      {
        name: "Silkbind Attack: Earthshaker",
        description: "Silkbind Attack: Earthshaker",
        input: `${bouton4}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/ZcaVNqP71Qk",
  },
  lance: {
    title: "LANCE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Mid Thrust",
        input: `${bouton1}`,
        description: "Mid Thrust",
      },
      {
        name: "High Thrust",
        description: "High Thrust",
        input: `${bouton2}`,
      },
      {
        name: "Wide Sweep",
        description: "Wide Sweep",
        input: `${bouton1}+${bouton2}`,
      },
      {
        name: "Guard Dash",
        description: "Guard Dash",
        input: `${bouton4}+${bouton6}+${bouton2}`,
      },
      {
        name: "Dash Attack",
        description: "Dash Attack",
        input: `${bouton1}+${bouton1}+${bouton2}`,
      },
      {
        name: "Counter-thrust",
        description: "Counter-thrust",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Guard",
        description: "Guard",
        input: `${bouton4}`,
      },
      {
        name: "Twin Vine (Kunai Jab)",
        description: "Twin Vine (Kunai Jab)",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Twin Vine (Launch while guarding)",
        description: "Twin Vine (Launch while guarding)",
        input: `${bouton4}+${bouton3}`,
      },
      {
        name: "Anchor Rage",
        description: "Anchor Rage",
        input: `${bouton4}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/VrJ_iGWv7G0",
  },
  longSword: {
    title: "LONG SWORD",
    paragraph:
      "Cette énorme épée fend l'air avec puissance et peut servir à se protéger en cas de besoin. Son attaque chargée est redoutable",
    image: "",
    combo: [
      {
        name: "Overhead Slash",
        input: `${bouton1}`,
        description: "Overhead Slash",
      },
      {
        name: "Thrust",
        description: "Thrust",
        input: `${bouton2}`,
      },
      {
        name: "Directional Fade Slash",
        description: "Directional Fade Slash",
        input: `While attacking,${bouton6}+${bouton1}+${bouton2}`,
      },
      {
        name: "Fade Slash",
        description: "Fade Slash",
        input: `${bouton1}+${bouton2}`,
      },
      {
        name: "Spirit Slash",
        description: "Spirit Slash",
        input: `${bouton4}`,
      },
      {
        name: "Foresight Slash",
        description: "Foresight Slash",
        input: `${bouton4}+${bouton2}`,
      },
      {
        name: "Special Sheathe",
        description: "Special Sheathe",
        input: `${bouton4}+${bouton3}`,
      },
      {
        name: "Iai Slash",
        description: "Iai Slash",
        input: `While in Special Sheathe,${bouton3}`,
      },
      {
        name: "Iai Spirit Slash",
        description: "Iai Spirit Slash",
        input: `While in Special Sheathe,${bouton4}`,
      },
      {
        name: "Soaring Kick",
        description: "Soaring Kick",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Spirit Helm Breaker/Falling Thrust",
        description: "Spirit Helm Breaker/Falling Thrust",
        input: `After Soaring Kick hits,${bouton4}`,
      },
      {
        name: "Serene Pose",
        description: "Serene Pose",
        input: `${bouton4}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/XgvR57bAGuc",
  },
  switchAxe: {
    title: "SWITCH AXE",
    paragraph:
      "Bascule entre le mode hache, pour une mobilité fluide et des coups simples lourds, et le mode épée, pour des frappes plus rapides. Les effets de fiole activés par l'épée persistent sous forme de hache.",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Overhead Slash",
        input: `${bouton1}`,
        description: "Overhead Slash",
      },
      {
        name: "Wild Swinge",
        description: "Wild Swing",
        input: `${bouton2}`,
      },
      {
        name: "Rising Slash",
        description: "Rising Slash",
        input: `${bouton1}+${bouton2}`,
      },
      {
        name: "Forward Slash",
        description: "Forward Slash",
        input: `${bouton6}+${bouton1}`,
      },
      {
        name: "Morph/Reload",
        description: "Morph/Reload",
        input: `${bouton4}`,
      },
      {
        name: "Invincible Gambit",
        description: "Invincible Gambit",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Switch Charger",
        description: "Switch Charger",
        input: `${bouton4}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/DyRb7kImnTE",
  },
  swordAndShield: {
    title: "SWORD AND SHIELD",
    paragraph:
      "Une lame qui vous permet d'attaquer rapidement et de près tout en évitant la plupart des coups entrants. Livré avec un bouclier qui peut protéger ET matraquer aussi !",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Chop",
        input: `${bouton1}`,
        description: "Chop",
      },
      {
        name: "Lateral Slash",
        description: "Lateral Slash",
        input: `${bouton2}`,
      },
      {
        name: "Shield Attack",
        description: "Shield Attack",
        input: `${bouton6}+${bouton2}`,
      },
      {
        name: "Advancing Slash",
        description: "Advancing Slash",
        input: `${bouton1}+${bouton2}`,
      },
      {
        name: "Rising Slash",
        description: "Rising Slash",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Guard",
        description: "Guard",
        input: `${bouton4}`,
      },
      {
        name: "Guard Slash",
        description: "Guard Slash",
        input: `${bouton4}+${bouton2}`,
      },
      {
        name: "Backstep",
        description: "Backstep",
        input: `During a combo,Hold${bouton3}+${bouton2}`,
      },
      {
        name: "Charged Slash",
        description: "Charged Slash",
        input: `During a backstep,hold ${bouton2}`,
      },
      {
        name: "Leaping Slash",
        description: "Leaping Slash",
        input: `After a backstep,${bouton1}`,
      },
      {
        name: "Perfect Rush",
        description: "Perfect Rush",
        input: `After a Leaping Slash or Guard Slash,${bouton1}`,
      },
      {
        name: "Use Item",
        description: "Use Item",
        input: `${bouton4} or ${bouton5} + E`,
      },
      {
        name: "Falling Shadow",
        description: "Falling Shadow",
        input: `${bouton5}+${bouton1}`,
      },
      {
        name: "Windmill",
        description: "Windmill",
        input: `${bouton5}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/DnJgwS9-NUw",
  },
  insectGlaive: {
    title: "INSECT GLAIVE",
    paragraph:
      "Commandez des insectes appelés Kinsects pour absorber l'essence de votre proie et vous améliorer. Sautez dans les airs, frappez vos ennemis et attaquez sous tous les angles en vol.",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Rising Slash Combo",
        input: `${bouton1}`,
        description: "Rising Slash Combo",
      },
      {
        name: "Wide Sweep",
        description: "Wide Sweep",
        input: `${bouton2}`,
      },
      {
        name: "Kinsect: Harvest Extract",
        description: "Kinsect: Harvest Extract",
        input: `${bouton4}+${bouton2}`,
      },
      {
        name: "Kinsect: Recall",
        description: "Kinsect: Recall",
        input: `${bouton4}+${bouton2}`,
      },
      {
        name: "Kinsect: Fire",
        description: "Kinsect: Fire",
        input: `${bouton4}+${bouton9}`,
      },
      {
        name: "Kinsect: Mark Target",
        description: "Kinsect: Mark Target",
        input: `${bouton4}`,
      },
      {
        name: "Vault",
        description: "Vault",
        input: `${bouton4}+${bouton3}`,
      },
      {
        name: "Aerial Attack",
        description: "Aerial Attack",
        input: `Midair,${bouton1}`,
      },
      {
        name: "Jumping Advancing Slash",
        description: "Jumping Advancing Slash",
        input: `Midair,${bouton2}`,
      },
      {
        name: "Midair Evade",
        description: "Midair Evade",
        input: `Midair,${bouton3}`,
      },
      {
        name: "Silkbind Attack: Silkbind Vault",
        description: "Silkbind Attack: Silkbind Vault",
        input: `${bouton4}+${bouton1}`,
      },
      {
        name: "Silkbind Attack: Recall Kinsect",
        description: "Silkbind Attack: Recall Kinsect",
        input: `${bouton4}+${bouton2}`,
      },
    ],
    link: "https://www.youtube.com/embed/xzKNpVMDDfM",
  },
  lightBowGun: {
    title: "LIGHT BOW GUN",
    paragraph:
      "Mon Une arme qui excelle dans le combat à longue distance.Remplit une variété de rôles, du barrage à tir rapide aux altérations de statut infligées en fonction du type de munitions utilisées.",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Crosshairs",
        input: `${bouton2}`,
        description: "Crosshairs",
      },
      {
        name: "Fire",
        description: "Fire",
        input: `${bouton1}`,
      },
      {
        name: "Wyvernblast",
        description: "Wyvernblast",
        input: `${bouton4}`,
      },
      {
        name: "	Reload",
        description: "	Reload",
        input: `${bouton7}`,
      },
      {
        name: "Select Ammo",
        description: "Select Ammo",
        input: `${bouton8}+${bouton4} or ${bouton7}`,
      },
      {
        name: "Melee Attack",
        description: "WMelee Attack",
        input: `${bouton4}+${bouton7}`,
      },
      {
        name: "Silkbind Glide",
        description: "Silkbind Glide",
        input: `Hold,${bouton4}+${bouton7}`,
      },
      {
        name: "Fanning Vault",
        description: "Fanning Vault",
        input: `${bouton9}+${bouton4}`,
      },
    ],
    link: "https://www.youtube.com/embed/QzzbeOMHbxs",
  },

  heavyBowGun: {
    title: "HEAVY BOW GUN",
    paragraph:
      "Une puissante arme à distance aussi lourde en puissance de feu qu'en main. Peut être chargé avec des munitions Wyvernheart ou Wyvernsnipe selon la situation",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "Crosshairs",
        input: `${bouton2}`,
        description: "Crosshairs",
      },
      {
        name: "Fire",
        description: "Fire",
        input: `${bouton2}`,
      },
      {
        name: "Load Special Ammo",
        description: "Load Special Ammo",
        input: `${bouton4}`,
      },
      {
        name: "Reload",
        description: "Reload",
        input: `${bouton7}`,
      },
      {
        name: "Select Ammo",
        description: "Select Ammo",
        input: `${bouton8}+${bouton4} or ${bouton7}`,
      },
      {
        name: "Melee Attack",
        description: "Melee Attack",
        input: `${bouton7}+${bouton4}`,
      },
      {
        name: "Counter Shot",
        description: "Counter Shot",
        input: `Hold,${bouton9}+${bouton7}`,
      },
      {
        name: "Free Silkbind Glide",
        description: "Free Silkbind Glide",
        input: `Hold,${bouton9}+${bouton4}`,
      },
    ],
    link: "https://www.youtube.com/embed/LWOH83GSesM",
  },
};
const cardData = document.getElementById("bowCard").src="1.png"
modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
  if (this.id) {
    console.log(this.id);
    const modalTitle = document.getElementById("modal-title");
    modalTitle.innerText = modalData[this.id].title;
    const modalParagraph = document.getElementById("modal-paragraph");
    modalParagraph.innerText = modalData[this.id].paragraph;
    const modalImg = document.getElementById("modal-img");
    modalImg.src = modalData[this.id].image;
    const modalCombo = document.getElementById("modal-combo");
    modalCombo.innerHTML = "";
    modalData[this.id].combo.forEach((combo) => {
      modalCombo.innerHTML =
        modalCombo.innerHTML +
        "<p>" +
        combo.name +
        " : " +
        combo.input +
        "</p>";
    });
    const modalLink = document.getElementById("modal-link");
    modalLink.src = modalData[this.id].link;
  }
}
function changeCard(){
  document.getElementById("bowCard").src='./public/click/shift.png'
  console.log('je fonctionne')
;}

