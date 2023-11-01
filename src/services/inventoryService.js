import axios from "axios";

const BASE_URL = "http://localhost:8005/api/inventories";

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

const getInventories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/Getinventories`);
        const fields = ['inventoryID', 'type'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error("Error fetching inventories", error);
        return [];
    }
};

const getInventoriesByType = async (type) => {
    try {
        const response = await axios.get(`${BASE_URL}/getInventoriesByType`, { params: { type } });
        const fields = ['inventoryID', 'type'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error(`Error fetching inventory of type ${type}`, error);
        return [];
    }
};



export { getInventories, getInventoriesByType };