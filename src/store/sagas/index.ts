import { all } from "redux-saga/effects";
import authSage from "./auth.saga";

export default function* rootSage () {
  yield all([authSage()])
}