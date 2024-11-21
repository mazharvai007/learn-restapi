import Contacts from '../models/ContactModel.js';

/**
 * Get All Contacts Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllContactController = (req, res, next) => {
	Contacts.find()
		.then((data) => {
			res.status(200).json({
				message: 'All Contacts',
				contacts: data,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				message: 'Error Occured',
				error: err,
			});
		});
};

/**
 * Post Contact Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const postContactController = (req, res, next) => {
	const contact = new Contacts({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
	});

	contact
		.save()
		.then((data) => {
			res.status(200).json({
				message: 'Contact Added',
				contact: data,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				message: 'Error Occured',
				error: err,
			});
		});
};

/**
 * Get Single Contact Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getSingleContactController = (req, res, next) => {
	const id = req.params.id;

	Contacts.findById(id)
		.then((data) => {
			res.status(200).json({
				message: 'Get Single Data',
				contact: data,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				message: 'Error Occured',
				error: err,
			});
		});
};

/**
 * Put/Update Single Contact Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const putSingleContactController = (req, res, next) => {
	const id = req.params.id;

	let updatedContact = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
	};

	Contacts.findByIdAndUpdate(id, { $set: updatedContact })
		.then((contact) => {
			Contacts.findById(contact._id).then((newContact) => {
				res.status(200).json({
					message: 'Updated Successfully',
					newContact,
				});
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				message: 'Error Occured',
				error: err,
			});
		});
};

/**
 * Delete Contact Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteContactController = (req, res, next) => {
	const id = req.params.id;

	Contacts.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).json({
				message: 'Contact Deleted',
				result,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				message: 'Error Occured',
				error: err,
			});
		});
};

export {
	getAllContactController,
	postContactController,
	getSingleContactController,
	putSingleContactController,
	deleteContactController,
};
