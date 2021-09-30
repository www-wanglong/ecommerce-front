export const SING_UP = "SING_UP"
export const SING_UP_SUCCESS = "SING_UP_SUCCESS"
export const SING_UP_FAIL = "SING_UP_FAIL"
export const RESET_SING_UP = "RESET_SING_UP"

export interface SignUpPayload {
  email: string;
  name: string;
  password: string;
}

export interface SignUpAction {
  type: typeof SING_UP,
  payload: SignUpPayload,
}

export interface SignUoSuccessAction {
  type: typeof SING_UP_SUCCESS,
}

export interface SignUpFailAction {
  type: typeof SING_UP_FAIL,
  message: string,
}

export interface ResetSignUpAction {
  type: typeof RESET_SING_UP,
}


export const signUp = (payload: SignUpPayload): SignUpAction => ({
  type: SING_UP,
  payload
})

export const signUpSuccess = (): SignUoSuccessAction => ({
  type: SING_UP_SUCCESS,
})

export const signUpFail = (message: string): SignUpFailAction => ({
  type: SING_UP_FAIL,
  message,
})

export const resetSignUp = (): ResetSignUpAction => ({
  type: RESET_SING_UP
})

export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL'

export interface SignInPayload {
  email: string,
  password: string,
}

export interface SignInAction {
  type: typeof SIGN_IN,
  payload: SignInPayload,
}

export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS
}

export interface SignInFailAction {
  type: typeof SIGN_IN_FAIL,
  message: string,
}

export const signIn = (payload: SignInPayload): SignInAction => ({
  type: SIGN_IN,
  payload,
})

export const signInSuccess = (): SignInSuccessAction => ({
  type: SIGN_IN_SUCCESS
})

export const signInFail= (message: string): SignInFailAction => ({
  type: SIGN_IN_FAIL,
  message
})

export type AuthUnionType =
  | SignUpAction
  | SignUoSuccessAction
  | SignUpFailAction
  | ResetSignUpAction
  | SignInAction
  | SignInSuccessAction
  | SignInFailAction