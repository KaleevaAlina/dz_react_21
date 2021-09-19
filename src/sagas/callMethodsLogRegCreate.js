import {axiosForLoginAndRegistration }from '../axios';
import { call, select } from 'redux-saga/effects';
import {loginSelector} from '../selectors/index'



export function* loginRequest(payload) {
  console.log("hellow world");
  const a = yield select (loginSelector);
  console.log(a);
  const user = yield call(axiosForLoginAndRegistration, 'https://test-todoist.herokuapp.com/api/tasks',  'get');
  console.log(user);
}

