import { gql } from 'apollo-server';

const typeDef = gql`
  extend type Query {
    getCountry(country: String!): Country!
    searchCountry(text: String!): [Country!]!
  }

  type Country {
    name: String!
    topLevelDomain: [String]
    alpha2Code: String
    alpha3Code: String
    callingCodes: [Int]
    capital: String!
    altSpellings: [String]
    region: String
    subregion: String
    population: Int
    latlng: [Int]
    demonym: String
    area: Int
    gini: Int
    timezones: [String]
    borders: [String]
    nativeName: String
    numericCode: Int
    currencies: [Currency!]!
    currency: Currency!
    languages: [Language!]
    flag: String!
    regionalBlocs: [WorldPart]
    cioc: String!
  }

  type Currency {
    code: String!
    name: String!
    symbol: String
  }
  type Language {
    iso639_1: String!
    iso639_2: String!
    name: String!
    nativeName: String!
  }
  type WorldPart {
    acronym: String!
    name: String!
    otherAcronyms: [String]
    otherNames: [String]
  }
`;


export default typeDef;
