const prom = require('prom-client');

const counter = (name, help) => {
    return new prom.Counter({
        name: name,
        help: help
      });
};

module.exports = {counter};

