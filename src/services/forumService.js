import axios from "axios";

const BASE_URL = "http://localhost:8005/api/forum";

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

const getForums = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/forums`);
    const fields = ["title", "forumID",  "user", "questions"];
    const cleansedData = cleanseData(response.data, fields);
    return cleansedData;
  } catch (error) {
    console.error("Error fetching forums", error);
    return [];
  }
};

const getForumByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/getByTitle`, { params: { title } });
    const fields = ["title", "forumID", "user", "questions"];
    const cleansedData = cleanseData(response.data, fields);
    return cleansedData;
  } catch (error) {
    console.error(`Error fetching forums of title ${title}`, error);
    return [];
  }
};


const getForumsRelations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getForumsRelations`);
    const fields = ["title", "forumID", "user", "questions", "userName", "userEmail"];
    const cleansedData = cleanseData(response.data, fields);
    return cleansedData;
  } catch (error) {
    console.error("Error fetching forum relations", error);
    return [];
  }
};

export { getForums, getForumByTitle, getForumsRelations };
