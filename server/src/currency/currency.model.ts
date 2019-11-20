import { getCurrenciesEndpoint } from '../endpoints';

// Resolvers can be sync or async
interface CurrencyVariables {
  currency: string
}

const getCurrenciesResolver = async (query: any, variables: CurrencyVariables) => {
    const { currency } = variables
    const data = await getCurrenciesEndpoint(currency);
    return data.data
}

const Currency = {
  getCurrencies: getCurrenciesResolver,
};

export default Currency;
