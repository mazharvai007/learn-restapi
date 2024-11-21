import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { contactRoute } from './api/routes/contact.js';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRoute } from './api/routes/user.js';

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

app.get('/', (req, res) => {
	res.send('<h1>Learn REST API</h1>');
});

// App use
app.use('/api/contacts', contactRoute);
app.use('/api/users', userRoute);

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
