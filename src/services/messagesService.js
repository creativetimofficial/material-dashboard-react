import axios from "axios";

const BASE_URL = "http://localhost:8006/api/message";

const cleanseData = (rawData, fields) => {
  return rawData.map((item) => {
    const cleansedItem = {};
    fields.forEach((field) => {
      if (item[field]) {
        cleansedItem[field] = item[field].value;
      }
    });
    return cleansedItem;
  });
};

const getMessages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/messages`);
    const fields = ["messageType", "messageID", "content", "sentBy"];
    const cleansedData = cleanseData(response.data, fields);
    return cleansedData;
  } catch (error) {
    console.error("Error fetching messages", error);
    return [];
  }
};


const getMessagesRelations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getMessagesRelations`);
    const fields = ["messageType", "messageID", "content", "sentBy", "userName", "userEmail"];
    const cleansedData = cleanseData(response.data, fields);
    return cleansedData;
  } catch (error) {
    console.error("Error fetching message relations", error);
    return [];
  }
};

export { getMessages, getMessagesRelations };
