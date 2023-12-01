import Account from "../models/accounts.js";
const resolvers = {
    Query: {
        accounts: async () => await Account.find(),
    },
};
export default resolvers;
