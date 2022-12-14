const bouton1 = '<img class="inputCombo" src= "./public/click/left click.png">';
const bouton2 =
  '<img class="inputCombo" src = "./public/click/right click.png"">';
const bouton3 = '<img class="inputCombo" src="./public/click/space.png">';
const bouton4 = '<img class="inputCombo" src="./public/click/mb4.png">';
const bouton5 = '<img class="inputCombo" src="./public/click/molette.png">';
const bouton6 = '<img class="inputCombo" src="./public/click/pngegg.png">';

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
    link: 'https://www.youtube.com/embed/Bcv1ltU9z1s',
  },
  bow: {
    title: "BOW",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  accelAxe: {
    title: "ACCEL AXE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  dualBlade: {
    title: "DUAL BLADE",
    paragraph: "Super dual blade pour kikoo",
    image: "./public/image/arme mhr/Dual_Blades_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  greatSword: {
    title: "GREAT SWORD",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  gunLance: {
    title: "GUN LANCE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  hammer: {
    title: "HAMMER",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  huntingHorn: {
    title: "HUNTING HORN",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  lance: {
    title: "LANCE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  longSword: {
    title: "LONG SWORD",
    paragraph:
      "Cette énorme épée fend l'air avec puissance et peut servir à se protéger en cas de besoin. Son attaque chargée est redoutable",
    image: "",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  switchAxe: {
    title: "SWITCH AXE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  swordAndShield: {
    title: "SWORD AND SHIELD",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  insectGlaive: {
    title: "INSECT GLAIVE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  lightBowGun: {
    title: "LIGHT BOW GUN",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  mediumBowGun: {
    title: "MEDIUM BOW GUN",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
  heavyBowGun: {
    title: "HEAVY BOW GUN",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
    combo: [
      {
        name: "attaque de base",
        input: `${bouton1}`,
        description: "attaque simple ...",
      },
      {
        name: "attaque lourde",
        description: "attaque lourde :)",
        input: `${bouton2}`,
      },
      {
        name: "double dash",
        description: "dash en avant avec les deux lames",
        input: `${bouton1}+${bouton2}`,
      },
    ],
  },
};

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
      console.log(combo);
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
    console.log(modalLink)
    
  }
}
