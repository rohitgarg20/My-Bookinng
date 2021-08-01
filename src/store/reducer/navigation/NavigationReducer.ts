import { UPDATE_ROUTER_STATE, UPDATE_STACK_NAME } from './../../action/Navigation/ActionTypes';
const initialState = {
  currentStackName: 'SignupLogin',
  router: undefined
}

export const navigationReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_STACK_NAME:
      return {
        ...state, currentStackName: action.payload
      }

    case UPDATE_ROUTER_STATE:
      return {
        ...state,
        router: action.payload
      }

    default:
      return state
  }
}