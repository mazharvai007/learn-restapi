import express from 'express';
import {
	loginController,
	registerController,
	usersController,
} from '../controllers/user.js';

export const userRoute = express.Router();

userRoute.post('/login', loginController);

userRoute.post('/register', registerController);

userRoute.get('/', usersController);
