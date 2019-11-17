import { gql } from 'apollo-server';
const typeDef = gql`
  extend type Query {
    getCurrencies(currency: String!): CurrencyResponse!
  }

  type CurrencyResponse {
    rates: [RateEntry!]!
    base: String!
    date: String!
  }

  type RateEntry {
    identifier: String!
    rate: Float!
  }
`;


export default typeDef;
