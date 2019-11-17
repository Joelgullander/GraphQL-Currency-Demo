import axios from 'axios';
import { Country } from '../../types/Country';


interface Request {
  data: Country[]
}

// filter out unecessary data
// ?fields=name;capital;currencies
const getCountryEndpoint = (country: string) : Promise<Request> =>
    axios.get(`https://restcountries.eu/rest/v2/name/${country}`)

export default getCountryEndpoint;
