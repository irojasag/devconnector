import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload; // Will come with errors object and add it to Redux state
    default:
      return state;
  }
};
