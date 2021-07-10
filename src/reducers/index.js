import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import detailReducer from "./DetailReducer";
const rootReducer = combineReducers({
  movies: moviesReducer,
  details: detailReducer,
});
export default rootReducer;
