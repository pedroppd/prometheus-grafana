const express = require('express');
const prom = require('prom-client');
const { PORT } = require('./constants/constants');
const { counter } = require('./metrics/Counter');
const counterInstance = counter('counter_request', 'help_request');
const app = express();




app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

app.get('/produtos', (req, res) => {
    console.info(`Bati aqui`);
    counterInstance.inc();
    res.json({ "message": "Working" });
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', prom.register.contentType);
    res.end(await prom.register.metrics());
});
