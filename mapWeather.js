
    mapboxgl.accessToken = 'pk.eyJ1IjoidGluc2xleWdsIiwiYSI6ImNqYnhyYzIzajJ1NWEyd21mY2g5NXp3NnUifQ.NdmV2VFJQ3C6CvFi_TjDgg';
// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [lon, lat] format
  center: [-3.1793, 51.478433],
  // initial zoom
  zoom: 14
});


var stores = {
        
        
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -3.1793,
          51.478433
        ]
      },
      "properties": {
        "phoneFormatted": "029 2023 1684",
        "address": "BrewDog Cardiff, 31 Westgate St",
        "city": "Cardiff",
        "country": "United Kingdom",
        "postalCode": "CF10 1NW",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -2.097806,
        57.149449
        ]
      },
      "properties": {
        "phoneFormatted": "01224 631223",
        "address": "BrewDog Aberdeen, 17 Gallowgate",
        "city": "Aberdeen",
        "country": "Scotland",
        "postalCode": "AB25 1EB",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.901392,
        52.476813
        ]
      },
      "properties": {
        "phoneFormatted": "0121 616 1339",
        "address": "BrewDog Birmingham, 81-87 John Bright St",
        "city": "Birmingham",
        "country": "England",
        "postalCode": "B1 1BL",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1355416,
          50.8251094
        ]
      },
      "properties": {
        "phoneFormatted": "01273 691 919",
        "address": "BrewDog Brighton, 52-54 Grand Parade",
        "city": "Brighton",
        "country": "England",
        "postalCode": "BN2 9QA",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -2.59264,
        51.453435
        ]
      },
      "properties": {
        "phoneFormatted": "0117 927 9258",
        "address": "BrewDog Bristol, 58 Baldwin St",
        "city": "Bristol",
        "country": "England",
        "postalCode": "BS1 1QW",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -0.140829,
        51.538491
        ]
      },
      "properties": {
        "phoneFormatted": "02072 844 626",
        "address": "BrewDog Camden, 113 Bayham Street",
        "city": "London",
        "country": "England",
        "postalCode": "NW1 0ND",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -2.096699,
        57.147124
        ]
      },
      "properties": {
        "phoneFormatted": "01224 586 650",
        "address": "BrewDog Castlegate, 5-9 Union St",
        "city": "Aberdeen",
        "country": "Scotland",
        "postalCode": "AB11 5BU",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -0.163008,
        51.461018
        ]
      },
      "properties": {
        "phoneFormatted": "02072 236 346",
        "address": "BrewDog Clapham Junction, 11- 13 Battersea Rise",
        "city": "London",
        "country": "England",
        "postalCode": "SW11 1HG",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -0.1056,
        51.5237
        ]
      },
      "properties": {
        "phoneFormatted": "02076 082 989",
        "address": "BrewDog Clerkenwell, 45-47 Clerkenwell Road",
        "city": "London",
        "country": "England",
        "postalCode": "EC1M 5RS",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -4.247687,
        55.859726
        ]
      },
      "properties": {
        "phoneFormatted": "01415 526 363",
        "address": "BrewDog DogHouse Merchant City, 99 Hutcheson Street",
        "city": "Glasgow",
        "country": "Scotland",
        "postalCode": "G1 1SN",

      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -2.971102,
        56.463091
        ]
      },
      "properties": {
        "phoneFormatted": "01382 221738",
        "address": "BrewDog Dundee, Panmure St",
        "city": "Dundee",
        "country": "Scotland",
        "postalCode": "DD1 1DU",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -3.189578,
        55.948502
        ]
      },
      "properties": {
        "phoneFormatted": "0131 220 6517",
        "address": "BrewDog Edinburgh, 143 Cowgate, Edinburgh, Scotland EH1 1JT, United Kingdom",
        "city": "Edinburgh",
        "country": "Scotland",
        "postalCode": "EH1 1JT",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -4.291983,
        55.868211
        ]
      },
      "properties": {
        "phoneFormatted": "0141 334 7175",
        "address": "BrewDog Glasgow, 1397 Argyle St",
        "city": "Glasgow",
        "country": "Scotland",
        "postalCode": "G3 8AN",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.539862,
        53.795546
        ]
      },
      "properties": {
        "phoneFormatted": "0113 246 1611",
        "address": "BrewDog Leeds, White Cloth Hall",
        "city": "Leeds",
        "country": "England",
        "postalCode": "LS1 2HD",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.135098,
        52.633473
        ]
      },
      "properties": {
        "phoneFormatted": "01358 724924",
        "address": "BrewDog Leicester, 8 Friar Lane",
        "city": "Leicester",
        "country": "England",
        "postalCode": "LE1 5JE",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -2.977182,
        53.401747
        ]
      },
      "properties": {
        "phoneFormatted": "01382 221738",
        "address": "BrewDog Liverpool, 8 Colquitt St",
        "city": "Liverpool",
        "country": "England",
        "postalCode": "L1 4DE",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -2.247297,
        53.478034
        ]
      },
      "properties": {
        "phoneFormatted": "0161 832 1922",
        "address": "BrewDog Manchester, 35 Peter St",
        "city": "Manchester",
        "country": "England",
        "postalCode": "M2 5BG",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.609657,
        54.970008
        ]
      },
      "properties": {
        "phoneFormatted": "0191 261 6586",
        "address": "BrewDog Newcastle, 16 Dean St",
        "city": "Newcastlew",
        "country": "England",
        "postalCode": "NE1 1PQ",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        1.297268,
        52.630215
        ]
      },
      "properties": {
        "phoneFormatted": "01603 624317",
        "address": "BrewDog Norwich, 1 Queen Street",
        "city": "Norwich",
        "country": "England",
        "postalCode": "NR2 4SQ",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.143993,
        52.954328
        ]
      },
      "properties": {
        "phoneFormatted": "0115 958 3613",
        "address": "BrewDog Nottingham, 20-22 Broad St",
        "city": "Nottingham",
        "country": "England",
        "postalCode": "NG1 3AL",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.477141,
        53.379502
        ]
      },
      "properties": {
        "phoneFormatted": "0114 241 4193",
        "address": "BrewDog Sheffield, 108 - 110 Devonshire St",
        "city": "Sheffield",
        "country": "England",
        "postalCode": "S1 4GY",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -0.224651,
        51.502848
        ]
      },
      "properties": {
        "phoneFormatted": "02087 498 094",
        "address": "BrewDog Shepherd's Bush, 15-19 Goldhawk Road",
        "city": "London",
        "country": "England",
        "postalCode": "W12 8QQ",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -0.074027,
        51.523986
        ]
      },
      "properties": {
        "phoneFormatted": "020 7729 8476",
        "address": "BrewDog Shoreditch, 51-55 Bethnal Green Rd",
        "city": "London",
        "country": "England",
        "postalCode": "E1 6JY",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.5387645,
        53.8010952
        ]
      },
      "properties": {
        "phoneFormatted": "01133 912 950",
        "address": "BrewDog North Street Leeds, Crispin House, New York Road",
        "city": "Leeds",
        "country": "England",
        "postalCode": "LS2 7PF",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -3.938752,
        56.118839
        ]
      },
      "properties": {
        "phoneFormatted": "01786 440 043",
        "address": "BrewDog Stirling, 7 Baker Street",
        "city": "Stirling",
        "country": "Scotland",
        "postalCode": "FK8 1AL",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -0.1393866,
    51.5150401
        ]
      },
      "properties": {
        "phoneFormatted": "02072 878 029",
        "address": "BrewDog Soho, 21 Poland St",
        "city": "London",
        "country": "England",
        "postalCode": "W1F 8QG",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.4077383,
        50.9132566
        ]
      },
      "properties": {
        "phoneFormatted": "023 8022 0895",
        "address": "BrewDog Southampton, 18a Upper Banister Street",
        "city": "Southampton",
        "country": "England",
        "postalCode": "SO15 2EF",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.0926239,
        53.9563645
        ]
      },
      "properties": {
        "phoneFormatted": "01904 620773",
        "address": "BrewDog York, 130-134 Micklegate, York, YO1 6JX",
        "city": "York",
        "country": "England",
        "postalCode": "YO1 6JX",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -1.2394092,
        51.7480816
        ]
      },
      "properties": {
        "phoneFormatted": "01865 580176",
        "address": "BrewDog Oxford, The Corridor, 119 Cowley Rd, Oxford OX4 1HU",
        "city": "Oxford",
        "country": "England",
        "postalCode": "OX4 1HU",
      }
    }
  ]
}





