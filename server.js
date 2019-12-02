const express = require('express');
const app = express();
const sequelize = require('./db');

const subscribersRouter = require('./routes/subscribers');


app.use(express.json());

app.use('/subscribers', subscribersRouter);

sequelize.sync()
    .then(() => console.log('database connected'))
    .catch(err => console.log(err));

app.listen(3000, () => console.log('server started'));