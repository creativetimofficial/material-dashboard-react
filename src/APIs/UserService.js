import axios from "axios";
import { URL } from "./_config";

class UserService {
   
  getUser = (id) => {
    
    return axios.get(URL + "api/users/" + id);
  };

}

export default new UserService();
