const loggedReducer = (state = "", action) => {
  switch(action.type) {
    case "SIGN_IN":
      return {
        ...state,
        username: action.username
      };
    case "SIGN_OUT":
      return state = "";
    default:
      return state;
  }
}

export default loggedReducer;