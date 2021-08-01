import { SIGNIN_USER_ACTION, SIGNUP_USER_ACTION } from './../../action/signup-login/ActionTypes';

const initialState = {}

const signupLoginReducer = (state = initialState, action) => {
  switch(action.type){
    case SIGNUP_USER_ACTION:
      return {
        ...state
      }

    case SIGNIN_USER_ACTION:
      return {
        ...state
      }

    default:
      return state
  }
}

export {
  signupLoginReducer
}