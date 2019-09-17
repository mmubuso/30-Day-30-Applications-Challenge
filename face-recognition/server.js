const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(express.static(__dirname + "/build/"))

app.get('/*', (req, res) => {
    console.log('success')
    res.sendFile(`${__dirname}/build/index.html`)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
