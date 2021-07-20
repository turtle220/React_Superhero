function reducer(state = { value: [] }, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: ""
      };
    case "SearchData":
      return { ...state, value: action.results};

    default:
      return state;
  }
}

export default reducer;