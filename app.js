const request= require('request')
const geocode= require('../weather-app/utils/geocode')
const forecast=require('../weather-app/utils/forecast')


 



geocode('Kochi,India',(error,data) =>{
    if(error){
        return console.log(error)
    }
    forecast(data.latitude,data.longitude,(error,forecastdata) =>{
        if(error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastdata)
    })
})