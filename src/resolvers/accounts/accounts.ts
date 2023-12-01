import Account from "../../models/accounts.js";
type AccountType = {
	_id: string;
	account_id: number;
	limit: number;
	products: string[];
};

const getAccounts = async () => {
	try {
		const response = await Account.find();
		return response;
	} catch (err) {
		throw new Error(err);
	}
};

export default getAccounts();
