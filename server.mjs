import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { contactRoute } from './api/routes/contact.js';
import cors from 'cors';
import mongoose from 'mongoose';

async function mongoDB() {
	try {
		await mongoose.connect('mongodb://localhost:27017/learn-restapi');
		console.log('MongoDB Connected');
	} catch (error) {
		console.log(error);
	}
}

mongoDB();

const app = express();
app.use(morgan('dev'));

app.use(cors());

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

// app.get('/demo', (req, res) => {
// 	const contacts = new Contacts({
// 		name: 'Mashuk',
// 		email: 'mashuk@gmail.com',
// 		phone: '0145654789',
// 	});
// 	contacts.save();
// 	res.send('Stored Data');
// });

// app.get('/getData', (req, res) => {
// 	Contacts.find()
// 		.then((data) => res.json(data))
// 		.catch((err) => console.log(err));
// });

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
