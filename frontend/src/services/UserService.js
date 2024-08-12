import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
console.log(getUsers());
export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};
