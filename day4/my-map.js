var map = function (array, callBack)
{
  var newArray = [];
  array.forEach(function(p)
  {
    newArray.push(callBack(p));
  });
  return newArray;
}

map(["ground", "control", "to", "major", "tom"], function (elm)
{ return elm.length });

console.log(map(["ground", "control", "to", "major", "tom"], function (elm)
{ return elm.length }));
