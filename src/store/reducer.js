// eslint-disable-next-line no-unused-vars
const reducer = (state, action) => {
  switch (action.type) {
    case "setTicket":
      return {
        ...state,
        ticket: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
