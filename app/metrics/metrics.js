import prom from 'prom-client';

export function counter(name, help) {
  return new prom.Counter({
    name: name,
    help: help,
    labelNames: ["statusCode"]
  });
}

export function gauge(name, help) {
  return new prom.Gauge({
    name: name,
    help: help
  });
}

export function histogram(name, help, buckets) {
  return new prom.Histogram({
    name: name,
    help: help,
    buckets: buckets,
  });
}

export function summary(name, help) {
  return new prom.Summary({
    name: name,
    help: help,
  });
}