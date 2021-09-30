'use strict';
const express = require('express')
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { port, databaseURL } = require('./utils/config')
const cryptoRoutes = require('./routes/cryptoRoute');

const cronJob = require('./jobs/cron-job');
const app = express();

app.use(express.json({ lmit: '10mb'}));
app.use(express.urlencoded({ extended: false }));

app.use(morgan('combined'));
app.use(helmet());

// cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', cryptoRoutes);

const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(databaseURL, options);

mongo.then(() => {
    app.listen(port, () => {
    console.log(`Server listening on port ${port}`);

    // start cron job after databse and server run successfuly
    cronJob.startCron();

    });
    console.log('Database connected');
}, error => {
    console.log(error, 'error');
})

process.on('uncaughtException', (error) => {
    console.log(error);
});

process.on('unhandledRejection', (error) => {
    console.log(error);
});
