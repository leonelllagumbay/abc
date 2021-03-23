import { LOGIN_SUCCESS } from "../../actions/SemiGlobalActions";

const semiGlobalReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, data: {
          authenticated: true
        }
      }
    case 'LOADING_ON':
      return {...state, data: {
        loading: true
      }
    }
    case 'LOADING_OFF':
      return {...state, data: {
        loading: false
      }
    }
    default:
      return state;
  }
};

export { semiGlobalReducer };
