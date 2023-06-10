const express = require('express');
const {PORT} = require('./constants/constants');
const prom = require('prom-client');
const app = express();

const counter = new prom.Counter({
    name: 'metric_name',
    help: 'metric_help',
  });
  counter.inc();
  counter.inc(10);


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

app.get('/produtos', (req, res) => {
    res.json({ "message": "Working" });
});
