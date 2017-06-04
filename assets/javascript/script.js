//IDs:
//#searchBtn
//#input
//#image
 
//API Key:
var APIKey = "dc6zaTOxFJmzC";
var searchTerm = "";

//Giphy API URL + API Key:
var queryURLBase = "http://api.giphy.com/v1/gifs/random?api_key=" + APIKey + "&tag=" + searchTerm;

//Pressing Enter now initializes the search button
$("#input").keyup(function(event){
    if(event.keyCode == 13){
        $("#searchBtn").click();
    }
});
//End Enter Button

//On.Button Click:
$("#searchBtn").on("click", function(event) {


	event.preventDefault();

	//  Empties the region associated with the pictures
	//  $("#well-section").empty();

	searchTerm = $("input").val().trim();
	var queryURL = queryURLBase + searchTerm;

    $.ajax({
      url: queryURL,
      method: 'GET'
    })

    .done(function(response) {
      
      console.log(response);

      var imageURL = response.data.image_original_url;

      var planeImage = $("<img>");

      planeImage.attr("src", imageURL);

      planeImage.attr("alt", "plane image");

      $("#image").prepend(planeImage);

    });  //End .done function

}); // End Button Click

// Start and stop images
$("#image").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "animate") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});  // End Start and stop images

