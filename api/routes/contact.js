import express from 'express';
import { contacts } from '../../dummy_data.js';

export const contactRoute = express.Router();

// GET

contactRoute.get('/', (req, res, next) => {
	res.json(contacts);
});

// POST
contactRoute.post('/', (req, res, next) => {
	contacts.push({
		name: req.body.name,
		email: req.body.email,
	});

	// res.send({
	// 	message: 'This is contact Post route',
	// });

	res.status(201).json({
		message: 'Data Saved',
	});
});

// GET - single contact
contactRoute.get('/:id', (req, res, next) => {
	const id = req.params.id;
	res.json({
		message: 'This is a GET route',
	});
});

// PUT - single contact
contactRoute.put('/:id', (req, res, next) => {
	res.json({
		message: 'This is a PUT route',
	});
});

// DELETE - single contact
contactRoute.delete('/:id', (req, res, next) => {
	res.json({
		message: 'This is a DELETE route',
	});
});
