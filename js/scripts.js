/*! scripts.js */
/*$(document).ready(function() {
	alert("Document is ready!");
}); /*testing to make sure connected correctly. It is*/

$(".comment").css("background-color", "pink"); 
	
$("#btn-info").on("click", function () {
	//when submit button is clicked, 
	var comment = $(".comment").val();
	// Grab the value of the textbox and set it to a variable
	console.log("clicked");	
	//adds "clicked" to console log
	console.log(comment);
	//makes sure right data is retrieved
	$("#visible-comment").html(comment);
	//displays textbox content
	return false;
	//doesn't submit input since no where to go
});
	
