const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(helmet())
const port = 3333

app.use(express.static('www'))

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
