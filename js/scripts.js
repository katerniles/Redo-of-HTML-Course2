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
	//add "clicked" to console log
	console.log(comment);
	//makes sure right data is retrieved
	$("#visible-comment").html(comment);
	//displays textbox content
	return false;
	//doesn't submit input since no where to go
});
$(".comment").on("keyup", function() {
	console.log("keyup happened"); 
		//make sure we're caching keyup
	var nameName = 3;
	var name = "string";
	var charCount = $(".comment").val().length;
	//sets length of the content of the textarea to a variable
	console.log(charCount);
	//make sure set to right value	
	$("#char-count").html(charCount);
	//show running character count to the user
	if(charCount > 50) {
		$("#char-count").css("color", "red");
		//need to turn character count red
	} else {
		$("#char-count").css("color", "black");
		//need to be black
	};
	//here is where rest of code goes
});

$(".twitter-follow-button").on("click", function() {
	//when twitter button is clicked, 
	console.log("One more follower!");
	//add "message" to console log
});