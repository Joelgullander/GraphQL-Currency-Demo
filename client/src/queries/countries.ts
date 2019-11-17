import { gql } from 'apollo-boost';

export const GET_COUNTRY = gql`
  query Country($country: String!) {
    country: getCountry(country: $country) { ...CountryFragment }
  }

  fragment CountryFragment on Country {
    name
    population
    currency {
      name
      code
      symbol
    }
  }

`;

export const SEARCH_COUNTRY = gql`
  query SearchCountry($text: String!) {
    searchResults: searchCountry(text: $text) { ...SearchFragment }
  }

  fragment SearchFragment on Country {
    name
  }

`;
