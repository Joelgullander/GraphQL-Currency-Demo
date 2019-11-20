import { getCountryEndpoint, searchCountryEndpoint } from '../endpoints';

// Resolvers can be sync or async
interface CountryVariables {
  country: string
}

const getCountryResolver = async (parent: any, variables: CountryVariables) => {
    const { country } = variables
    const data = await getCountryEndpoint(country);
    return data.data[0]
}

interface SearchVariables {
  text: string
}

const searchCountryResolver = async (parent: any, variables: SearchVariables) => {
    const { text } = variables;
    const data = await searchCountryEndpoint(text);
    return data.data
}

const Country = {
  getCountry: getCountryResolver,
  searchCountry: searchCountryResolver
};

export default Country;
