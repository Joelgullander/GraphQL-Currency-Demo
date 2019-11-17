import Currency from './currency.model';
import { CurrencyResponse } from '../types/Currency';
export default {
  Query: {
    getCurrencies: Currency.getCurrencies,
  },
  CurrencyResponse: {
    rates: (currency: CurrencyResponse) : Object[] => {
      const { rates } = currency;
      return Object.keys(rates).map(rate => ({
        identifier: rate,
        rate: rates[rate]
      }))
    },
  }
};
