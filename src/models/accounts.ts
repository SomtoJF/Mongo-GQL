import mongoose from "mongoose";
import { AccountInterface } from "../types/accounts";

const accountSchema = new mongoose.Schema<AccountInterface>({
	account_id: {
		type: Number,
		required: true,
	},
	limit: {
		type: Number,
		required: true,
	},
	products: {
		type: [String],
		required: true,
	},
});

const Account = mongoose.model("Account", accountSchema, "accounts");
export default Account;
