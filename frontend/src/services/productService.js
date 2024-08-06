import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
console.log(getProducts());
export const createProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};
