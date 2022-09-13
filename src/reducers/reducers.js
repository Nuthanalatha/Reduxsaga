import { Types } from "../actions/userActionTypes";

const initialState = {
  items: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};
