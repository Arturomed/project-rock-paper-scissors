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


// Crear funcion donde se juegue la ronda
function playRound(humanChoice, computerChoice) {
  let mensaje = '';
  let computerScore = 0;
  let humanScore = 0;

  if (humanChoice === computerChoice) {
    mensaje = `Ambos ${humanChoice}, nadie gana la ronda.`
  }
  else if 
    ((computerChoice === "piedra" && humanChoice === "papel") || (computerChoice === "papel" && humanChoice === "tijera") || (computerChoice === "tijera" && humanChoice === "piedra")) {
    mensaje = `Haz ganado ${humanChoice} vende a ${computerChoice}`;
    humanScore += 1;
  }
  else {
    mensaje = `Haz perdido ${computerChoice} vence a ${humanChoice}`
    computerScore += 1;
  }
  return {mensaje, humanScore, computerScore}
}

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

roundOne = playRound(humanChoice, computerChoice)
console.log(roundOne)

/*
//Crear function donde se jueguen 5 rondas (main)
function playGame() {

}
*/