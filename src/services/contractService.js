import axios from "axios";

const BASE_URL = "http://localhost:8005/api/contracts";

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

const getContracts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/AllContracts`);
        const fields = ['contractID', 'type', 'user', 'terms'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error("Error fetching contracts", error);
        return [];
    }
};

const getContractsType = async (type) => {
    try {
        const response = await axios.get(`${BASE_URL}/getType`, { params: { type } });
        const fields = ['contractID', 'type', 'user', 'terms'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error(`Error fetching contract of type ${type}`, error);
        return [];
    }
};

const getContractsByUser = async (user) => {
    try {
        const response = await axios.get(`${BASE_URL}/getByUser`, { params: { user } });
        const fields = ['contractID', 'type', 'user', 'terms'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error(`Error fetching contract of user ${user}`, error);
        return [];
    }
};


export { getContracts, getContractsType, getContractsByUser };