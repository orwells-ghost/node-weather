const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const address = process.argv[2] 

// Using return in the error if statement will end the execution of this function
geocode(address || 'Portland', (error, data) => {
    if (error) {
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        
        console.log(data.location)
        console.log(forecastData)
    })
})
