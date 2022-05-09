require('dotenv').config();

const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

/* mongoose
  .connect(process.env.MONGO_PROD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err)); */

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.get('/api', cors(corsOptions), (req, res) => {
    res.send({
        msg: 'Hello World'
    })
});

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port: ${PORT}`)
})