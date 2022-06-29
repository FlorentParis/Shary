require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const user_routes = require('./routes/UserRoute.js');
const event_routes = require('./routes/EventRoute.js');
const modules_routes = require('./routes/ModulesRoute.js');
app.use(express.json());

//base de donnée
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/ErrorController');


// parse requests of content-type - application/json
app.use(bodyParser.json({}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true }));

var corsOptions = {
    origin: true,
    credentials: true
};
app.use(cors(corsOptions));
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
app.use('/api/event', event_routes);
app.use('/api/modules', modules_routes);


//  AFFICHAGE ERREUR JSON
app.all('*', (req, res, next)=>{
    //res.status(404).json({
    //    status : 'fail',
    //    message: `Can't find ${req.originalUrl} on this server!`
    //})
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);