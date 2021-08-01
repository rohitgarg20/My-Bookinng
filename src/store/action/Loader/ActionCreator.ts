import { SHOW_LOADER_ACTION, HIDE_LOADER_ACTION } from './ActionTypes';

const showLoader = () => ({
  type: SHOW_LOADER_ACTION
})

const hideLoader = () => ({
  type: HIDE_LOADER_ACTION
})

export {
  showLoader,
  hideLoader
}