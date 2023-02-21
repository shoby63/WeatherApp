const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ae3694ba2mshd6401ce3ba3a3edp1ce1a4jsn40c02ccd0c74',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
m_cpct.innerHTML=response.cloud_pct
m_feels.innerHTML=response.feels_like;
m_humid.innerHTML=response.humidity;
m_mxtemp.innerHTML=response.max_temp;
m_mntemp.innerHTML=response.min_temp;
m_sunrise.innerHTML=response.sunrise;
m_sunset.innerHTML=response.sunset;
m_temp.innerHTML=response.temp;
m_wdeg.innerHTML=response.wind_degrees;
m_wspd.innerHTML=response.wind_speed;
    })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Uttarakhand', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        d_cpct.innerHTML=response.cloud_pct
       d_feels.innerHTML=response.feels_like;
        d_humid.innerHTML=response.humidity;
        d_mxtemp.innerHTML=response.max_temp;
        d_mntemp.innerHTML=response.min_temp;
        d_sunrise.innerHTML=response.sunrise;
        d_sunset.innerHTML=response.sunset;
        d_temp.innerHTML=response.temp;
        d_wdeg.innerHTML=response.wind_degrees;
        d_wspd.innerHTML=response.wind_speed;
    })
	.catch(err => console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        s_cpct.innerHTML=response.cloud_pct
        s_feels.innerHTML=response.feels_like;
        s_humid.innerHTML=response.humidity;
        s_mxtemp.innerHTML=response.max_temp;
        s_mntemp.innerHTML=response.min_temp;
        s_sunrise.innerHTML=response.sunrise;
        s_sunset.innerHTML=response.sunset;
       s_temp.innerHTML=response.temp;
        s_wdeg.innerHTML=response.wind_degrees;
        s_wspd.innerHTML=response.wind_speed;
    })
	.catch(err => console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=California', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        c_cpct.innerHTML=response.cloud_pct
        c_feels.innerHTML=response.feels_like;
        c_humid.innerHTML=response.humidity;
       c_mxtemp.innerHTML=response.max_temp;
        c_mntemp.innerHTML=response.min_temp;
        c_sunrise.innerHTML=response.sunrise;
        c_sunset.innerHTML=response.sunset;
        c_temp.innerHTML=response.temp;
        c_wdeg.innerHTML=response.wind_degrees;
        c_wspd.innerHTML=response.wind_speed;
    })
	.catch(err => console.error(err));

const getWeather=(city)=>{
    title1.innerHTML=city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        c_pct.innerHTML=response.cloud_pct
feels.innerHTML=response.feels_like
humid.innerHTML=response.humidity
max_temp.innerHTML=response.max_temp
min_temp.innerHTML=response.min_temp
Sunrise.innerHTML=response.sunrise
sunset.innerHTML=response.sunset
temp.innerHTML=response.temp
wind_degree.innerHTML=response.wind_degrees
wind_speed.innerHTML=response.wind_speed
    })
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault();    
    getWeather(city.value);
})
getWeather("Bangalore");
