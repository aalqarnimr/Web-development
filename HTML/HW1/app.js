const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

app.use(express.static(__dirname));
const mainRouter = express.Router();
const booksRouter = express.Router();

mainRouter.get('/', (req, res) => {
    res.sendFile('main.html', {root: __dirname })
});
booksRouter.get('/', (req, res) => {
    res.sendFile('books_list.html', {root: __dirname })
});

app.use('/',mainRouter);
app.use('/books_list',booksRouter);

app.get('/dark_mode.css', (req, res) => {
    res.sendFile('dark_mode.css', {root: __dirname })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});