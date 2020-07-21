import * as ActionTypes from "./ActionTypes";

export const Forms = (state = { errMess: null, forms: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      var form = action.payload;
      return { ...state, forms: state.forms.concat(form) };

    default:
      return state;
  }
};

export const InitialFeedback = {
  firstname: "",
  lastname: "",
  telnum: "",
  email: "",
  agree: false,
  contactType: "Tel.",
  message: "",
};