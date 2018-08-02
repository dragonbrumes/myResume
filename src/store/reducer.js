const initialState = "";

const reducer = (State = initialState, action = {}) => {
  switch (action.type) {
    case "TRACK_MESSAGE":
      return action.value;
    case "SEND_MESSAGE":
      return initialState;
    default:
      return State;
  }
};

export default reducer;
