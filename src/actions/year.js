import { NEW_YEAR } from '../actionTypes/year';

const updateYear = (year) => ({
  type: NEW_YEAR,
  year
});

export default {
  updateYear,
}