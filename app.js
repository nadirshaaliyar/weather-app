const request= require('request')
const url = "http://api.weatherstack.com/current?access_key=0741a92dc32985dd054f1be829b56b30&query=37.8267,-122.4233"
request({url:url}, (error,response)=>{
    const data=JSON.parse(response.body)
    console.log(data.current)
})