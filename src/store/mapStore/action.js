import {ActionTypes} from './actionType'

export const switchMap = (mapObject) => ({
    type: ActionTypes.START_SWITCH_MAP,
    payload: mapObject
})