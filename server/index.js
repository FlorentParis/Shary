require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const user_routes = require('./routes/UserRoute.js')

app.use(express.json())

//base de donnée
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/ErrorController');

var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Shary server" });
});
// set port, listen for requests
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// ROUTES
app.use('/api/user', user_routes);


//  AFFICHAGE ERREUR JSON
app.all('*', (req, res, next)=>{
    //res.status(404).json({
    //    status : 'fail',
    //    message: `Can't find ${req.originalUrl} on this server!`
    //})
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

app.use(globalErrorHandler);