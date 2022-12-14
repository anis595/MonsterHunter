const bouton1 = '<img class="inputCombo" src= "./public/image/boutonPs4/bouton1.jpg">';
const bouton2 = '<img class="inputCombo" src = "./public/image/boutonPs4/bouton2.jpg"">';
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalData = {
  "charge-blade": {
    title: "CHARGE BLADE",
    paragraph: "Mon para",
    image: "./public/image/arme mhr/Accel_Axe_Icon_White.webp",
  },
  bow: {
    title: "BOW",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  accelAxe: {
    title: "ACCEL AXE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  dualBlade: {
    title: "DUAL BLADE",
    paragraph: "Super dual blade pour kikoo",
    image: "./public/image/arme mhr/Dual_Blades_Icon_White.webp",
    combo: [{name:'attaque de base', input:`${bouton1}`, description: 'attaque simple ...'},{name: 'attaque lourde',description:'attaque lourde :)', input:`${bouton2}`},{name:'double dash', description:'dash en avant avec les deux lames', input:`${bouton1}+${bouton2}`}]
  },
  greatSword: {
    title: "GREAT SWORD",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  gunLance: {
    title: "GUN LANCE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  hammer: {
    title: "HAMMER",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  huntingHorn: {
    title: "HUNTING HORN",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  lance: {
    title: "LANCE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  longSword: {
    title: "LONG SWORD",
    paragraph:
      "Cette énorme épée fend l'air avec puissance et peut servir à se protéger en cas de besoin. Son attaque chargée est redoutable",
    image: "./public/image/Longsword.webp",
    combo: "",
  },
  switchAxe: {
    title: "SWITCH AXE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  swordAndShield: {
    title: "SWORD AND SHIELD",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  insectGlaive: {
    title: "INSECT GLAIVE",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  lightBowGun: {
    title: "LIGHT BOW GUN",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  mediumBowGun: {
    title: "MEDIUM BOW GUN",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
  },
  heavyBowGun: {
    title: "HEAVY BOW GUN",
    paragraph: "Mon paragraphe",
    image: "./public/image/arme mhr/Bow_Icon_White.webp",
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
    modalCombo.innerHTML = '';
    modalData[this.id].combo.    forEach(combo => {console.log(combo);
      modalCombo.innerHTML = modalCombo.innerHTML + '<p>'+combo.name+' : '+combo.input+'</p>';})
    
    
    //const img = document.createElement(img);
    
  }
}
