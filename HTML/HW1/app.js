const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('main.html', {root: __dirname })
    res.sendFile('dark_mode.css', {root: __dirname })
});
app.get('/dark_mode.css', (req, res) => {
    res.sendFile('dark_mode.css', {root: __dirname })
});
app.get('/', (req, res) => {
    res.sendFile('main.html', {root: __dirname })
    res.sendFile('dark_mode.css', {root: __dirname })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});