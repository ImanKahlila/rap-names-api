const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
'21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abrah-Joseph',
    'birthLocation': 'London, England'
},
'Chance the Rapper':{
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
},
'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
}
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    console.log(rappers['21 savage'].birthName )
    // if( rappers [rapperName] ){
     //   response.json(rappers[rapperName])
        
    //}
    response.json(rappers)
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})