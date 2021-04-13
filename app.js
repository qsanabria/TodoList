const express = require('express');
const cors = require('cors');

const mongoose = require('./db/db.js');
var dutyController = require('./controllers/dutyController.js');

var app = express();
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }));

app.use(dutyController);

app.listen(3000, () => 
    console.log('Server started at port 3000...')
);