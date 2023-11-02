import { createSelector } from '@reduxjs/toolkit';

const selectTables = state => state.tables;
const selectTableId = (state, id) => id;

export const getTables = createSelector([selectTables], tables => tables);
export const getTableById = createSelector(
  [selectTables, selectTableId],
  (tables, id) => tables.find(table => table.id === id)
);
const createActionName = name => `api/tables/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

export const updateTables = payload => ({ type: UPDATE_TABLES, payload });

export const fetchTables = dispatch => {
  fetch('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)));
};

const reducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default reducer;
