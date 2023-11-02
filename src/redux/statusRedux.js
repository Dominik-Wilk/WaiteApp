import { createSelector } from '@reduxjs/toolkit';

const selectStatus = state => state.status;

export const getStatus = createSelector([selectStatus], statuses => statuses);

const createActionName = name => `api/tables/${name}`;
const UPDATE_STATUSES = createActionName('UPDATE_STATUS');
export const updateStatuses = payload => ({ type: UPDATE_STATUSES, payload });

export const fetchStatuses = dispatch => {
  fetch('http://localhost:3131/api/statuses')
    .then(res => res.json())
    .then(statuses => dispatch(updateStatuses(statuses)));
};
const reducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STATUSES:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default reducer;
