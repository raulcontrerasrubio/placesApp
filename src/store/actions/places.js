import { ADD_PLACE, DELETE_PLACE} from './actionTypes';

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    fetch('https://placesapp-29404.firebaseio.com/storeImage', {
      method: 'POST',
      body: JSON.stringify({
        image: image.base64
      })
    })
    .then(res => res.json())
    .then(parsedRes => {
      const placeData = {
        name: placeName,
        location: location,
        image: parsedRes.imageUrl
      };
      return fetch('https://placesapp-29404.firebaseio.com/places.json', {
        method: 'POST',
        body: JSON.stringify(placeData)
      })
    })
    .then(res => res.json())
    .then(parsedRes => {
      alert(JSON.stringify(parsedRes));
    })
    .catch(err => alert(err))
    
};
};

export const deletePlace = (key) => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};