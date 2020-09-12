const updateYear = (year) => ({
  type: "NEW",
  year
});

const incrementYear = () => ({
  type: "NEXT",
});

const decrementYear = () => ({
  type: "PREVIOUS",
});

export default {
  updateYear,
  incrementYear,
  decrementYear
}