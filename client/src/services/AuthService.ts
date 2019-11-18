import axios from 'axios';
import jwtDecode from 'jwt-decode'
class AuthService {

    login = async () => {
      try {
        const data = await axios.post('/login');
        localStorage.setItem('token', data.data);
        return true
      } catch (e) {
        return false
      }
    }

    hasValidSession() {
      const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

      if(token) {
        try {
          const date = new Date(0);
          const { exp } = jwtDecode(token);

          date.setUTCSeconds(exp);

          return date.valueOf() > new Date().valueOf();

        } catch (err) {
          return false;
        }
      }

      return false
    }

    getAuthHeader() {
      //  return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }
}

export default new AuthService();
