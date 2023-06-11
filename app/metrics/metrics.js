const prom = require('prom-client');

counter = (name, help) => {
  return new prom.Counter({
    name: name,
    help: help,
    labelNames: ["statusCode"]
  });
};

gauge = (name, help) => {
  return new prom.Gauge({
    name: name,
    help: help
  });
};

module.exports = { counter, gauge };

