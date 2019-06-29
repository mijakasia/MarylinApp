const initialState = {
    photos: [],
}

const flickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FLICKER_IMAGES':
        return { ...state, photos: [...state.photos, ...action.photos] };
    default:
        return state;
  }
};

export default flickerReducer;
