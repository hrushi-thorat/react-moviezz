const InitState = {
  movie: {},
  image: {},
  isLoading: true,
};

const detailReducer = (state = InitState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        movie: action.payload.movie,
        image: action.payload.image,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return {
        ...state,
      };
  }
};
export default detailReducer;
