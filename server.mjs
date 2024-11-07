import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { contactRoute } from './api/routes/contact.js';

const app = express();
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

// App use
// app.use((req, res, next) => {
// 	console.log('This is a Middleware Function');
// 	// res.send('Middleware is calling');

// 	next();
// });

app.get('/', (req, res) => {
	res.send('<h1>Learn REST API</h1>');
});

app.use('/api/contacts', contactRoute);

// app.get('/api/contacts', (req, res) => {
// 	// res.send('<h1>All Contacts</h1>');
// 	res.json(contacts);
// });

// app.post('/api/contacts', (req, res) => {
// 	res.json({ message: 'This is post method' });
// });

// app.get('/posts', (req, res) => {
// 	res.send('<h1>This is a post page</h1>');
// });

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
