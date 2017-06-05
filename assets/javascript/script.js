//IDs:
//#divBtn
//#searchBtn
//#input
//#image
//#rating
 
//API Key:

var APIKey = "dc6zaTOxFJmzC";
var searchTerm = "";
var cars = [
  "Ford Mustang",
  "Chevy Camero",
  "Dodge Viper",
];

//Giphy API URL + API Key:
var queryURLBase = "http://api.giphy.com/v1/gifs/random?api_key=" + APIKey + "&tag=" + searchTerm;

$(document).ready(function(){
  console.log("ready!");
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

      var image = $("<img>");

      image.attr("src", imageURL);

      image.attr("alt", "image");

      $("#image").prepend(image);

    });  //End .done function

}); // End Button Click

function renderButtons() {
  $("#divBtn").empty();

  for (var i = 0; i < cars.length; i++) {

    var a = $("<button>");

    a.addClass("car");
    a.attr("data-name", cars[i]);
    a.text(cars[i]);
    $("divBtn").append(a);

  };
};

$("#searchBtn").on("click", function(event) {

  event.preventDefault();

  var car = $("input").val().trim();

  cars.push(car);

  renderButtons();
});

renderButtons();

});// End document.ready