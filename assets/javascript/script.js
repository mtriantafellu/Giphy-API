//IDs:
//.container
//#divBtns
//#car-form
//#car-input
//#add-car
//#cars-view

$(document).ready(function() {

	//Global Variables
	var APIkey = "dc6zaTOxFJmzC";

	var cars = [
		"Pontiac Firebird",
		"Ford Mustang",
		"Chevy Camero",
		"Dodge Challenger",
		"Plymouth Barracuda",
		"Dodge Dart",
		"AMC Javelin",
		"Chevy Corvette",

		"Chevy Chevelle",
		];

	//first Function to Display Car Info
	function displayCarInfo() {

      	var state = $(this).attr("data-state");
		var car = $(this).attr("data-name");

		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=dc6zaTOxFJmzC&tag=&limit=5";

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			
			console.log(response);

			var results = response.data;

			for (var i = 0; i < results.length; i++) {

				if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

				var carDiv = $("<div class='car'>");

				var rating = results[0].rating;

					console.log("response", response);

				var pOne = $("<p>").text("Rating: " + rating);

				carDiv.append(pOne);

				var imgURL = results[i].images.fixed_height.url;
				
				var image = $("<img>").attr("src", imgURL);

				carDiv.append(pOne);	
				carDiv.append(image);

				$("#cars-view").prepend(carDiv);

				};  //End if Loop

			if (state === "still") {
        		$(this).attr("src", $(this).attr("data-animate"));
        		$(this).attr("data-state", "animate");
      		} else {
        		$(this).attr("src", $(this).attr("data-still"));
        		$(this).attr("data-state", "still");
        	};  //End If Loop

			};  //End for Loop

		});  //End .done Function

	}; //End displayCarInfo Function

	//Render Buttons in new divs for each item in array
	function renderBtns() {

		$("#divBtns").empty();

		for (var i = 0; i < cars.length; i++) {

			var add = $("<button>");

			add.addClass("car");

			add.addClass("data-state");

			add.attr("data-name", cars[i]);

			add.text(cars[i]);

			$("#divBtns").append(add);

		};  //End For Loop

	};  //End renderBtns Function

	//On.Click to display button names and input
	$("#add-car").on("click", function(event) {

		event.preventDefault();

		var car = $("#car-input").val().trim();

		cars.push(car);

		renderBtns();

		displayCarInfo(car);

		$(document).on("click", displayCarInfo);

	}); //End Add-Car.onClick Function

	$(document).on("click", ".car", displayCarInfo);

	renderBtns();

}); //End Document.ready