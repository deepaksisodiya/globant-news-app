const initialState = {
  isLoading: false,
  isError: false,
  data: null,
};

const topNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOPNEWS_FETCH_REQUESTED':
      state = {
        ...state,
        isLoading: true,
      };
      break;
    case 'TOPNEWS_FETCH_FAILED':
      state = {
        ...state,
        isLoading: false,
        isError: true,
      };
      break;
    case 'TOPNEWS_FETCH_SUCCEEDED':
      state = {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
      break;
    default:
      state = {
        ...initialState
      };
      break;
  }
  return state;
};

export default topNewsReducer;
