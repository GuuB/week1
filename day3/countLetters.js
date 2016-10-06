function countLetters(string)
{
  var object = {};
  var newString = string.split(" ").join("").toLowerCase();
  
  for (letter of newString)
  {
    if (!object[letter])
    {
      object[letter] = 1;
    }
    else if (object[letter])
    {
      object[letter] += 1;
    }
  }

  return object;
}

console.log(countLetters("hello Alex"));
