const initalState = {
  user_name: "",
  title: "",
  profile_pic: "",
  email: "",
  gender: "",
  loggedIn: false,
  user: null,
  user_id:null,
  blood_type:''
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
      console.log(payload)
      const { user_name,title,profile_pic, email, gender,user_id,blood_type } = payload;
      return { ...state, user_name,title,profile_pic, email, gender,user_id:user_id,blood_type };
    case CANCEL:
      return { state };
    default:
      return state;
  }
};
