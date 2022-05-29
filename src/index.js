const express = require('express');
const app = express();

// router
const { route } = require('./routers/route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', route);

app.listen(3000, () => console.log(`server running on port 3000`));
