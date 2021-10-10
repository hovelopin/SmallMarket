import * as actionTypes from '../redux/actionTypes/product/productActionTypes';

export default class ProductService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getItems = (itemId) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ITEMS });
      if(!itemId) {
        const { data } = await this.httpClient.get('/items/list');
        dispatch({
          type: actionTypes.GET_ITEMS_SUCCESS,
          payload: data,
        });
      } // TODO: add product id select
    } catch(error) {
      dispatch({
        type: actionTypes.GET_ITEMS_FAIL,
        payload:
          error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
      });
    }
  }

  getItemDetails = (itemId) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ITEMS_DETAILS });
      const { data } = await this.httpClient.post('/items/detail', {
          id: itemId,
        }
      );
      dispatch({
        type: actionTypes.GET_ITEMS_DETAILS_SUCCESS,
        payload: data,
      });
    } catch(error) {
      dispatch({
        tpye: actionTypes.GET_ITEMS_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  }

  removeItemDetail = () => (dispatch) => {
    dispatch({
      type: actionTypes.GET_ITEMS_DETAILS_RESET,
    });
  }
}