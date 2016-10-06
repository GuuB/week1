function countLetters(string)
{
  var object = {};
  var newString = string.split(" ").join("").toLowerCase();

  for (var i =0; i < newString.length; i++)
  {
    if (!object[newString[i]])
    {
      object[newString[i]] = [i];
    }
    else if (object[newString[i]])
    {
      object[newString[i]].push(i);
    }
  }

  return object;
}

console.log(countLetters("hello Alex"));
