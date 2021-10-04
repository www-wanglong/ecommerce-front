import axios, { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { API } from "../../config";
import { getCategorySuccess, GET_CATEGORY } from "../actions/category.actions";
import { Category } from "../models/category";

export

function* handleGetCategory() {
  try {
    //let response:AxiosResponse = yield axios.get<Category[]>(`${API}/categories`)\
    let response = {
      data: [{_id: '12', name: 'vue'}, {_id: '13', name: 'react'}]
    }
    yield put(getCategorySuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

export default function* categorySaga() {
  // 获取列表
  yield takeEvery(GET_CATEGORY, handleGetCategory)
}