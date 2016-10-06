var password = process.argv[2];

function obfuscate (str)
{
	var newpass = "";

	for (var i = 0; i < str.length; i++)
	{
		switch(str.charAt(i))
		{
			case "a":
				newpass += "4";
				break;
			case "e":
				newpass += "3";
				break;
			case "o":
				newpass += "0";
				break;
			case "l":
				newpass += "1";
				break;
			default:
				newpass += str.charAt(i);
		} 
	}

	return newpass;
}

console.log(obfuscate(password));
