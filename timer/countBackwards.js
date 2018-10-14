keepInSync = 1;
for (let count = 5; count >= 0 ; count--){
  if ( count == 0){count = 'BOOOOM'}
( function(toPrint){
  setTimeout ( ()=> console.log(toPrint),1000*keepInSync);
}
)
(count);
keepInSync++;
}
