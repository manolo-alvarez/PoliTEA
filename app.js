const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"

// app.options('*', cors());
app.use(cors());
// app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postRoutes = require('./routes/api_routes');
var port = process.env.PORT || 3000;
=======
const bodyParser = require('body-parser');

const app = express();
const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"

const postRoutes = require('./routes/api_routes');
>>>>>>> master

app.use(express.urlencoded({
    extended: false
}));

<<<<<<< HEAD
app.use(express.json());

app.use('/', postRoutes);


=======
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', postRoutes);

>>>>>>> master
app.get('/', (req, res, next) => {
    res.send('running node-api');
});

<<<<<<< HEAD
=======
/////// Manolo ///////////////////////////////////////////////////////
const port = process.env.PORT || 3000;
//////////////////////////////////////////////////////////////////////
>>>>>>> master
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected")
<<<<<<< HEAD
        app.listen(port, console.log('Server started at port ' + port));
=======
        app.listen(port, () => console.log(`Server started at port ${port}...`)); // changed port to environment's port
>>>>>>> master
    })
    .catch(err => console.log(err));
