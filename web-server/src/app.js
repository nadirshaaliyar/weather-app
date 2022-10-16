const path=require('path')
const express =require('express')

// console.log(__dirname)
// console.log((path.join(__dirname,'../public')))


const publicDir=path.join(__dirname,'../public')
const app =express()


app.set('view engine','hbs')
app.use(express.static(publicDir))



// app.get('',(req,res)=>{
//     res.send('<h1>Weather</h1>')

// })

app.get('/help',(req,res)=>{
    res.send('Help page')
})

// app.get('/about',(req,res)=>{
//     res.send('<h1>About Page</h1>')
// })

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'snowing',
        location: 'Kochi'
    })
})

app.listen(3000,()=>{
    console.log("The server is up!")
})