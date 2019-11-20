import axios from 'axios';
import { Country } from '../../types/Country';


interface Request {
  data: Country[]
}

const getCountryEndpoint = (country: string) : Promise<Request> =>
    axios.get(`https://restcountries.eu/rest/v2/name/${country}?fields=name;population;currencies;`)

export default getCountryEndpoint;
