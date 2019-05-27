import {ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes';

const initialState = {
  places: []
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
        places: state.places.filter(
          place => place.key !== state.selectedPlace.key.toString()
        )
      }
    default:
      return state;
  };
}
export default reducer;