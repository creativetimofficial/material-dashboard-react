import axios from "axios";
import { Token, URL } from "./_config";

class AuthService {  
  async LoginAccount(email, password) {
    var response = await axios.post("https://localhost:5001/api/Auth/CreateToken",{email:email,password:password}).then((response)=> {
        if(response.data.statusCode == 200){
            var data = response.data.data;
            Token.accessToken = data.accessToken;
            Token.accessTokenExpiration = data.accessTokenExpiration;
            Token.refreshToken = data.refreshToken;
            Token.refreshTokenExpiration = data.refreshTokenExpiration;
            
            axios.defaults.headers.common["Authorization"] = 'Bearer  '+ Token.accessToken;
            console.log(axios.defaults.headers.common["Authorization"])
            console.log(Token)
            return response.data;
        }
    })
   return response;
  }
}

export default new AuthService();
