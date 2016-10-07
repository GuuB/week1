
var loadedDie = function ()
{
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  function displayRoll()
  {
    if(i === list.length)
    {
      i = 0;
    }
    var output = list[i++];
    return output;
  }
  return displayRoll;
}()

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());
console.log(loadedDie()); // 6
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
