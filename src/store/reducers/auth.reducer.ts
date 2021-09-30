import { AuthUnionType, RESET_SING_UP, SIGN_IN, SIGN_IN_FAIL, SIGN_IN_SUCCESS, SING_UP, SING_UP_FAIL, SING_UP_SUCCESS } from "../actions/auth.actions";

export interface AuthState {
  signUp: {
    loaded: boolean,
    success: boolean,
    message?: string,
  },
  signIn: {
    loaded: boolean,
    success: boolean,
    message?: string,
  }
}

const initialState: AuthState = {
  signUp: {
    loaded: false,
    success: false,
    message: '',
  },
  signIn: {
    loaded: false,
    success: false,
    message: '',
  }
}

export default function authReducer (state = initialState, action: AuthUnionType) {
  switch (action.type) {
    case SING_UP:
      return {
        ...state,
        signUp: {
          loaded: false,
          success: false,
        }
      }
    case SING_UP_SUCCESS:
      return {
        ...state,
        signUp: {
          loaded: true,
          success: true,
        }
      }
    case SING_UP_FAIL:
      return {
        ...state,
        signUp: {
          loaded: true,
          success: false,
          message: action.message
        }
      }
    case RESET_SING_UP:
      return {
        ...state,
        signUp: {
          loaded: false,
          success: false,
          message: '',
        }
      }
    case SIGN_IN:
      return {
        ...state,
        signIn: {
          loaded: false,
          success: false,
          message: '',
        }
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signIn: {
          loaded: true,
          success: true,
          message: '',
        }
      }
    case SIGN_IN_FAIL:
      return {
        ...state,
        signIn: {
          loaded: true,
          success: false,
          message: action.message,
        }
      }
    default:
      return state;
  }
}