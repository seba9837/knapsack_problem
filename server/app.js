const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');

const app = express();

const dynamicRoute = require('./routes/dynamic');

//app.use(cors());
app.use(express.json());

app.use(dynamicRoute);

app.listen(3001);