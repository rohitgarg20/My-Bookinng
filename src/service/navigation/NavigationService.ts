import { updateCurrentStackName, updateRouterState } from './../../store/action/Navigation/ActionCreator';


export const setCurrentStackName = (dispatch, currentStackName) => {
  dispatch(updateCurrentStackName(currentStackName))
}

export const setRouterState = (dispatch, router) => {
  dispatch(updateRouterState(router))

}