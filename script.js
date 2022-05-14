// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector(".text-danger");
let formulaire = document.querySelector("#formulaire");
let coups = 0;
let random = Math.floor(Math.random() * 100);
let choix;
// Etape 2 - Cacher l'erreur
error.style.visibility = "hidden";

// créé une div instruction, compare la valeur donné en input à random, en fonction du résultat attribue la classe 'plus' 'moins' ou 'finis'
// à instruction et l'ajoute au DOM

function check(nombre) {
  let instruction = document.createElement("div");
  if (nombre > random) {
    // instruction.textContent = "C'est moins"
    instruction.textContent = "#" + coups + " : " + choix + " C'est moins";
    instruction.className = "moins";
    document.querySelector("#instructions").prepend(instruction);
  } else if (nombre < random) {
    instruction.textContent = "#" + coups + " : " + choix + " C'est plus";
    instruction.className = "plus";
    document.querySelector("#instructions").prepend(instruction);
  } else if (nombre == random) {
    instruction.textContent = "Bsahteeeek bg en " + coups + " coups";
    instruction.className = "fini";
    document.querySelector("#instructions").prepend(instruction);
  }
}

// Quand l'utilisateur écrit : rend visible le message d'erreur si la valeur du champ n'est pas un nombre

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
  }
});

// à l'envoie du formulaire, incrémente coups, vérifie si le champ est vide ou n'est pas un nombre, si oui : entoure le champ de rouge
// si non : envoie la valeur dans choix() et reset le champ sur une valeur vide

formulaire.addEventListener("submit", (e) => {
  coups++;
  e.preventDefault();
  if (isNaN(input.value) || input.value == "") {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "silver";
    choix = input.value;
    check(choix);
    input.value = "";
  }
});
