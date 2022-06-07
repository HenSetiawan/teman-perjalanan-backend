const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const { route } = require('./src/routers/route');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/', route);

app.listen(3000, () => console.log(`server running on port 3000`));
