import { UPDATE_ROUTER_STATE, UPDATE_STACK_NAME } from './ActionTypes';

export const updateCurrentStackName = (payload) => ({
  type: UPDATE_STACK_NAME,
  payload
})

export const updateRouterState = (payload) => ({
  type: UPDATE_ROUTER_STATE,
  payload
})