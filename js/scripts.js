/*! scripts.js */
$(document).ready(function() {
	alert("Document is ready!");
}); /*testing to make sure connected correctly. It is*/

$("#comment").css("background-color", "orange"); 

$("#btn-info").on("click", function () {
	console.log("clicked");	
	var comment = $("#comment").val();
	return false;
});

