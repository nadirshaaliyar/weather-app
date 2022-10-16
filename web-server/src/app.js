const path=require('path')
const express =require('express')

// console.log(__dirname)
// console.log((path.join(__dirname,'../public')))


const publicDir=path.join(__dirname,'../public')
const app =express()


app.set('view engine','hbs')
app.use(express.static(publicDir))



app.get('',(req,res)=>{
    res.render('index',{
        title:'inside mind',
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
        help_msg:'This is help message.'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'snowing',
        location: 'Kochi'
    })
})

app.listen(3000,()=>{
    console.log("The server is up!")
})