
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" //window.localStorage
import {mapReducer} from './mapStore/reducer'

const persistConfig = {
  key: "root", // at what point inside of our reducer object do we want to start
  storage, // the storage key goes to what ever the storage object from redux persist we are trying to use this
  whitelist: [],
}

const rootReducer = combineReducers({
  mapReducer: mapReducer,
})

export default persistReducer(persistConfig, rootReducer)