const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.put('/', (req, res) => res.send('PUT request to homepage'))

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.get('/about', (req, res) => res.send('About Page'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))