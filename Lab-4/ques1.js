function some() {
    const city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ee518586b258851fbeb1da4e65e1a87`)
        .then(response => {
            return response.json(); 
        })
        .then((data) => {
            const { name, main } = data;
            const { temp, humidity } = main;

            console.log(name, temp, humidity);

            document.getElementById('weather').innerHTML = `
                <p>Location: ${name}</p>
                <p>Temperature: ${temp} °C</p>
                <p>Humidity: ${humidity} %</p>
            `;

            plotWeather(temp, humidity);
        });
}

function plotWeather(temp, humidity){
    const config = {
        type: 'bar',
        data: {
            labels: ['Temperature', 'Humidity'],
            datasets: [{
                data: [temp, humidity]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, config);
    
}



some();
