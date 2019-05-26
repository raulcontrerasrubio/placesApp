import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

let currentKey = 0;

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: (++currentKey).toString(),
          name: action.placeName,
          image: {
            uri: "https://facebook.github.io/react/logo-og.png"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        selectedPlace: null,
        places: state.places.filter(
          place => place.key !== state.selectedPlace.key.toString()
        )
      }
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      }
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      }
    default:
      return state;
  }
};

export default reducer;