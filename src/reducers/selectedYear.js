const selectedYear = (state = new Date().getUTCFullYear(), action) => {
  switch(action.type) {
    case "NEW":
      return action.year;
    case "NEXT":
      return parseInt(state) = 1;
    case "PREVIOUS":
      return parseInt(state) - 1;
    default:
      return state;
  }
}

export default selectedYear;