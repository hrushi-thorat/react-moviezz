const InitState = {
  movie: {},
  image: {},
};

const detailReducer = (state = InitState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        movie: action.payload.movie,
        image: action.payload.image,
      };
    default:
      return {
        ...state,
      };
  }
};
export default detailReducer;
