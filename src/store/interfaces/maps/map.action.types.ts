import {MapState} from './map.state.types'

export const START_SWITCH_MAP = 'START_SWITCH_MAP'

export const ActionTypes = {
    START_SWITCH_MAP
}

interface SwitchMap {
    type: typeof ActionTypes.START_SWITCH_MAP;
    payload: MapState
}

export type MapActionTypes = SwitchMap 