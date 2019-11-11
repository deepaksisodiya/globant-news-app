const initialState = {
  isLoading: false,
  isError: false,
  data: null,
};

const NewsReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'NEWS_FETCH_REQUESTED':
      state = {
        ...state,
        isLoading: true,
      };
      break;
    case 'NEWS_FETCH_FAILED':
      state = {
        ...state,
        isLoading: false,
        isError: true,
      };
      break;
    case 'NEWS_FETCH_SUCCEEDED':
      state = {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
      break;
  }
  return state;
};

export default NewsReducer;
