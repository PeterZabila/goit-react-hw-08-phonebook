import { setFilter } from './filter-actions';
import { createReducer } from '@reduxjs/toolkit';

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});


export default filterReducer;
