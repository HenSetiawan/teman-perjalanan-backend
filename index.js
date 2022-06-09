const express = require('express');
const app = express();
const cors = require('cors');
const { route } = require('./src/routers/route');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', route);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on port ${port}`));
