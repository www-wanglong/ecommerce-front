import { all } from "redux-saga/effects";
import authSage from "./auth.saga";
import categorySage from './category.saga'
import productSaga from "./product.saga";

export default function* rootSage () {
  yield all([authSage(), categorySage(), productSaga()])
}