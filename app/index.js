const express = require('express');

const app = express();
const PORT = 8080;

app.listen(() => {
    console.log(`Running on port ${PORT}`);
});

app.get('/produtos', (req, res) => {
    res.json({ "message": "Working" });
});
