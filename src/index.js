const express = require('express');
const app = express();

// router
const routeUSer = require('./routers/route-user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routeUSer);

app.listen(3000, () => console.log(`server running on port 3000`));
