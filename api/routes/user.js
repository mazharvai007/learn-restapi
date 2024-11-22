import express from 'express';
import {
	loginController,
	registerController,
	usersController,
} from '../controllers/user.js';
import authenticate from '../middleware/authenticate.js';

export const userRoute = express.Router();

userRoute.post('/login', loginController);

userRoute.post('/register', registerController);

userRoute.get('/', authenticate, usersController);
