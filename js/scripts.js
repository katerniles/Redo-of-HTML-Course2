/*! scripts.js */
/*testing to make sure connected correctly. It is*/
$(document).ready(function() {
	alert("Document is ready!");
	/*create zebra-striped table */
	var rows = $(".my-row");
	for(var i=0; i<rows.length; ++i) {
		if (i%2===0) {
			$(rows[i]).css("background-color", "yellow");
	};
};
}); 
$(".comment").css("background-color", "white"); 

	//when submit button is clicked, 
$("#btn-info").on("click", function () {
	// Grab the value of the textbox and set it to a variable
	var comment = $(".comment").val();
	//add "clicked" to console log
	console.log("clicked");	
	//make sure right data is retrieved
	console.log(comment);
	//display textbox content
	$("#visible-comment").html(comment);
	//don't submit input since no where to go
	return false;
});
$(".comment").on("keyup", function() {
		//make sure we're caching keyup
	console.log("keyup happened"); 
	var nameName = 3;
	var name = "string";
	//set length of the content of the textarea to a variable
	var charCount = $(".comment").val().length;
	//make sure set to right value	
	console.log(charCount);
	//show running character count to the user
	$("#char-count").html(charCount);
		//need to turn character count red
	if(charCount > 50) {
		$("#char-count").css("color", "red");
		//need to be black
	} else {
		$("#char-count").css("color", "black");
	};
	//here is where rest of code goes
});

