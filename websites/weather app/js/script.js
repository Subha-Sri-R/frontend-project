var month=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
{
    var day=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var d = new Date();
    document.getElementById('year').innerHtml = d.getFullYear();
    document.getElementById('date').innerHtml = d.getdate();
    document.getElementById('month').innerHTML = month[d.getMonth()];
    document.getElementById('year').innerHtml = day[d.getDay()];

    let cityName = "visakhapatnam";

    function cityNameChange(){
        cityName = document.getElementById("city-name").value;
        run();
    }
    var temp;
    let feel;
    const apikey ='0cefbdd8089c7b724b58eac94e84c704';

    function run(){
        let city = cityName;
        let apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey};
         fetch(apiUrl)
        .then(response =>  response.json()).then(data => {
            feel = data.weather[0].main;
            document.getElementbyId('feel').innerHTML = feel;
            name=data.name;
            document.getElementById('name').innerHTML = "Weather today at " + name;
            temp -= 273.15;
            document.getElementById('temp').innerHTML = Math.floor();temp;
        })
        .catch(error => alert("Enter correct city name"));
}
run();
}