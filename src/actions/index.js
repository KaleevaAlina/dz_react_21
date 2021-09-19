import { createAction } from "redux-actions";

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFail = createAction("LOGIN_FAIL");
