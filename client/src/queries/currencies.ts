import { gql } from 'apollo-boost';

export const GET_CURRENCIES = gql`
  query CurrencyResponse($currency: String!) {
    currencies: getCurrencies(currency: $currency) { ...CurrencyFragment }
  }

  fragment CurrencyFragment on CurrencyResponse {
    base
    rates {
      identifier
      rate
    }
  }

`;
