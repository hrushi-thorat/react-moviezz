const initState = {
  popular: [],
  top_rated: [],
  upcoming: [],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        popular: action.payload.popular,
        top_rated: action.payload.top_rated,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
