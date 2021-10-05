import HttpClient from '../../network/httpClient';
import CartService from '../../service/cartService';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL).createAxios();
const cartService = new CartService(httpClient);

export const addCart = (productId, quantity) => {
  cartService.addCart(productId, quantity);
}

export function removeCart(productId) {
  cartService.removeCart(productId);
}