// services/productService.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/products";

const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/list`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products", error);
        return [];
    }
};

const getTypeProducts = async (type) => {
    try {
        const response = await axios.get(`${BASE_URL}/getByType`, { params: { type } });
        return response.data;
    } catch (error) {
        console.error(`Error fetching products of type ${type}`, error);
        return [];
    }
};

const getCategoryProducts = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}/getByCategory`, { params: { category } });
        return response.data;
    } catch (error) {
        console.error(`Error fetching products of category ${category}`, error);
        return [];
    }
};

export { getProducts, getTypeProducts, getCategoryProducts };
