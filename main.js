// Crear funcion donde aloje la eleccion de la computadora
function getComputerChoice() {
  let gen = Math.ceil(Math.random() * 3)
  let eleccion = ""
  switch(gen) {
    case 1: 
      eleccion = "piedra";
      break;
    case 2: 
      eleccion = "papel";
      break;
    case 3:
      eleccion = "tijera";
      break;
  }
  return eleccion
}


// Crear funcion que aloje la eleccion del usuario
function getHumanChoice() {
  let entrada = prompt("Piedra, papel o tijeras? ");
  let entradaMinus = entrada.toLowerCase()
  return entradaMinus
}


// Crear funcion para el registro de puntuacion de ambos
function computerScore() {
  let score = 0;
  score += 1;
  return score;
}


function humanScore() {
  let score = 0;
  score += 1;
  return score;
}

/*
// Crear funcion donde se juegue la ronda
function playRound() {

}

//Crear function donde se jueguen 5 rondas (main)
function playGame() {

}
*/