map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addLayer({
    id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: stores
    },
    layout: {
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });
      buildLocationList(stores);
});

// Add an event listener for when a user clicks on the map
map.on('click', function(e) {
  // Query all the rendered points in the view
  var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
  if (features.length) {
    var clickedPoint = features[0];
    // 1. Fly to the point
    flyToStore(clickedPoint);
    // 2. Close all other popups and display popup for clicked store
    createPopUp(clickedPoint);
    // 3. Highlight listing in sidebar (and remove highlight for all other listings)
    var activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }
    // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
    var selectedFeature = clickedPoint.properties.address;

    for (var i = 0; i < stores.features.length; i++) {
      if (stores.features[i].properties.address === selectedFeature) {
        selectedFeatureIndex = i;
      }
    }
    // Select the correct list item using the found index and add the active class
    var listing = document.getElementById('listing-' + selectedFeatureIndex);
    listing.classList.add('active');
  }
});

function getWeather(currentFeature) {

  if (document.body.contains(document.getElementById("weatherReport"))) {
    document.getElementById("weather_sec").removeChild(document.getElementById("weatherReport"));
  }

  var lat = currentFeature.geometry.coordinates[1];
  var lon = currentFeature.geometry.coordinates[0];

  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?"
  var weatherAppID = "956f59cfe5c0751620669dfdc9bedb32"
  var weatherSearch = weatherURL + 'lat=' + lat + '&lon=' + lon + "&APPID=" + weatherAppID + "&units=metric"

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", weatherSearch);
  xhttp.addEventListener('load', function(){
  var response = JSON.parse(this.response);
  console.log(response);

  //code for checking level of humidity and creating variable
  if (response.main.humidity <= 25) {
    var currentHumidity = document.createTextNode(", with a low humidity of " + response.main.humidity + "%.");
  } else if (response.main.humidity > 25 && response.main.humidity <= 50) {
    var currentHumidity = document.createTextNode(", with an average humidity of " + response.main.humidity + "%.");
  } else if (response.main.humidity > 50 && response.main.humidity <= 75) {
    var currentHumidity = document.createTextNode(", with a high humidity of " + response.main.humidity + "%.");
  } else {
    var currentHumidity = document.createTextNode(", with a very high humidity of " + response.main.humidity + "%.");
  }

  //code for checking windspeed and creating variable
  if (response.wind.speed < 0.3) {
    var currentWindSpeed = document.createTextNode(" It's a calm day with a wind speed of " + response.wind.speed + "m/s.");
  } else if (response.wind.speed > 0.3 && response.wind.speed < 3.3) {
    var currentWindSpeed = document.createTextNode(" There's a light breeze with a wind speed of " + response.wind.speed + "m/s.");
  }
  else if (response.wind.speed > 3.3 && response.wind.speed < 7.9) {
    var currentWindSpeed = document.createTextNode(" There's a moderate wind with a speed of " + response.wind.speed + "m/s.");
  }
  else if (response.wind.speed > 7.9 && response.wind.speed < 13.8) {
    var currentWindSpeed = document.createTextNode(" There's a strong wind with a speed of " + response.wind.speed + "m/s.");
  }
  else if (response.wind.speed > 13.8 && response.wind.speed < 17.1) {
    var currentWindSpeed = document.createTextNode(" Theres a high wind with a speed of " + response.wind.speed + "m/s.");
  }
  else if (response.wind.speed > 17.1 && response.wind.speed < 20.7) {
    var currentWindSpeed = document.createTextNode(" Expect gale force winds of " + response.wind.speed + "m/s.");
  } else {
    var currentWindSpeed = document.createTextNode(" Probably a good idea to stay inside, with winds at " + response.wind.speed + "m/s.");
  }

  //code for creating conclusion on weather, and creating variable
  if (response.main.temp > 10 & response.main.temp < 40 & response.wind.speed < 20.7 & response.weather[0].main != "Rain") {
    var weatherConclusion = document.createTextNode("Seems like great weather for some drinks in the sun, why not head out?");
  } else if (response.main.temp < 10 & response.main.temp > 4 & response.wind.speed < 20.7 & response.weather[0].main != "Rain") {
    var weatherConclusion = document.createTextNode("Not the best weather for drinking outside, but you can still risk it.");
  } else if (response.main.temp < 4 & response.wind.speed < 20.7) {
    var weatherConclusion = document.createTextNode("Seems like the kind of weather where you'd rather be inside maybe?");
  } else {
    var weatherConclusion = document.createTextNode("Definaely not a good time to be outside for a drink, we'd give this time a miss.");
  }

  var currentWeather = document.createTextNode("Current weather description: " + response.weather[0].main);
  var currentConditions = document.createTextNode("The current temperature is " + response.main.temp +
   " degrees celsius");
  var currentName = document.createTextNode(response.name);

  var createdDiv = document.createElement("div");
  createdDiv.setAttribute("id", "weatherReport");
  var weatherSectionDiv = document.getElementById("weather_sec");
  weatherSectionDiv.appendChild(createdDiv); //code to delete weather div then recreate each click

  var currentNameHeading = document.createElement("h3");
  currentNameHeading.appendChild(currentName);
  currentNameHeading.classList.add("weatherHeadings");

  var currentConditionsPara = document.createElement("p");
  currentConditionsPara.appendChild(currentConditions);
  currentConditionsPara.appendChild(currentHumidity);
  currentConditionsPara.appendChild(currentWindSpeed);
  currentConditionsPara.classList.add("weatherParagraphs");

  var currentWeatherPara = document.createElement("p");
  currentWeatherPara.appendChild(currentWeather);
  currentWeatherPara.classList.add("weatherParagraphs");

  var weatherConclusionPara = document.createElement("p");
  weatherConclusionPara.appendChild(weatherConclusion);
  weatherConclusionPara.classList.add("weatherParagraphs");

  createdDiv.appendChild(currentNameHeading);
  createdDiv.appendChild(currentWeatherPara);
  createdDiv.appendChild(currentConditionsPara);
  createdDiv.appendChild(weatherConclusionPara);

  })
  xhttp.send();
  }

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  // Check if there is already a popup on the map and if so, remove it
  if (popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>BrewDog</h3>' +
      '<h4>' + currentFeature.properties.address + '</h4>')
    .addTo(map);
}

function buildLocationList(data) {
  // Iterate through the list of stores
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    // Shorten data.feature.properties to just `prop` so we're not
    // writing this long form over and over again.
    var prop = currentFeature.properties;
    // Select the listing container in the HTML and append a div
    // with the class 'item' for each store
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing-' + i;

    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement('p'));
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.address;

    // Create a new div with the class 'details' for each store
    // and fill it with the city and phoneFormatted number
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.city;
    if (prop.phoneFormatted) {
      details.innerHTML += ' &middot; ' + prop.phoneFormatted;
    }
    // Add an event listener for the links in the sidebar listing
link.addEventListener('click', function(e) {
  // Update the currentFeature to the store associated with the clicked link
  var clickedListing = data.features[this.dataPosition];
  // 1. Fly to the point associated with the clicked link
  flyToStore(clickedListing);
  // 2. Close all other popups and display popup for clicked store
  createPopUp(clickedListing);
  getWeather(clickedListing);
  // 3. Highlight listing in sidebar (and remove highlight for all other listings)
  var activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
    activeItem[0].classList.remove('active');
  }
  this.parentNode.classList.add('active');
})
  }
}
