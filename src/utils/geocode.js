const request=require('request')


const geocode = (address,callback)=> {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+decodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibmFkaXJzaGFhbGl5YXIiLCJhIjoiY2w5Nng5em5yMDJ1dDNucTg3ZW56cG9zZSJ9.qTgNxGIv7KLgNCAS1ouUXA&limit=1'
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to service!',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,{
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0], 
            location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode