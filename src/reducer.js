const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ADVICE':
      const { id, advice } = action.payload;
      return {
        ...state,
        id,
        advice: advice.replace('"', "'"),
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
