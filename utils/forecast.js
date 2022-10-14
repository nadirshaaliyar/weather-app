const request=require('request')

const forecast =(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=0741a92dc32985dd054f1be829b56b30&query='+decodeURIComponent(latitude)+','+decodeURIComponent(longitude)+'&units=m'
    request({url:url,json:true}, (error,response)=>{
        if(error){
            callback('Unable to connect to the service!',undefined)
        }else if(response.body.error){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out.it feels like '+response.body.current.feelslike+' degrees out.')
        }
    })

}

module.exports =forecast