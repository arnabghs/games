BEGIN {
  srand
}
{
  a=int(rand*9)+1
  b=int(rand*9)+1

  print "Div of "a" & "b"= ?"
  getline quo 
  getline rem
  if (quo == int (a/b) && rem == a%b) {
    print "correct"
  }
  else
    print "wrong"
}

