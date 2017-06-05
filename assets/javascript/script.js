//IDs:
//.container
//#divBtns
//#car-form
//#car-input
//#add-car
//#cars-view

$(document).ready(function() {

	var APIkey = "dc6zaTOxFJmzC";

	var cars = [
		"Dodge Caliber",
		"Ford Mustang",
		"Chevy Camero",
		"Dodge Challenger",
		"Plymouth Barracuda",
		"Dodge Dart",
		"AMC Javelin",
		"Chevy Corvette",
		"Pontiac Firebird",
		"Chevy Chevelle",
		];

	function displayCarInfo() {

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

			};  //End for Loop

		});  //End .done Function

	}; //End displayCarInfo Function

	function renderBtns() {

		$("#divBtns").empty();

		for (var i = 0; i < cars.length; i++) {

			var add = $("<button>");

			add.addClass("car");

			add.attr("data-name", cars[i]);

			add.text(cars[i]);

			$("#divBtns").append(add);

		};  //End For Loop

	};  //End renderBtns Function

	$("#add-car").on("click", function(event) {

		event.preventDefault();

		var car = $("#car-input").val().trim();

		cars.push(car);

		renderBtns();

		displayCarInfo(car);

	}); //End Add-Car.onClick Function

	$(document).on("click", ".car", displayCarInfo);

	renderBtns();

}); //End Document.ready