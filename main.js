

let city = document.querySelector(".city");
let weatherCont = document.querySelector("h1");
let cloud = document.querySelector("h2")
let img = document.querySelector(".img");

let humidityCont = document.querySelector(".humidity");
let pressureCont = document.querySelector(".pressure");

let usdCont = document.querySelector(".usd");





let Kyiv = 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=98bd16d4aef904eb5b74688d61ad41f3&units=metric&lang=ua';
let usd = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=usd&json';


fetch(Kyiv)
.then(res => res.json())
.then(({main, name, weather}) => {
        city.innerHTML = name;
        weatherCont.innerHTML = Math.round(main.temp) + '&deg';
        cloud.innerHTML = weather[0].description;
        img.innerHTML = '<img src="http://openweathermap.org/img/wn/' + weather[0]['icon'] +'@2x.png"/>'

        humidityCont.innerHTML = main.humidity + '&#37';
        pressureCont.innerHTML = main.pressure + ' гектопаскаль';
    }
)

fetch(usd)
    .then(response => response.json())
    .then( json => {
        usdCont.innerHTML = json[0].rate;

        }
    )