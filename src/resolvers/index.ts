import Account from "../models/accounts.js";
import Customer from "../models/customers.js";
import { CustomerInterface } from "../types/customers.js";

const resolvers = {
	Query: {
		accounts: async () => await Account.find(),
		customers: async () => await Customer.find(),
	},
	Customer: {
		accounts: async (parent: CustomerInterface) => {
			const response = await Account.find({
				account_id: { $in: parent.accounts },
			});

			return response;
		},
	},
};
export default resolvers;
