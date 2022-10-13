const request= require('request')
// const url = "http://api.weatherstack.com/current?access_key=0741a92dc32985dd054f1be829b56b30&query=37.8267,-122.4233&units=f"
// request({url:url,json:true}, (error,response)=>{
//     if(error){
//         console.log('Unable to connect to the service!')
//     }else if(response.body.error){
//         console.log('Unable to find the location')
//     }else{
//     console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out.it feels like '+response.body.current.feelslike+' degrees out.')
//     }
// })


// Geocoding
const geocode="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFkaXJzaGFhbGl5YXIiLCJhIjoiY2w5Nng5em5yMDJ1dDNucTg3ZW56cG9zZSJ9.qTgNxGIv7KLgNCAS1ouUXA&limit=1"
request({url:geocode,json:true},(error,response)=>{
    if(error){
        console.log('Unable to connect to service')
    }else if(response.body.features.length === 0){
        console.log('Unable to find location')
    }else{
    const latitude=response.body.features[0].center[1]
    const longitude=response.body.features[0].center[0]
    console.log(latitude,longitude)
    }
})