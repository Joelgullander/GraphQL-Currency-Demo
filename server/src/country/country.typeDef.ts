import { gql } from 'apollo-server';

const typeDef = gql`
  extend type Query {
    getCountry(country: String!): Country!
    searchCountry(text: String!): [Country!]!
  }

  type Country {
    name: String!
    population: Int
    currencies: [Currency!]!
    currency: Currency!
  }

  type Currency {
    code: String!
    name: String!
    symbol: String
  }
`;


export default typeDef;
