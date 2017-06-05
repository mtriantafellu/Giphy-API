//IDs:
//#divBtn
//#searchBtn
//#input
//#image
//#rating
 
//API Key:



//Giphy API URL + API Key:

//var queryURLbase = "http://api.giphy.com/v1/gifs/random&tag=" + searchTerm + "&api_key=" + APIkey + "&limit=10";

//var queryURLBase = "http://api.giphy.com/v1/gifs/random?api_key=" + APIkey + "&tag=" + searchTerm;

$(document).ready(function(){
  console.log("ready!");

var APIkey = "dc6zaTOxFJmzC";

var cars = [
  "Ford Mustang",
  "Chevy Camero",
  "Dodge Viper",
];

//Pressing Enter now initializes the search button
//$("#input").keyup(function(event){
    //if(event.keyCode == 13){
        //$("#searchBtn").click();
    //}
//});
//End Enter Button

function displayCarInfo() {

var searchTerm = "";
var queryURLBase = "http://api.giphy.com/v1/gifs/random?api_key=" + APIkey + "&tag=" + searchTerm;

  var car = $(this).attr(".car");
  var queryURL = queryURLbase + searchTerm;

    $.ajax({
      url: queryURL,
      method: 'GET'
    })

    .done(function(response) {
      
      console.log("done response", response);

      var carDiv = $("<div class='car'>");

      var rating = response.data.Rated;

      var p0ne = $("<p>").text("Rating:" + rating);

      carDiv.append(pOne);

      var imageURL = response.data.image_original_url;

      var image = $("<img>");

      image.attr("src", imageURL);

      image.attr("alt", "image");

      $("#image").prepend(image);

    });  //End .done function

// End Button Click

}// End Function displayCarInfo

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

  console.log("ready2");
});

$(document).on("click", ".car", displayCarInfo);

renderButtons();

});// End document.ready






// Previous!!!
/*
//On.Button Click:
$("#searchBtn").on("click", function(event) {

  event.preventDefault();

  //  Empties the region associated with the pictures
  //  $("#well-section").empty();

  searchTerm = $("input").val().trim();
  var queryURL = queryURLbase;

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

  console.log("ready2");
});

renderButtons();

});// End document.ready
*/