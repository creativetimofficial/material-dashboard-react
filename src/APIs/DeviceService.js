import axios from "axios";
import { URL } from "./_config";

class DeviceService {
  getAllDevicesByUserId = (id) => {
    return axios.get(URL + "api/devices/getAllDeviceByUserId/" + id);
  };
}

export default new DeviceService();
