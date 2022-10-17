console.log("Client side javascript loaded!")

fetch('http://localhost:3000/weather?address=Boston').then((response) =>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

const weatherform = document.querySelector('form')
const search = document.querySelector('input')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value
    fetch('http://localhost:3000/weather?address='+ location).then((response) =>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
})