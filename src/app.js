const path=require('path')
const express =require('express')
const hbs = require('hbs');
const geocode= require('./utils/geocode')
const forecast=require('./utils/forecast')


// console.log(__dirname)
// console.log((path.join(__dirname,'../public')))
const app=express()
const port = Number(Deno.env.get("PORT")) || 3000;



//Define paths for express config
const publicDir=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')


//Setup handlebar engine and views location 
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath);

//Setp static directory to serve
app.use(express.static(publicDir))



app.get('',(_req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Nadir'
    })

})

app.get('/about',(_req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Nadir'
    })
})

app.get('/help',(_req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Nadir',
        help_msg:'This is help message.'
    })
})

app.get('/weather',(_req,res)=>{
    if(!_req.query.address){
        return res.send({
            error:'You must provide an address!'
        })
    }else{
        geocode(_req.query.address,(error,{latitude,longitude,location}={}) =>{
            if(error){
                return res.send({error})
            }
            forecast(latitude,longitude,(error,forecastdata) =>{
                if(error){
                    return res.send({error})
                }
                res.send({
                    forecast:forecastdata,
                    location,
                    address:_req.query.address
                })
                console.log( location)
                console.log(forecastdata)
            })
        })
    }
})


app.get('/help/*',(_req,res)=>{
    res.render('error',{
        title:'More Articles',
        name:'Nadir',
        error:'Help article not found!'
    })
})

app.get('*',(_req,res)=>{
    res.render('error',{
        title:'Error!',
        name:'Nadir',
        error:'404 Page Not found'
    })
    
})

app.listen(port,()=>{
    console.log("The server is up!")
})
