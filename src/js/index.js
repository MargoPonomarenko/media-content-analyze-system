const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./database');

const application = express();

const port = 5000;
const host = '0.0.0.0';

connection.connect();

application.use(cors());
application.use(bodyParser.json());
application.use('/api', require('./control'));

application.listen(port, host, () => {
    console.log(`Server started: ${host}:${port}`);
});