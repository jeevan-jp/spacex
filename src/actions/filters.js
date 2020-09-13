import { LAUNCH_SUCCESS, LANDING_SUCCESS, YEAR_FILTER } from "../actionTypes/filters";

const launchSuccess = (value) => ({
  type: LAUNCH_SUCCESS,
  value
});

const landingSuccess = (value) => ({
  type: LANDING_SUCCESS,
  value
});

const yearFilter = (value) => ({
  type: YEAR_FILTER,
  value
});

export default {
  launchSuccess,
  landingSuccess,
  yearFilter
}