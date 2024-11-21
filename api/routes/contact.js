import express from 'express';
import {
	deleteContactController,
	getAllContactController,
	getSingleContactController,
	postContactController,
	putSingleContactController,
} from '../controllers/contact.js';

export const contactRoute = express.Router();

// GET

contactRoute.get('/', getAllContactController);

// POST
contactRoute.post('/', postContactController);

// GET - single contact
contactRoute.get('/:id', getSingleContactController);

// PUT - single contact
contactRoute.put('/:id', putSingleContactController);

// DELETE - single contact
contactRoute.delete('/:id', deleteContactController);
