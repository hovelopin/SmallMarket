import HttpClient from '../../network/httpClient';
import ProductService from '../../service/productService';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL).createAxios();
const productService = new ProductService(httpClient);

export const getAllItems = (itemId) => {
  productService.getItems(itemId);
}

export const getItemDetails = (itemId) => {
  productService.getItemDetails(itemId);
}

export const removeItemDetail = () => {
  productService.removeItemDetail();
}