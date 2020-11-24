import { createStore, applyMiddleware, compose } from "redux"
import { persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./root-reducer"
import rootSaga from "./root-saga"

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store as any)

export type AppDispatch = typeof store.dispatch

export { store, persistor }