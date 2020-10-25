const express = require('express');

const dynamicRoute = require('./routes/dynamic');
const approximationRoute = require('./routes/approximation');

const app = express();



//app.use(cors());
app.use(express.json());

app.use(dynamicRoute);
app.use(approximationRoute);

app.listen(3001);