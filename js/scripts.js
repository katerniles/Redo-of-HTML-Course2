/*! scripts.js */
var myKitties = [ { title: "First Project", pic: "img/index1.jpg" }, { title: "Second Project", pic: "img/index2.jpg" }, {title: "Third Project", pic: "img/index3.jpg" }, {title: "Fourth Project", pic: "img/index4.jpg"}
];

/*testing to make sure connected correctly. It is*/
/*$(document).ready(function() {
	alert("Document is ready!");
	/*create zebra-striped table */
	var rows = $(".my-row");
	console.log(rows);
      for(var i=0; i < rows.length; i++) {
        if (i % 2 === 1) {
          $(rows[i]).css("background-color", "yellow");
          };
      };
	for(var i=0; i<myKitties.length; ++i) {
		$("#" + i).css("background-image", "url(" + myKitties[i].pic + ")");
		//*google map initialize function
		    function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(41.826532, -86.206179),
      zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	google.maps.event.addDomListener(window, 'load', initialize);
	var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom'
    });
    google.maps.event.addListener(marker, 'click', function(){
    	map.setZoom(8);
    	map.setCenter(marker.getPosition());
    })
};
 

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


  };
  google.maps.event.addDomListener(window, 'load', initialize);