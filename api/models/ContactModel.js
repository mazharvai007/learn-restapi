import { Schema } from 'mongoose';
import validator from 'validator';

// Contact Schema
const contactSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		minLength: 3,
	},
	email: {
		type: String,
		trim: true,
		validate: {
			validator: (v) => {
				return validator.isEmail(v);
			},
			message: `${v} is not an email`,
		},
	},
	phone: {
		type: String,
		trim: true,
		required: true,
		unique: true,
	},
});

// Contact Model
const Contacts = mongoose.model('Contacts', contactSchema);

export default Contacts;
