import Account from "../../models/accounts.js";
const getAccounts = async () => {
    try {
        const response = await Account.find();
        return response;
    }
    catch (err) {
        throw new Error(err);
    }
};
export default getAccounts();
