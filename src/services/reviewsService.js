import axios from "axios";

const REVIEWS_BASE_URL = "http://localhost:8005/api/reviews";

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

const getReviews = async () => {
    try {
        const response = await axios.get(`${REVIEWS_BASE_URL}/list`);
        const fields = ['reviewID', 'rating', 'feedback', 'user'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error("Error fetching reviews", error);
        return [];
    }
};

const getTypeReviews = async (type) => {
    try {
        const response = await axios.get(`${REVIEWS_BASE_URL}/getByType`, { params: { type } });
        const fields = ['reviewID', 'rating', 'feedback', 'user'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error(`Error fetching reviews of type ${type}`, error);
        return [];
    }
};

const getRatingReviews = async (rating) => {
    try {
        const response = await axios.get(`${REVIEWS_BASE_URL}/getByRating`, { params: { rating } });
        const fields = ['reviewID', 'rating', 'feedback', 'user'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error(`Error fetching reviews with rating ${rating}`, error);
        return [];
    }
};

const getReviewsRelations = async () => {
    try {
        const response = await axios.get(`${REVIEWS_BASE_URL}/getReviewsRelations`);
        const fields = ['reviewID', 'rating', 'feedback', 'userName', 'userEmail'];
        const cleansedData = cleanseData(response.data, fields);
        return cleansedData;
    } catch (error) {
        console.error("Error fetching review relations", error);
        return [];
    }
};

export { getReviews, getTypeReviews, getRatingReviews, getReviewsRelations };
