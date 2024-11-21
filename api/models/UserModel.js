import mongoose, { Schema } from 'mongoose';
import validate from 'validator';

const UserSchema = new Schema({
	email: {
		type: String,
		trim: true,
		validate: {
			validator: (v) => {
				return validate.isEmail(v);
			},
			message: `${validate} is not an email`,
		},
	},
	password: String,
});

const User = mongoose.model('User', UserSchema);

export default User;
