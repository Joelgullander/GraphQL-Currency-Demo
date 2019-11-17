import axios from 'axios';
import { CurrencyResponse } from '../../types/Currency';

interface Request {
    data: CurrencyResponse
}

const getCurrenciesEndpoint = async (currency: string): Promise<Request> => {
  return axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`);
}

export default getCurrenciesEndpoint;
