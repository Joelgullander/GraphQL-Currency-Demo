import axios from 'axios';
import jwtDecode from 'jwt-decode'
class AuthService {
    login = async () : Promise<boolean> => {
      try {
        const data = await axios.post('/login');
        localStorage.setItem('token', data.data);
        return true
      } catch (e) {
        return false
      }
    }

    hasValidSession() : boolean {
      const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

      if(token) {
        try {
          const date = new Date(0);
          const { exp } = jwtDecode(token);
          date.setUTCSeconds(exp);

          const diff = date.valueOf() - new Date().valueOf();
          console.log(`${(diff / 1000 / 60 / 60).toFixed(0)} hours left until token expires`)
          return date.valueOf() > new Date().valueOf();

        } catch (err) {
          return false;
        }
      }

      return false
    }

    getAuthHeader() : string {
      const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

      if(!token) {
        return ''
      }

      return `Bearer ${token}`;
    }

    clearSession() {
      console.log('Removing token')
      localStorage.removeItem('token');
    }
}

export default new AuthService();
