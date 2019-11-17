import { gql } from 'apollo-server';
import merge from 'lodash.merge';
import { makeExecutableSchema } from 'graphql-tools';

import countryResolver from './country/country.resolver';
import countryTypeDef from './country/country.typeDef';

import currencyResolver from './currency/currency.resolver';
import currencyTypeDef from './currency/currency.typeDef';

const baseTypeDef = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

const typeDefs = [
  baseTypeDef,
  countryTypeDef,
  currencyTypeDef
];

const resolvers = merge(
  countryResolver,
  currencyResolver
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
