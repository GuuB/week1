var nRolls = process.argv[2];

function rollDice (nRep)
{
  var output = `Rolled ${nRep} dice: `;

  for (var i = 0; i <= nRep -1; i++)
  {
    var n = Math.floor(Math.random() * ((6-1)+1) + 1);
    output += n;

    if ( i !== nRep -1)
    {
      output += ", ";
    }
  }

  return output;
}

console.log(rollDice(nRolls));
