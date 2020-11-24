
import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" //window.localStorage
import {mapReducer} from './map/reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    mapReducer
})

export default persistReducer(persistConfig, rootReducer)

export type RootReducers = ReturnType<typeof rootReducer>