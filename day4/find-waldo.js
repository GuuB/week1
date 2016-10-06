// The second argument/parameter is expected to be a function
var findWaldo = function (arr, found)
{
  arr.forEach( function(current, index)
  {
    if (current == "Waldo")
    {
      found(current, index)   // execute callback
    }
  });
}

function actionWhenFound(current, index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
