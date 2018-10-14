#! /usr/bin/awk

BEGIN {
  srand
  score=0
  print "Enter your name:"
  getline name
  print "Hello "name"! Press enter to begin.."
  }
{
  first_no=int(rand*99)+1
  second_no=int(rand*49)+1
  operation_mark=int(rand*4)+1
  split("+,-,*,/",operations,",")

#Operation for sum:

   if (operations[operation_mark] == "\+") {
   print "Can you guess the value of "first_no"+"second_no"=?"
  getline answer
  if (answer == (first_no+second_no)) {
    print "Congrats ! "name," You are a Genius.\n"
     score+=1
     print "Your current score is "score
     print "\nPress enter to continue.." }
    else {
            print "Sorry " name ", better luck next time.\n"
            print "Your total score is " score
            print "\npress enter to continue"
            print "press ctrl+operation_mark to exit."

}
#Operation for subtraction:
}
    else if (operations[operation_mark] == "\-") {
      print "Can you guess the value of "first_no"-"second_no"=?"
    getline answer
    if (answer == (first_no-second_no)){
      print "Congrats! "name", You are a Genius.\n"
      score+=1
    print "Your current score is "score
    print "\nPress enter to continue.."}
      else {
        print "Sorry "name", better luck next time.\n"
        print "Your total score is " score
        print "\npress enter to continue"
        print "press ctrl+operation_mark to exit."
}
#Operation for multiplication:
}
else if (operations[operation_mark] == "\*") {
  print "Can you guess the value of "first_no"*"second_no"=?"
  getline answer
  if (answer == (first_no*second_no)) {
    print "Congrats! "name", You are a Genius.\n"
    score+=1
  print "Your current score is "score
  print "\nPress enter to continue.."
}  
  else {
      print "Sorry "name", better luck next time.\n"
      print "Your total score is " score
      print "\npress enter to continue"
      print "press ctrl+operation_mark to exit."
    }
    #Operation for division:
  }
  else {
    print "Can you guess the value of "first_no"/"second_no"=? (Enter Quotient value)"
    getline quotient
    print "(Enter Remainder value)"
    getline remainder
    if (quotient == int(first_no/second_no) && remainder == (first_no%second_no)) {
      print "Congrats! "name", You are a Genius.\n"
      score+=1
      print "Your current score is "score
      print "\nPress enter to continue.."
    }
    else {
      print "Sorry "name", better luck next time.\n"
      print "Your total score is " score
      print "\npress enter to continue"
      print "press ctrl+operation_mark to exit."
          }
}
}
