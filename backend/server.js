// const http = require('http');
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');



// require('dotenv').config();


const port = 3000;

// const server = http.createServer(app);

//server.listen(port);

const express = require('express');
const app = express();
app.listen(port);

const flightRoutes = require('./API/routes/flights');
const OAuth = require('./API/routes/google');
const callbacks = require('./API/routes/callback');

app.use('/flights', flightRoutes);
app.use('/signin', OAuth);
app.use('/callback', callbacks);