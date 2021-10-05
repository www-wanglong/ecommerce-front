import { takeEvery, put } from "redux-saga/effects";
import { FilterProductAction, filterProductSuccess, FILTER_PRODUCT, GetProductAction, GetProductByIdAction, getProductByIdSuccess, getProductSuccess, GET_PRODUCT, GET_PRODUCT_BY_ID, GET_PRODUCT_SUCCESS, searchProduct, SearchProductAction, searchProductSuccess, SEARCH_PRODUCT } from "../actions/product.actions";

const product1 = {
  _id: '12',
  name: '测试',
  price: 12,
  description: "测试商品",
  quantity: 2,
  sold: 2,
  shipping: false,
  createdAt: '2021-02-01',
  category: {
    _id: 'cat',
    name: "测试"
  }
}

const product2 = {
  _id: '121',
  name: '测试2',
  price: 12,
  description: "测试商品2",
  quantity: 2,
  sold: 2,
  shipping: false,
  createdAt: '2021-02-01',
  category: {
    _id: 'cat',
    name: "测试2"
  }
}

function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
  let response = {
    data: [product1, product2]
  }
  console.log(sortBy)
  yield put(getProductSuccess(response.data, sortBy))
}

function* handleSearchProduct({payload: { search, category }}: SearchProductAction) {
  try {
    let response = {
      data: [product1]
    }
    yield put(searchProductSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

function* handleFilterProduct(action: FilterProductAction) {
  let response = {size: '1', data: [product1]}
  yield put(filterProductSuccess(response, action.payload.skip))
}

function* handleProductById(action: GetProductByIdAction) {
  console.log(action.payload.productId)
  let product = product1
  yield put(getProductByIdSuccess(product))
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct)
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct)
  yield takeEvery(FILTER_PRODUCT, handleFilterProduct)
  yield takeEvery(GET_PRODUCT_BY_ID, handleProductById)
}