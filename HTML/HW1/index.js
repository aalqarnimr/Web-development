const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Requiring module
const fs = require("fs");

function authentication(req, res, next) {
	const authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) {
		let err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	const auth = new Buffer.from(authheader.split(' ')[1],
		'base64').toString().split(':');
	const user = auth[0];
	const pass = auth[1];

	if (user == 'admin' && pass == 'password') {

		// If Authorized user
		next();
	} else {
		let err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
	console.log("Server is Running ");
})



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
app.post('/contact', (req, res) => {
    res.send('Thank you we receievd your comment!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});