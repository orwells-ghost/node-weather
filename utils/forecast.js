const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/788e9a14778e9badf24e30a4697ce191/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long)
    
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (response.body.error) {
            callback('Error with weather location look up', undefined)
        }
        else {
            callback(undefined, {
                currentTemp: response.body.currently.temperature,
                precipProb: response.body.currently.precipProbability,
                forecastString: 'The current temperature is ' + response.body.currently.temperature + ". There is a " + Math.round(response.body.currently.precipProbability * 100) + "% chance of rain."
            })
        }
    })
}

module.exports = forecast