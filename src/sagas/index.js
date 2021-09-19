import { takeEvery, all } from "redux-saga/effects";
import lodash from "lodash";
import * as callMethods from "./callMethodsLogRegCreate";


export function* mySagaGeneric(action) {
  const { payload, type } = action;
  console.log(payload, "PAYLOAD");
  console.log(type, "TYPE");
  const methodName = lodash.camelCase(type);
  const request = callMethods[methodName](payload);
  yield request;
}

export function* mySagaAll(action) {
  yield takeEvery(({ type }) => /_REQUEST$/g.test(type), mySagaGeneric);
}

export function* rootSaga() {
  yield all([mySagaAll()]);
}
