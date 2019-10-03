const initalState = {
  user_name: "",
  title: "",
  profile_pic: "",
  email: "",
  gender: "",
  loggedIn: false,
  user: null
};

export const SET_USER = "SET_USER";
export const CANCEL = "CANCEL";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export default (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      const { user_name,title,profile_pic, email, gender } = payload;
      return { ...state, user_name,title,profile_pic, email, gender };
    case CANCEL:
      return { state };
    default:
      return state;
  }
};
