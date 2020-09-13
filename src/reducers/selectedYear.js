import { NEW_YEAR } from "../actionTypes/year";

const selectedYear = (state = null, action) => {
  switch(action.type) {
    case NEW_YEAR:
      return action.year;
    default:
      return state;
  }
}

export default selectedYear;