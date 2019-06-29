export default function getPhotos(API_KEY) {
  return (dispatch) => fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=monroe%2Cmarylin&tag_mode=all&sort=date-posted-desc&per_page=9&content_type=1&format=json&nojsoncallback=1`)
    .then((response) => {
      if (response.status >= 400) throw Object.assign({ status: response.status });
      return response.json()
    })
    .then((data) => {
      if (!data || !Array.isArray(data.photos.photo)) throw Object.assign({ status: 400 });
      const x = data.photos.photo;
      dispatch(receiveGetPhotos(x));
    })
    .catch(error => {
      console.error(error);

      if (!(error instanceof TypeError)) {
        dispatch(getPhotosFailure(error.status));
      }
    })
}

function receiveGetPhotos(response) {
  return {
    type: 'GET_PHOTOS_SUCCESS',
    photos: response,
  };
}

function getPhotosFailure(status) {
  return {
    type: 'GET_PHOTOS_FAILURE',
    status
  }
}
