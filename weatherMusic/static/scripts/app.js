let api = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "b8051e954bebf8731bb4302de9367478";

const getWeather = async () => {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
    // let hi = document.getElementById('hi');

    temperature.innerHTML = "Locating...";
    // hi.innerHTML = ""

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            latitude = pos.coords.latitude;
            longitude = pos.coords.longitude;
            
            let urlWeather = api + "?lat=" +latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";

            console.log(urlWeather);
            
            fetch(urlWeather)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                let temp = data.main.temp;
                temperature.innerHTML = 'Temperature: ' + temp + "° F";
                location.innerHTML =
                    'City: ' + data.name + ", " + data.sys.country + " (" + data.coord.lat + "°, " + data.coord.lon + "°)" ;
                description.innerHTML = 'Currents Weather: ' + data.weather[0].main;

                let weatherData = JSON.stringify(data)
                localStorage.setItem('weatherData', weatherData);
            })
            .then(test());
        }, 
        () => {
            document.getElementById("hi").innerHTML = 'Unable to retrive your current location';
            console.log('can\'t find locaiton');
        });
}

const test = () => {
    // document.getElementById('hi').innerHTML = localStorage.getItem('weatherData');
    console.log(localStorage.getItem('weatherData'));
}

const main = async () => {
    getWeather()
    
}

main();
// let dat = getWeather().then(data=> {return data})
// console.log(dat)

//     let getPosition = function () {
//         return new Promise(function (resolve, reject) {
//           navigator.geolocation.getCurrentPosition(resolve, reject);
//         });
//     }

//     let position = await getPosition()

//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;

//     urlWeather = api + "?lat=" +latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";
    
//     console.log(urlWeather);
    
//     let weatherData = await fetch(urlWeather)
//     let data = await weatherData.json()
    
//     let temp = data.main.temp;
//     temperature.innerHTML = 'Temperature: ' + temp + "° F";
//     location.innerHTML =
//         'City: ' + data.name + ", " + data.sys.country + " (" + data.coord.lat + "°, " + data.coord.lon + "°)" ;
//     description.innerHTML = 'Currents Weather: ' + data.weather[0].main;

//     return data;