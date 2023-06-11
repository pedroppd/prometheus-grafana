const express = require('express');
const prom = require('prom-client');
const { PORT } = require('./constants/constants');
const {counter, gauge} = require('./metrics/metrics.js');
const counterInstance = counter('counter_request', 'help_request');
const gaugeInstance = gauge('counter_gauge', 'gauge_help_request');
const app = express();

app.get('/produtos', (req, res) => {
    counterInstance.labels('200').inc();
    gaugeInstance.set(5);
    res.json({ "message": "Working" });
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', prom.register.contentType);
    res.end(await prom.register.metrics());
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));