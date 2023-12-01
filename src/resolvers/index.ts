import Account from "../models/accounts.js";
import Customer from "../models/customers.js";
import { CustomerInterface } from "../types/customers.js";

type GetByIdArgType = {
	id: string;
};

type GetByPageNumberArgType = {
	page: number;
};

const resolvers = {
	Query: {
		accounts: async (_: any, args: GetByPageNumberArgType) =>
			await Account.find()
				.skip(15 * (args.page - 1))
				.limit(15),
		customers: async (_: any, args: GetByPageNumberArgType) =>
			await Customer.find()
				.skip(15 * (args.page - 1))
				.limit(15),
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
