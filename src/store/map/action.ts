import {
    ActionTypes, 
    MapActionTypes,
    MapState
} from '../interfaces'

// export const addTodo3 = (text: string): AddTodoAction => ({
//     type: "ADD_TODO",
//     text: text
// })

export const switchMap = (mapObject: MapState):MapActionTypes => ({
    type: ActionTypes.START_SWITCH_MAP,
    payload: mapObject
})