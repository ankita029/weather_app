const request = require('request')
const weather = (place) => {
    const url = 'http://api.weatherstack.com/current?access_key=3cf9f825ce845e247d6140d39fba91d1&query='+place
    request({url, json:true},(error,res)=>{

        console.log(`${res.body.current.weather_descriptions[0]} 
        Temperature is ${res.body.current.temperature}
        degrees but feels like ${res.body.current.feelslike}degree`)
    
    }
       
    )}

weather('durg')