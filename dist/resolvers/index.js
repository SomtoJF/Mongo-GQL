import Account from "../models/accounts.js";
import Customer from "../models/customers.js";
const resolvers = {
    Query: {
        accounts: async (_, args) => await Account.find()
            .skip(15 * (args.page - 1))
            .limit(15),
        customers: async (_, args) => await Customer.find()
            .skip(15 * (args.page - 1))
            .limit(15),
        account: async (_, args) => await Account.findById(args.id),
        customer: async (_, args) => await Customer.findById(args.id),
    },
    Customer: {
        accounts: async (parent) => {
            const response = await Account.find({
                account_id: { $in: parent.accounts },
            });
            return response;
        },
    },
};
export default resolvers;
