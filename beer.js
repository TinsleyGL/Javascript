	var counter = 1
	
	var next_button = document.querySelector('#next_button');
	next_button.addEventListener('click', function(){
	console.log(counter);

	counter += 1;

	if (document.body.contains(document.getElementById("div2"))) {
		document.getElementById("div1").removeChild(document.getElementById("div2"));
	}


	var base_url = "https://api.punkapi.com/v2/beers?page=" + counter + "&per_page=10&";

	var params = {}

	if (document.querySelector('#food_search_term').value.length > 0) {
		params.food = document.querySelector('#food_search_term').value;
	}

	if (document.querySelector('#name_search_term').value.length > 0) {
		params.beer_name = document.querySelector('#name_search_term').value;
	}

	if (document.querySelector('#alco_search_term').value.length > 0) {
		params.abv_lt = document.querySelector('#alco_search_term').value;
	}

	var query_url = base_url + encodeParameters(params);
	console.log(query_url);

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", query_url);

	xhttp.addEventListener('load', function(){
	var response = JSON.parse(this.response);
	console.log(response);
	processResponse(response)
	if (response.length == 0) {
		console.log('no more info')
	}
	})

	xhttp.send();
	})



	var search_button = document.querySelector('#search_button');
	search_button.addEventListener('click', function(){

	counter = 1;
	console.log(counter);


	if (document.body.contains(document.getElementById("div2"))) {
		document.getElementById("div1").removeChild(document.getElementById("div2"));
	}


	var base_url = "https://api.punkapi.com/v2/beers?page=1&per_page=10&";

	var params = {}

	if (document.querySelector('#food_search_term').value.length > 0) {
		params.food = document.querySelector('#food_search_term').value;
	}

	if (document.querySelector('#name_search_term').value.length > 0) {
		params.beer_name = document.querySelector('#name_search_term').value;
	}

	if (document.querySelector('#alco_search_term').value.length > 0) {
		params.abv_lt = document.querySelector('#alco_search_term').value;
	}

	var query_url = base_url + encodeParameters(params);
	console.log(query_url);

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", query_url);

	xhttp.addEventListener('load', function(){
	var response = JSON.parse(this.response);
	console.log(response);
	processResponse(response)
	})

	xhttp.send();
	})



		// Function to ensure parameters used in request are encoded correctly
	var encodeParameters = function(params) {
	    // join all key value pairs and store in an array
	    var strArray = [];
	    for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	            var paramString = encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
	            strArray.push(paramString);
	        }
	    }
	    // join everything in the array together
	    return strArray.join("&");
	}


			var processResponse = function(response) {
			var drinks = response;
			var the_div = document.createElement("div"); // creates div element 
			the_div.setAttribute("id", "div2"); // sets id of created div to div2
			var element = document.getElementById("div1"); //assigns var element to div1
			element.appendChild(the_div); //adds div2 to div 1

			for (var i = 0; i < drinks.length; i++) {
				var drinkname = document.createTextNode(drinks[i].name);
				var drinkDescrip = document.createTextNode("Description: " + drinks[i].description);
				var drinkTag = document.createTextNode(drinks[i].tagline);
				var drinkAbv = document.createTextNode("ABV: " + drinks[i].abv);
				var drinkFood = document.createTextNode("Food pairings: " + drinks[i].food_pairing[0] + 
				", " + drinks[i].food_pairing[1] + ", " + drinks[i].food_pairing[2] + ".");


				var button = document.createElement("button"); //add element called button
				button.classList.add("accordion"); //add class accordion to button
				button.appendChild(drinkname); //adds text node to button element
				the_div.appendChild(button); //adds accordion button to div1

				var infoDiv = document.createElement("div"); //create the div to hold all drink info
				infoDiv.classList.add("panel");
				the_div.appendChild(infoDiv);

				var drinkDescripPara = document.createElement("p");
				drinkDescripPara.appendChild(drinkDescrip);
				drinkDescripPara.classList.add("infoParagraphs"); //add class 

				var drinkAbvPara = document.createElement("p");
				drinkAbvPara.appendChild(drinkAbv);
				drinkAbvPara.classList.add("infoParagraphs");

				var drinkFoodPara = document.createElement("p");
				drinkFoodPara.appendChild(drinkFood);
				drinkFoodPara.classList.add("infoParagraphs");



				infoDiv.appendChild(drinkDescripPara);
				infoDiv.appendChild(drinkAbvPara);
				infoDiv.appendChild(drinkFoodPara);



			}

			var acc = document.getElementsByClassName("accordion");

			for (var i = 0; i < acc.length; i++) {
			    acc[i].addEventListener("click", function() {
			        /* Toggle between adding and removing the "active" class,
			        to highlight the button that controls the panel */
			        this.classList.toggle("active");

			        /* Toggle between hiding and showing the active panel */
			        var panel = this.nextElementSibling;
			        if (panel.style.display === "block") {
			            panel.style.display = "none";
			        } else {
			            panel.style.display = "block";
			        }
			    });
			}
		}











