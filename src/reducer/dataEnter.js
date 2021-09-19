import { handleActions } from "redux-actions";
import * as action from "../actions/index";
const initialState = [];
const dataReducer = handleActions(
  {
    [action.loginRequest]: (state, action) => action.payload,
  },
  { initialState }
);

export default dataReducer;
