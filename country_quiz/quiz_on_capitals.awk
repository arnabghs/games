#! /usr/bin/awk -f

BEGIN {
  FS="|"
  srand
  close_msg = "\n[Press ctrl+c to end the quiz]"
  for (n=1 ; n <= 32; n++){
    getline < "fun_facts.txt"
    fact_array[n]=$0
   }

}
{
  capitals[NR]=$2
  countries[NR]=$1
}
END{
  while(1){
    i=0;
    while (i<3) {
      fact_no = int(rand*32)+1
      random_index_no=int(rand*196)+1
      print "\nWhat is the capital of "countries[random_index_no]" ?"
      getline answer < "/dev/tty"
      if (tolower(capitals[random_index_no]) == tolower(answer)) {
        print "\nFantastic ! You are correct. "
        print "The answer is ",capitals[random_index_no],"."
      } 
      else if (answer=="") {
        print "You haven't entered anything."
      }
      else if (tolower(capitals[random_index_no]) ~ tolower(answer)) {
        print "You were quite close, good job !"
        print "The answer is ",capitals[random_index_no],"."
      } 
       else { 
          print "sorry, the correct answer is",capitals[random_index_no],"."
        } 
        print close_msg;
        print "------------------------------------"
        i++;
    }
    printf "\nDid you know :- "
    print fact_array[fact_no]
    print "------------------------------------"
  }
}
