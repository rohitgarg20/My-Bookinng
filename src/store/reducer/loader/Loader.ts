import { SHOW_LOADER_ACTION, HIDE_LOADER_ACTION } from './../../action/Loader/ActionTypes';

interface I_INITIAL_STATE {
  isLoading: boolean
}

const initialState: I_INITIAL_STATE = {
  isLoading: false
}



const loaderReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_LOADER_ACTION:
      return {
        ...state,
        isLoading: true
      }

    case HIDE_LOADER_ACTION:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export {
  loaderReducer
}