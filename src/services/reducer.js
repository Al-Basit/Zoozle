export const initialState = {
  term: null,
  indexValue: 0,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_INDEX_VALUE: "SET_INDEX_VALUE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    case actionTypes.SET_INDEX_VALUE:
      return {
        ...state,
        indexValue: action.indexValue,
      };

    default:
      return state;
  }
};

export default reducer;
