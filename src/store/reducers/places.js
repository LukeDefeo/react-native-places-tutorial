import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'
import tajImage from '../../assets/taj.jpg'
const initialState = {
  places: [],
};

//reducers must not modify their inputs
const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_PLACE:
      return {
        ...state, //this copies everything from state into this obj
        places: state.places.concat({
          name: action.placeName,
          key: Math.random().toString(),
          image: {
            uri: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg"
          }
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.placeKey),
        selectedPlace: null
      };
    default:
      return state

  }
};

export default reducer