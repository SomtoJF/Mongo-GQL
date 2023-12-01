import mongoose from "mongoose";
import { CustomerInterface } from "../types/customers";

const customerSchema = new mongoose.Schema<CustomerInterface>({
	username: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	birthdate: {
		type: Date,
		required: true,
	},
	active: {
		type: Boolean,
		required: true,
	},
	accounts: {
		type: [Number],
		required: false,
	},
});

const Customer = mongoose.model("Customer", customerSchema, "customers");
export default Customer;
