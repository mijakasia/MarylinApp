const initialState = {
    photos: [],
}

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PHOTOS_SUCCESS':
        return { ...state, photos: [...state.photos, ...action.photos] };
    case 'GET_PHOTOS_FAILURE':
        return {...state}
    default:
        return state;
  }
};

export default photosReducer;
