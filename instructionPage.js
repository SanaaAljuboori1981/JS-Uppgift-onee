function Instruction(){
  const instruction = document.createElement("p");
  instruction.textContent = (‘click on the monty moles to earn points then clicking on the piranha plants as this will end the game
and then try to score as high as possible‘);

const superMario = document.createElement("div");
superMario.id = "superMario";

board.innerHTML = "";
board.append(instruction,button,superMario);

const button = document.createElement("button");
button.textContent = "start game!";


button.addEventListener("click",function(){});}

}