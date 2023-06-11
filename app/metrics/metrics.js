const prom = require('prom-client');

const counter = (name, help) => {
  return new prom.Counter({
    name: name,
    help: help,
    labelNames: ["statusCode"]
  });
};

const gauge = (name, help) => {
  return new prom.Gauge({
    name: name,
    help: help
  });
};

const histogram = (name, help, buckets) => {
  return new prom.Histogram({
    name: name,
    help: help,
    buckets: buckets,
  });
};

module.exports = { counter, gauge, histogram };

