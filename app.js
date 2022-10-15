const request= require('request')
const geocode= require('../weather-app/utils/geocode')
const forecast=require('../weather-app/utils/forecast')
const address=process.argv[2]

//console.log(process.argv)
if(!address){
    console.log('Please provide an  address')
}else{
    geocode(address,(error,data) =>{
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
}