const typeDefs = `#graphql
type Account{
    _id: String
    account_id: Int!
    limit: Int!
    products: [String!]!
}

type Query{
    accounts: [Account]
}`;
export default typeDefs;
