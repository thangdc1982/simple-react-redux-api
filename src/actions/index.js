export const increment = (accumalator) => {
  return {
    type: "INCREMENT",
    payload: accumalator
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  }
};

export const login = (username) => {
  return {
    type: "SIGN_IN",
    username: username
  };
};

export const logout = () => {
  return {
    type: "SIGN_OUT"
  };
};