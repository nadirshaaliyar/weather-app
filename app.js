const request= require('request')
const url = "http://api.weatherstack.com/current?access_key=0741a92dc32985dd054f1be829b56b30&query=37.8267,-122.4233&units=f"
request({url:url,json:true}, (error,response)=>{
    console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out.it feels like '+response.body.current.feelslike+' degrees out.')
})