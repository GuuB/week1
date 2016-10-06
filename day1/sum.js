//var args = process.argv;
//console.log(args);

function sum (a, b)
{
	var sum = a + b;
	console.log(sum);
}

sum (Number(process.argv[2]), Number(process.argv[3]));

