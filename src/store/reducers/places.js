import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'
import tajImage from '../../assets/taj.jpg'
const initialState = {
  places: [],
  selectedPlace: null
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

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(p => p.key === action.placeKey)
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null
      };
    default:
      return state

  }
};

export default reducer