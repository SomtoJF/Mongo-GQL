interface CustomerInterface {
	_id: string;
	username: string;
	name: string;
	address: string;
	email: string;
	birthdate: Date;
	active: boolean;
	accounts: number[];
}

export type { CustomerInterface };
