import express from 'express';
import {
	deleteContactController,
	getAllContactController,
	getSingleContactController,
	postContactController,
	putSingleContactController,
} from '../controllers/contact.js';
import authenticate from '../middleware/authenticate.js';

export const contactRoute = express.Router();

// GET

contactRoute.get('/', getAllContactController);

// POST
contactRoute.post('/', authenticate, postContactController);

// GET - single contact
contactRoute.get('/:id', getSingleContactController);

// PUT - single contact
contactRoute.put('/:id', authenticate, putSingleContactController);

// DELETE - single contact
contactRoute.delete('/:id', authenticate, deleteContactController);
