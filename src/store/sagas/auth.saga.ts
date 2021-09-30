import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { API } from '../../config'
import {
  SING_UP,
  SignUpAction,
  signUpSuccess,
  signUpFail,
  SIGN_IN,
  SignInAction,
  signInFail,
  signInSuccess
} from '../actions/auth.actions'

function* handleSignUp(action: SignUpAction) {
  try {
    //yield axios.post(`${API}/signup`, action.payload)
    yield put(signUpSuccess())
  } catch (error) {
    yield put(signUpFail('失败！'))
  }

}

function* handleSigIn(action: SignInAction) {
  try {
    //yield axios.post(`${API}/signin`, action.payload)
    let response = {
      data: {
        user: {
          _id: '21',
          name: 'long',
          email: 'long@163.com',
          role: 1
        },
        token: 'jwt'
      }
    }
    localStorage.setItem('jwt', JSON.stringify(response.data))
    yield put(signInSuccess())
  } catch (error) {
    yield put(signInFail('登陆失败'))
  }

}

export default function* authSage () {
  // 注册
  yield takeEvery(SING_UP, handleSignUp)
  yield takeEvery(SIGN_IN, handleSigIn)
}