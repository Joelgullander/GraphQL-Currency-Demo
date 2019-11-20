import axios from 'axios';
import { Country } from '../../types/Country';


interface Request {
  data: Country[]
}

const searchCountryEndpoint = (text: string) : Promise<Request> =>
    axios.get(`https://restcountries.eu/rest/v2/name/${text}?fullText=false&fields=name`)

export default searchCountryEndpoint;

