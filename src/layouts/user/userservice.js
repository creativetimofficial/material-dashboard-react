// services/productService.js
import axios from "axios";

const BASE_URL = "http://localhost:8005/api/user";

const getusers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/req`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};
const getallusers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getallusers`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products", error);
      return [];
    }
  };

const gettypeusers = async (type) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/` + type);
    return response.data;
    console.log(response.data)
  } catch (error) {
    console.error(`Error fetching products of type ${type}`, error);
    return [];
  }
};

const getusersbylocation = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/filteruser/`+ location) 
        return response.data;
  } catch (error) {
    console.error(`Error fetching products of category ${category}`, error);
    return [];
  }
};

export { getusers, gettypeusers, getusersbylocation,getallusers };
