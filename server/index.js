const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.get('/api', (req, res) => {
    res.send({
        msg: 'Hello World'
    })
});

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port: ${PORT}`)
})