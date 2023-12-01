const typeDefs = `#graphql
type Account{
    _id: String
    account_id: Int!
    limit: Int!
    products: [String!]!
}
type Customer{
    _id: String
    username: String!
    name: String!
    address: String!
    email: String!
    birthdate: String
    active: Boolean!
    accounts: [Account!]
}

type Query{
    accounts(page: Int!): [Account]
    customers(page: Int!): [Customer]
    account(id: String!): Account
    customer(id: String!): Customer
}`;

export default typeDefs;
