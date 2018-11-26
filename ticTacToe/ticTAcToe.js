const isEven = function(number){
  if (number%2 == 0) {return true}
}

const readline = require('readline-sync');

const createOutline = function (array){
  let firstLine =  array[0]+" | "+array[1]+" | "+array[2]+"\n";
  let secondLine = array[3]+" | "+array[4]+" | "+array[5]+"\n";
  let thirdLine = array[6]+" | "+array[7]+" | "+array[8]+"\n";
  let underscoreLine = "_ __ __"+"\n";

  let outLine = firstLine + underscoreLine + secondLine + underscoreLine + thirdLine;
  return outLine;
}

let sampleArray =[1,2,3,4,5,6,7,8,9];
let consoleArray = sampleArray.map(x => x);
let gameBox = createOutline(consoleArray);
console.log(gameBox);

let firstPlayerName = readline.question("Please enter first player's name : ");
let secondPlayerName = readline.question("please entre second player's name : ");

let symbol1 = "x";
let symbol2 = "o";
let messageForSymbol = "choose between 'x' or 'o' : ";
let chooseSymbol = readline.question("\n"+firstPlayerName+", "+messageForSymbol);
if (chooseSymbol == "o"){ 
  symbol1 = "o";
  symbol2 = "x";
}
console.log(firstPlayerName+" chooses = "+symbol1);

let usedSquares = [];
let messageToShow = "Enter the number where you want to put your symbol : ";

const winCondition = function(array){
  if (array[0] == array[1] && array[1] == array[2] ||
    array[3] == array[4] && array[4] == array[5] ||
    array[6] == array[7] && array[7] == array[8] ||
    array[0] == array[3] && array[3] == array[6] ||
    array[1] == array[4] && array[4] == array[7] ||
    array[2] == array[5] && array[5] == array[8] ||
    array[0] == array[4] && array[4] == array[8] ||
    array[2] == array[4] && array[4] == array[6]  ){
    return true;
  } else {
    return false;
  }
}

const playerAndSymbolSelector = function(number){
  let symbolToPrint = symbol2;
  let player = secondPlayerName;

  if (isEven(number)) { 
    symbolToPrint = symbol1;
    player = firstPlayerName;
  }
  return {player: player, symbolToPrint: symbolToPrint};
}

for (count = 0; count<9 ; count++){

  let {player,symbolToPrint} = playerAndSymbolSelector(count);
  let playerTurnMsg = "\nTurn of "+player;

  console.clear();
  console.log(gameBox);
  console.log(playerTurnMsg);

  let input = +readline.question(messageToShow);
  if (sampleArray.includes(input)){
    if (usedSquares.includes(input)){
      messageToShow = "This square is already taken,please enter a new number : ";
      count-- ;
    } else {
      consoleArray[input-1] = symbolToPrint;
      usedSquares.push(input);
      messageToShow = "Enter the number where you want to put your symbol : ";
    }
  } else {
    messageToShow = "Invalid input.Please enter one of the above numbers : ";
    count-- ;
  }

  gameBox = createOutline(consoleArray);

  if (winCondition(consoleArray)){
    console.log(gameBox);
    console.log("Congradulations !",player,"won the game !"); 
    process.exit();
  }
}

console.log(gameBox);
console.log("The game is drawn.. :)");
