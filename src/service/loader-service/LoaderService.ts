import { hideLoader, showLoader } from "../../store/action/Loader/ActionCreator"

export const showActivityLoader = (dispatch) => {
  dispatch(showLoader())
}

export const hideActivityLoader = (dispatch) => {
  dispatch(hideLoader())
}