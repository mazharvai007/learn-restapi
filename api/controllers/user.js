import User from '../models/UserModel.js';
import bcript from 'bcryptjs';

const registerController = (req, res, next) => {
	bcript.hash(req.body.password, 10, (err, hash) => {
		if (err) {
			res.json({
				error: err,
			});
		}

		let user = new User({
			email: req.body.email,
			password: hash,
		});

		user.save()
			.then((result) => {
				res.status(201).json({
					message: 'User Created Successfully',
					user: result,
				});
			})
			.catch((error) => {
				res.status(500).json({ error });
			});
	});
};

const loginController = (req, res, next) => {
	let email = req.body.email;
	let password = req.body.password;

	User.findOne({ email }).then((user) => {
		if (user) {
			bcript.compare(password, user.password, (err, result) => {
				if (err) {
					res.json({
						message: 'Error Occured',
					});
				}

				if (result) {
					res.json({
						message: 'Login Successful',
					});
				} else {
					res.json({
						message: 'Login failed. Password does not match',
					});
				}
			});
		} else {
			res.json({
				message: 'User not found!',
			});
		}
	});
};

const usersController = (req, res, next) => {
	User.find()
		.then((users) => {
			res.json({
				users,
			});
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
};

export { registerController, loginController, usersController };
