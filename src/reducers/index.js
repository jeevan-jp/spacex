import { combineReducers } from 'redux';

import selectedYear from './selectedYear';
import filters from './filters';

const rootReducer = combineReducers({
  selectedYear,
  filters
});

export default rootReducer;