console.log("Hello, world!");

const mysteryNumber = Math.round(Math.random() * 2);
let baseKat = document.querySelector("#base");
const containerRight = document.querySelector(".containerRight");
const kledingKat = document.querySelectorAll(".kleding");

console.log(mysteryNumber);

// kleur kat veranderen gebaseerd op Math.random
function kleurBase() {
  if (mysteryNumber === 1) {
    baseKat.src = "afbeeldingen/katbase2.PNG";
  } else if (mysteryNumber === 2) {
    baseKat.src = "afbeeldingen/katbase3.PNG";
  } else {
    baseKat.src = "afbeeldingen/katbase1.PNG";
  }
}

// Met hulp van Rose Mulazada - https://github.com/rosemulazada
// kleding klikbaar maken en een afbeeling laten zien
if (containerRight) {
  containerRight.addEventListener("click", function (event) {
    const activeKledingStuk = event.target.id;
    kledingKat.forEach(function (kledingStuk) {
      kledingStuk.style.display = "";
      if (kledingStuk.id === "active-" + activeKledingStuk) {
        kledingStuk.style.display = "inline-block";
      }
    });
  });
}

// Met hulp van Rose Mulazada - https://github.com/rosemulazada
// Naam opslaan wanneer je op de knop klinkt
const nameSubmitBtn = document.querySelector("#nameSubmitBtn");
const nameSubmitInput = document.querySelector("#nameSubmitInput");

if (nameSubmitBtn && nameSubmitInput) {
  nameSubmitBtn.addEventListener("click", function () {
    const catName = nameSubmitInput.value.trim();
    if (catName === "") {
      localStorage.setItem("catName", "Lily");
    } else {
      localStorage.setItem("catName", catName);
    }
  });
}

// Naam in de H1 plaatsen
const catNameH1 = document.querySelector("#catNameH1");
if (catNameH1) {
  catNameH1.textContent = localStorage.getItem("catName");
}

kleurBase();
