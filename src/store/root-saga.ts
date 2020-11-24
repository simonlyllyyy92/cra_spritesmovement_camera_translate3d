import { all } from "redux-saga/effects"

export default function* rootSaga() {
  try {
    yield all([])
  } catch (e) {
    console.log("error caught in rootsaga:", e)
  }
}