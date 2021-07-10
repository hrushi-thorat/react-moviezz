import axios from "axios";
import { MoviedetailsURL } from "../api";
import { MovieImagesURL } from "../api";
export const loadDetails = (id) => async (dispatch) => {
  const DetailData = await axios.get(MoviedetailsURL(id));
  const imageData = await axios.get(MovieImagesURL(id));
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      movie: DetailData.data,
      image: imageData.data,
    },
  });
};
