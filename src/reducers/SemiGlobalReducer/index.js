import { LOGIN_SUCCESS } from "../../actions/SemiGlobalActions";

const semiGlobalReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, data: {
          authenticated: true
        }
      }
    default:
      return state;
  }
};

export { semiGlobalReducer };
