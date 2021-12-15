

const inputText = document.querySelector('.inputText');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');


const API_Key = "39eb67edbbe468b4f408c989dee2e743";


button.addEventListener('click', () => {

  
    const cityInput = inputText.value;
    // console.log(cityInput);
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);

           
            inputText.value = " ";

          
            showData.innerHTML = `
                                <ul>
                                    <li class="city">${data.name}</li>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="temp">${data.main.temp}°C</li>
                                </ul>
                                `; 

        });

});