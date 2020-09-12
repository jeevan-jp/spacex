const initialState = {
  yearFilter: false,
  launchSuccess: false,
  landingSuccess: false
};

const filters = (state = initialState, action) => {
  switch(action.type) {
    case "LAUNCH_SUCCESS":
      return { ...state, launchSuccess: Boolean(action.value) }
    case "LANDING_SUCCESS":
      return { ...state, launchSuccess: Boolean(action.value) }
    case "YEAR_FILTER":
      return { ...state, yearFilter: Boolean(action.value) }
    default:
      return state;
  }
}

export default filters;