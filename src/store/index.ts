import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loaderReducer } from "./reducer/loader/Loader";
import { navigationReducer } from "./reducer/navigation/NavigationReducer";
import { signupLoginReducer } from "./reducer/signup-login/SignupLogin";

const rootReducer = combineReducers({
  signUpLoginReducer: signupLoginReducer,
  loaderReducer: loaderReducer,
  navigationReducer: navigationReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export {
  store
}