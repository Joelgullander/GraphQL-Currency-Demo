import Country from './country.model';
import { Country as CountryResponse, Currency } from '../types/Country';

export default {
  Query: {
    getCountry: Country.getCountry,
    searchCountry: Country.searchCountry
  },
  Country: {
    // We add a custom property to the model
    currency: (country: CountryResponse) : Currency | null => {
      const { currencies } = country;
      if(currencies && currencies.length > 0) {
        return currencies[0]
      }

      return null
    },
  }
};
