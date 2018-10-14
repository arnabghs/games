const isEven = function(number){
  if (number%2 == 0) {return true}
}

const readline = require('readline-sync');
const createOutline = function (array){
  let firstLine =  array[0]+" | "+array[1]+" | "+array[2]+"\n";
  let secondLine = array[3]+" | "+array[4]+" | "+array[5]+"\n";
  let thirdLine = array[6]+" | "+array[7]+" | "+array[8]+"\n";
  let underscoreLine = "__ ___ __"+"\n";

  let outLine = firstLine + underscoreLine + secondLine + underscoreLine + thirdLine;
  return outLine;
}
let inputArray =[1,2,3,4,5,6,7,8,9];
let gameBox = createOutline(inputArray);
console.log(gameBox);


let symbol1 = "x";
let symbol2 = "o";
let messageForSymbol = "choose between 'x' or 'o' : ";
let chooseSymbol = readline.question(messageForSymbol);
if (chooseSymbol == "o"){ 
  symbol1 = "o";
  symbol2 = "x";
}
console.log("Player 1 chooses = "+symbol1);

for (count = 0; count<9 ; count++){
  let symbolToPrint = symbol2;
  let player = "Player 2";

  let playerTurnMsg1 = "\nTurn of player 1.. ";
  let playerTurnMsg2 = "\nTurn of player 2.. ";
  let turnMsg = playerTurnMsg2;

  if (isEven(count)) { 
    symbolToPrint = symbol1;
    turnMsg = playerTurnMsg1;
    player = "Player 1";
  } 
  
  console.log(turnMsg);

  let messageForSquare = "Enter the number where you want to put your symbol : ";
  let input = readline.question(messageForSquare);
  for (let index in inputArray){
    if (inputArray[index] == input){
      inputArray[index] = symbolToPrint;
    }
  }
let gameBox = createOutline(inputArray);
console.log(gameBox);

  if (inputArray[0] == inputArray[1] && inputArray[1] == inputArray[2] ||
      inputArray[3] == inputArray[4] && inputArray[4] == inputArray[5] ||
      inputArray[6] == inputArray[7] && inputArray[7] == inputArray[8] ||
      inputArray[0] == inputArray[3] && inputArray[3] == inputArray[6] ||
      inputArray[1] == inputArray[4] && inputArray[4] == inputArray[7] ||
      inputArray[2] == inputArray[5] && inputArray[5] == inputArray[8] ||
      inputArray[0] == inputArray[4] && inputArray[4] == inputArray[8] ||
      inputArray[2] == inputArray[4] && inputArray[4] == inputArray[6]  ){
    console.log("Game finished.");
    console.log(player,"won the game :)"); 
    process.exit();
  }
}
console.log("The game is drawn.. ");
