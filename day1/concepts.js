/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)

function joinList (list)
{
	var string = "";
	var i = 0;

	list.forEach(function(elem)
	{
		string += elem;
		i++;

		if(i !== list.length)
		{
			string += ", ";
		}
	});

	return string;
}

var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");

