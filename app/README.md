- Rodar container: 
  docker run --name prometheus --rm -d -p 9090:9090 prom/prometheus
- Rodar container apontando para arquivo de configuração: 
  docker run --name prometheus --rm -d -p 9090:9090 prom/prometheus