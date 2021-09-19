import { createSelector } from 'reselect';

const loginDataSelector = state => state.dataReducer;

export const loginSelector  = createSelector(
    loginDataSelector,
    item => item
  );

  