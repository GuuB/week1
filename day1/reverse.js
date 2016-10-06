var array = process.argv;

function reverse (array)
{
	var newArray = [];

	for (var i = 2; i < array.length; i++)
	{
		var newString = "";

		for (var j = array[i].length - 1; j >= 0; j --)
		{
			newString += array[i].charAt(j);
		}

		newArray[i] = newString;
		console.log(newArray[i]);
	}
}

reverse(array);
