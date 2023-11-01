import axios from "axios";

const BASE_URL = "http://localhost:8005/api/Request";

const getAllRequests = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getall`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    return [];
  }
};

const getusersbyrequestid = async (id) => {
    
  try {
    const response = await axios.get(`${BASE_URL}/request/` + id);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(`Error fetching users of type ${type}`, error);
    return [];
  }
};

export { getAllRequests, getusersbyrequestid };
