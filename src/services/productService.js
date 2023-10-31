import axios from "axios";

const BASE_URL = "http://localhost:8005/api/products";

const cleanseData = (rawData, fields) => {
    return rawData.map(item => {
        const cleansedItem = {};
        fields.forEach(field => {
            if (item[field]) {
                cleansedItem[field] = item[field].value;
            }
        });
        return cleansedItem;
    });
};

const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/list`);
        const fields = ['name', 'productID', 'category', 'user', 'description'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error("Error fetching products", error);
        return [];
    }
};

const getTypeProducts = async (type) => {
    try {
        const response = await axios.get(`${BASE_URL}/getByType`, { params: { type } });
        const fields = ['name', 'productID', 'category', 'user', 'description'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error(`Error fetching products of type ${type}`, error);
        return [];
    }
};

const getCategoryProducts = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}/getByCategory`, { params: { category } });
        const fields = ['name', 'productID', 'category', 'user', 'description'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error(`Error fetching products of category ${category}`, error);
        return [];
    }
};
const getProductsRelations = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getProductsRelations`);
        const fields = ['name', 'productID', 'category', 'description', 'userName', 'userEmail'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error("Error fetching product relations", error);
        return [];
    }
};


export { getProducts, getTypeProducts, getCategoryProducts, getProductsRelations };