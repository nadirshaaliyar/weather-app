const request= require('request')
const geocode= require('../weather-app/utils/geocode')
const forecast=require('../weather-app/utils/forecast')




// const url = "http://api.weatherstack.com/current?access_key=0741a92dc32985dd054f1be829b56b30&query=37.8267,-122.4233&units=m"
// request({url:url,json:true}, (error,response)=>{
//     if(error){
//         console.log('Unable to connect to the service!')
//     }else if(response.body.error){
//         console.log('Unable to find the location')
//     }else{
//     console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out.it feels like '+response.body.current.feelslike+' degrees out.')
//     }
// })
forecast(9.93137,76.267376,(error,data) =>{
    console.log('Error',error)
    console.log('Data:',data)
}) 



// geocode('Kochi,India',(error,data) =>{
//     console.log('Error',error)
//     console.log('Data',data)
// })