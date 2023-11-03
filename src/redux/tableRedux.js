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
const EDIT_TABLE = createActionName('EDIT_TABLE');
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });

export const fetchTables = dispatch => {
  fetch('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)));
};

// export const fetchTables = () => {
//   return dispatch => {
//     fetch('http://localhost:3131/api/tables')
//       .then(res => res.json())
//       .then(tables => dispatch(updateTables(tables)));
//   };
// };

export const updateDataOnServer = (id, updatedData) => {
  return dispatch => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    };

    fetch(`http://localhost:3131/tables/${id}`, options)
      .then(res => res.json())
      .then(data => dispatch(editTable(data)));
  };
};

const reducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map(table =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};
export default reducer;
