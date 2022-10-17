const request=require('request')

const forecast =(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=0741a92dc32985dd054f1be829b56b30&query='+decodeURIComponent(latitude)+','+decodeURIComponent(longitude)+'&units=m'
    request({url,json:true}, (error,{body}={})=>{
        if(error){
            callback('Unable to connect to the service!',undefined)
        }else if(body.error){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out.it feels like '+body.current.feelslike+' degrees out.')
        }
    })

}

module.exports =forecast