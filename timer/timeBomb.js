let lib = require('say');
const blast = "BOOM";
const warning = "Fire in the Hole !";
let keepInSync = 1;
for (let count = 5; count > 0 ; count--){
  let toPrint = count;
  setTimeout( ()=> {lib.speak(toPrint);console.log(toPrint);},1000*keepInSync );
  keepInSync++;
}
setTimeout( ()=>{lib.speak(warning,"Daniel");console.log(warning);}, 1000 * keepInSync);
keepInSync +=2;
setTimeout( ()=>{lib.speak(blast,"alex");console.log(blast);}, 1000 * keepInSync);
