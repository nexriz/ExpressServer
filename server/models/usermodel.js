import mongoose, { Schema } from 'mongoose';

const account = new Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	created: Date
})

export const user = mongoose.model('Accounts', account);

export const createUser = (data) => {
	return user.create(data)
}
export const findUser = (data) => {
	const {name, password } = data;
	return user.find({ name } || { password })
}