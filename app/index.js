import express from 'express';
import prom from 'prom-client';
import { default as PORT } from './constants/constants.js';
import { counter, gauge, histogram, summary } from './metrics/metrics.js';
const counterInstance = counter('counter_request', 'help_request');
const gaugeInstance = gauge('counter_gauge', 'gauge_help_request');
const historyInstance = histogram('histogram', 'histogram_help_request', [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]);
const summaryInstance = summary('summary', 'summary_help_request');

const app = express();

app.get('/produtos', (req, res) => {
    //Counter metrics
    counterInstance.labels('200').inc();
    //Gauge metrics
    gaugeInstance.set(Math.random());
    //Creating a histogram metrics
    historyInstance.observe(Math.random());
    //Creating a histogram summary
    summaryInstance.observe(Math.random());

    res.json({ "message": "Working" });
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', prom.register.contentType);
    res.end(await prom.register.metrics());
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));