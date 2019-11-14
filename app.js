const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const address = process.argv[2] 

// Using return in the error if statement will end the execution of this function
// We destructure the data object coming from geocode.js
geocode(address || 'Portland', (error, { latitude, longitude, location }) => {
    if (error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        
        console.log(location)
        console.log(forecastData)
    })
})