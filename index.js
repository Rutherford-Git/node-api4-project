const express = require('express')

const server = express()

server.use(express.json())

server.get('hello', (req, res) =>{
    res.json('hello, there')
})

const port = process.env.PORT || 6000

server.listen(port, ()=>{
    console.log("listening on port", port)
})