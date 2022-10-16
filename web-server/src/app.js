const path=require('path')
const express =require('express')
var hbs = require('hbs');


// console.log(__dirname)
// console.log((path.join(__dirname,'../public')))
const app=express()


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



app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Nadir'
    })

})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Nadir'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Nadir',
        help_msg:'This is help message.'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'snowing',
        location: 'Kochi'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('error',{
        title:'More Articles',
        name:'Nadir',
        error:'Help article not found!'
    })
})

app.get('*',(req,res)=>{
    res.render('error',{
        title:'Error!',
        name:'Nadir',
        error:'404 Page Not found'
    })
    
})

app.listen(3000,()=>{
    console.log("The server is up!")
})