//IDs:
//#searchBtn
//#input
//#images
 
//API Key:
var APIKey = "dc6zaTOxFJmzC";
var searchTerm = "";

//Giphy API URL + API Key:
var queryURLBase = "http://api.giphy.com/v1/gifs/random?api_key=" + APIKey + "&tag=" + searchTerm;

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

      $("#images").prepend(planeImage);

    });  //End .done function

}); // End Button Click
