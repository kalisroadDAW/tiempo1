let weather={API_KEY: "9a01bb2b77e6f069e05bb9034e1d22cb",

fetchweather: function(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+this.API_KEY+"&lang=Spanish"
        //"http://api.openweathermap.org/data/2.5/weather?q="+ city+ "lang=sp, es&appid="+this.API_KEY
        )
       

.then((response)=>response.json())
.then((data)=>this.displayWeather(data))},
displayWeather: function(data){
    const {name} = data;
    const {icon,description} =data.weather[0];
    const{temp,humidity,pressure} = data.main;
    const{speed} = data.wind;
    console.log(name,icon,description,temp,humidity,pressure,speed);
    document.querySelector(".city").innerText = "El tiempo en " + name;
    document.querySelector(".icon").src= "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
    document.querySelector(".temp").innerText= parseInt(temp)-273 + "º";
    document.querySelector(".description").innerText = description;
    document.querySelector(".hum").innerText =humidity + " % de humedad";
    document.querySelector(".wind").innerText=speed + " m/s";
    document.querySelector(".press").innerText=pressure + " hPa";


},

search: function(){
    this.fetchweather(document.querySelector(".selector").value);
}



};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();

});
