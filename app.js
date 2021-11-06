const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            defaultSrc: helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
        },
    })
);


const port = 3000

app.use(express.static('www'))

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
