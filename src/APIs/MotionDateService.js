import axios from "axios";
import { URL } from "./_config";

class MotionDateService {
   
  getMotionDatesByDeviceId = (id) => {
    return axios.get(URL + "api/motiondates/" + id);
  };
}

export default new MotionDateService();
