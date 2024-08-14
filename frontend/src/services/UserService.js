import axios from "axios";

const API_URL = "http://localhost:5000/api/users";
const API_URL_ADD_CART = "http://localhost:5000/api/users/cart";
const API_URL_POP_CART = "http://localhost:5000/api/users/removecart";

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
console.log(getUsers());
export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};
export const addToCart = async (id, fieldToUpdate, newValue) => {
  const response = await axios.put(API_URL_ADD_CART, {
    id,
    fieldToUpdate,
    newValue,
  });
  return response.data;
};
export const delToCart = async (id, fieldToUpdate, newValue) => {
  const response = await axios.put(API_URL_POP_CART, {
    id,
    fieldToUpdate,
    newValue,
  });
  return response.data;
};
