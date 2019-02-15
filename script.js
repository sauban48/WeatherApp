window.onload = function(){
  var xhttp = new XMLHttpRequest();
  var day = getCurrentDay();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var obj = JSON.parse(this.response);
    	document.getElementById("cityName").innerHTML = obj.name + ", " + obj.sys.country;
    	document.getElementById("day").innerHTML = day;
    	document.getElementById("weatherType").innerHTML = obj.weather[0].main;
    	temp = (obj.main.temp).toFixed(0);
    	document.getElementById("temperature").innerHTML = temp;
    	document.getElementById("humidity").innerHTML = "Humidity: " + obj.main.humidity + "%";
      var wind = obj.wind.speed;
      wind = wind * 3.6;
    	document.getElementById("wind").innerHTML = "Wind Speed: " + wind.toFixed(0) + " km/h";
      var icon = (obj.weather[0].icon).substring(0, 2);
      getIcon(icon);
    	forecast("Toronto");
    }
  }
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&APPID=d6df9c2a0c2ad73414182d522104f7b5", true);
  xhttp.send();
}

function getIcon(icon){
  switch(icon){ 
    case '01':
    document.getElementById("icon").outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", "icon");
    document.getElementById("img1").appendChild(elem);

    document.getElementById("icon").src = "icons/icons8-sun-filled-500.png";
    break;
    case '02':
    case '03':
    case '04':
    document.getElementById("icon").outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", "icon");
    document.getElementById("img1").appendChild(elem);
    document.getElementById("icon").src = "icons/icons8-cloud-100.png";
    break;
  
  
    case '09':
    case '10':
    document.getElementById("icon").outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", "icon");
    document.getElementById("img1").appendChild(elem);
    document.getElementById("icon").src = "icons/icons8-rain-filled-100.png";
    break;
  
    
    case '11':
    document.getElementById("icon").outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", "icon");
    document.getElementById("img1").appendChild(elem);
    document.getElementById("icon").src = "icons/icons8-storm-100.png";
    break;
  
  
    case '13':
    document.getElementById("icon").outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", "icon");
    document.getElementById("img1").appendChild(elem);
    document.getElementById("icon").src = "icons/icons8-snow-100.png";
    break;
  
  
    case '50':
    document.getElementById("icon").outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", "icon");
    document.getElementById("img1").appendChild(elem);
    document.getElementById("icon").src = "icons/icons8-haze-100.png";
    break;
  }
}

function getCurrentDay(){
	var j = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" );
 	var d = new Date();
  	return (j[d.getDay()]);
}

function getCelsius(){
	celsius = ((faren-32)*5/9).toFixed(0);
	document.getElementById("temperature").innerHTML = celsius;

	celsiush1 = ((farenh1 -32)*5/9).toFixed(0);
	document.getElementById("hi1").innerHTML = celsiush1;

	celsiush2 = ((farenh2 -32)*5/9).toFixed(0);
	document.getElementById("hi2").innerHTML = celsiush2;

	celsiush3 = ((farenh3 -32)*5/9).toFixed(0);
	document.getElementById("hi3").innerHTML = celsiush3;

	celsiush4 = ((farenh4 -32)*5/9).toFixed(0);
	document.getElementById("hi4").innerHTML = celsiush4;

	celsiush5 = ((farenh5 -32)*5/9).toFixed(0);
	document.getElementById("hi5").innerHTML = celsiush5;

  setActiveC();
}

function getFaren(){
	faren = ((temp * 9/5) +32).toFixed(0);
	document.getElementById("temperature").innerHTML = faren;

	farenh1 = ((hi1 * 9/5) +32).toFixed(0);
	document.getElementById("hi1").innerHTML = farenh1;

	farenh2 = ((hi2 * 9/5) +32).toFixed(0);
	document.getElementById("hi2").innerHTML = farenh2;
	
	farenh3 = ((hi3 * 9/5) +32).toFixed(0);
	document.getElementById("hi3").innerHTML = farenh3;

	farenh4 = ((hi4 * 9/5) +32).toFixed(0);
	document.getElementById("hi4").innerHTML = farenh4;

	farenh5 = ((hi5 * 9/5) +32).toFixed(0);
  document.getElementById("hi5").innerHTML = farenh5;
  setActiveF();
}

function setActiveF(){
  var element = document.getElementById("change1");
  element.classList.remove("active");
  var element2 = document.getElementById("change");
  element2 = element2.classList.add("active");

}

function setActiveC(){
  var element = document.getElementById("change");
  element.classList.remove("active");
  var element2 = document.getElementById("change1");
  element2 = element2.classList.add("active");
}


