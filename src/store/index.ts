import { createStore } from "redux";

// Define the initial state of the store
const initialState = {
  username: "",
};

// Define the reducer function
// how the state should be updated in response to dispatched actions
// state = current state of the store
// action = the action being dispatched
function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(rootReducer);

export default store;
