const express = require('express');
const bodyParser = require('body-parser');
const ussd = require('./ussd');
const port = process.env.PORT || 3000;

// Make sure database and tables are initialized
require('./db');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', ussd);

app.listen(port, () => console.log(`USSD app listening on port ${port}!`));
