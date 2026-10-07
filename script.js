const myButton=document.getElementById("myButton");
const temperature=document.getElementById("temperature");
const humidity=document.getElementById("Humidity");
const speed=document.getElementById("speed");
const p=document.getElementById("p");

const URL = "https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current=temperature_2m,relative_humidity_2m,wind_speed_10m";

const getfact =async ()=>{

p.textContent="Wait......"

setTimeout(async()=>{

let response=await fetch(URL);

let data=await response.json();

temperature.innerHTML=data.current.temperature_2m+" %C";

Humidity.innerHTML=data.current.relative_humidity_2m+" %";

Speed.innerHTML=data.current.wind_speed_10m+" km/hr";


},5000);
}

myButton.addEventListener("click",getfact);

