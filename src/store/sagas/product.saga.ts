import { takeEvery, put } from "redux-saga/effects";
import { GetProductAction, getProductSuccess, GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../actions/product.actions";

function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
  let response = {
    data: [{
      _id: '12',
      name: '测试',
      price: 12,
      description: "测试商品",
      quantity: 2,
      sold: 2,
      shipping: false,
      createdAt: '2021-02-01',
      category: {
        name: "测试"
      }
    }]
  }
  console.log(sortBy)
  yield put(getProductSuccess(response.data, sortBy))
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct)
}