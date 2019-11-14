const request = require('request')

const weatherUrl = 'https://api.darksky.net/forecast/788e9a14778e9badf24e30a4697ce191/37.8267,-122.4233'

// Since we set json to true, json will be parsed for us automatically
request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    }
    else if (response.body.error) {
        console.log('Unable to find location')
    }
    else {
        console.log('The current temperature is ' + response.body.currently.temperature + ". There is a " + Math.round(response.body.currently.precipProbability * 100) + "% chance of rain.")
    }
})

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiMTIzcnlhbnBrIiwiYSI6ImNrMndwZzNnMzBoeWEzZHBnZ3E2NnAxN2MifQ.BvsO4hLTI_FEq-GN_uSg4w&limit=1'

request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    }
    else if (response.body.features.length === 0) {
        console.log('Unable to find location')
    }
    else {
        const latitude = response.body.features[0].geometry.coordinates[1]
        const longitude = response.body.features[0].geometry.coordinates[0]
        console.log(`Latitude is ${latitude} and longitude is ${longitude}`)
    }
})