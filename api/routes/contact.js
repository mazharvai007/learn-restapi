import express from 'express';
import { contacts } from '../../dummy_data.js';

export const contactRoute = express.Router();

// GET

contactRoute.get('/', (req, res, next) => {
	res.json(contacts);
});

// POST
contactRoute.post('/', (req, res, next) => {
	res.send({
		message: 'This is contact Post route',
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