function search(){
  var city = document.getElementById("city").value;
  var xhttp = new XMLHttpRequest();
  var day = getCurrentDay();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var obj = JSON.parse(this.response);
    	document.getElementById("cityName").innerHTML = obj.name + ", " + obj.sys.country;
    	document.getElementById("day").innerHTML = day;
    	document.getElementById("weatherType").innerHTML = obj.weather[0].main;
    	temp = (obj.main.temp).toFixed(0);
    	document.getElementById("temperature").innerHTML = temp;
    	document.getElementById("humidity").innerHTML = "Humidity: " + obj.main.humidity + "%";
    	var wind = obj.wind.speed;
      wind = wind * 3.6;
      document.getElementById("wind").innerHTML = "Wind Speed: " + wind.toFixed(0) + " km/h";
      var icon = (obj.weather[0].icon).substring(0, 2);
      getIcon(icon);
    	forecast(city);
    }
  }
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=d6df9c2a0c2ad73414182d522104f7b5", true);
  xhttp.send();
  
}

function forecast(city){
  var xhttp = new XMLHttpRequest();
  var day = getCurrentDay();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.response);
      
      var icon = (obj.list[3].weather[0].icon).substring(0, 2);
      getIconForecast(icon, "icon2", "image1");

    	hi1 = (obj.list[3].main.temp).toFixed(0)
    	var day1 = currentDay(obj.list[3].dt_txt);
    	document.getElementById("day1").innerHTML = day1;
    	document.getElementById("hi1").innerHTML = hi1;

      var icon = (obj.list[11].weather[0].icon).substring(0, 2);
      getIconForecast(icon, "icon3", "image2");

    	hi2 = (obj.list[11].main.temp).toFixed(0)
    	var day2 = currentDay(obj.list[11].dt_txt);
    	document.getElementById("day2").innerHTML = day2;
    	document.getElementById("hi2").innerHTML = (obj.list[11].main.temp).toFixed(0);

      var icon = (obj.list[19].weather[0].icon).substring(0, 2);
      getIconForecast(icon, "icon4", "image3");

    	hi3 = (obj.list[19].main.temp).toFixed(0)
    	var day3 = currentDay(obj.list[19].dt_txt);
    	document.getElementById("day3").innerHTML = day3;
    	document.getElementById("hi3").innerHTML = (obj.list[19].main.temp).toFixed(0);

      var icon = (obj.list[27].weather[0].icon).substring(0, 2);
      getIconForecast(icon, "icon5", "image4");

    	hi4 = (obj.list[27].main.temp).toFixed(0)
    	var day4 = currentDay(obj.list[27].dt_txt);
    	document.getElementById("day4").innerHTML = day4;
    	document.getElementById("hi4").innerHTML = (obj.list[27].main.temp).toFixed(0);

      var icon = (obj.list[35].weather[0].icon).substring(0, 2);
      getIconForecast(icon, "icon6", "image5");

    	hi5 = (obj.list[35].main.temp).toFixed(0)
    	var day5 = currentDay(obj.list[35].dt_txt);
    	document.getElementById("day5").innerHTML = day5;
    	document.getElementById("hi5").innerHTML = (obj.list[35].main.temp).toFixed(0) ;

    	
    }
  }
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID=d6df9c2a0c2ad73414182d522104f7b5", true);
  xhttp.send();
}

function getIconForecast(icon, id, img){
  switch(icon){ 
    case '01':
    document.getElementById(id).outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", id);
    document.getElementById(img).appendChild(elem);

    document.getElementById(id).src = "icons/icons8-sun-filled-500.png";
    break;
    case '02':
    case '03':
    case '04':
    document.getElementById(id).outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", id);
    document.getElementById(img).appendChild(elem);
    document.getElementById(id).src = "icons/icons8-cloud-100.png";
    break;
  
  
    case '09':
    case '10':
    document.getElementById(id).outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", id);
    document.getElementById(img).appendChild(elem);
    document.getElementById(id).src = "icons/icons8-rain-filled-100.png";
    break;
  
    
    case '11':
    document.getElementById(id).outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", id);
    document.getElementById(img).appendChild(elem);
    document.getElementById(id).src = "icons/icons8-storm-100.png";
    break;
  
  
    case '13':
    document.getElementById(id).outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", id);
    document.getElementById(img).appendChild(elem);
    document.getElementById(id).src = "icons/icons8-snow-100.png";
    break;
  
  
    case '50':
    
    document.getElementById(id).outerHTML = "";
    var elem = document.createElement("img");
    elem.setAttribute("id", id);
    document.getElementById(img).appendChild(elem);
    document.getElementById(id).src = "icons/icons8-haze-100.png";
    break;
  }
}

function currentDay(text){
	var d = new Date(text);
	var day = d.getDay();
	var j = new Array( "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
	return j[day];
}