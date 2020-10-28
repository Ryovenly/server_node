const express = require('express')
const app = express()
const api = {"message": "Hello World!"}

app.listen(18000, () => {
    console.log("Serveur à l'écoute")
})

app.get('/api', (req,res) => {
    res.status(200).json(api)
})