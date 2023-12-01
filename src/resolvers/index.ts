import Account from "../models/accounts.js";
import Customer from "../models/customers.js";
import { CustomerInterface } from "../types/customers.js";

type GetByIdArgType = {
	id: string;
};

const resolvers = {
	Query: {
		accounts: async () => await Account.find(),
		customers: async () => await Customer.find(),
		account: async (_: any, args: GetByIdArgType) =>
			await Account.findById(args.id),
		customer: async (_: any, args: GetByIdArgType) =>
			await Customer.findById(args.id),
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
