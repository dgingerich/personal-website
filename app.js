const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(
     helmet.contentSecurityPolicy({
          useDefaults: true,
          directives: {
               defaultSrc: ["'self'", "https://fonts.googleapis.com", "dannygingerich.com:3333", "https://dannygingerich.com:3333", "http://dannygingerich.com:3333"],
              // "font-src": ["'self'", "https://fonts.googleapis.com"],
          }
     })
);


const port = 3333;

app.use(express.static('www'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
