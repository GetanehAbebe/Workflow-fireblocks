import { usersActionTypes } from "./action";

const initialState = {
  usersList: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case usersActionTypes.FETCH_USERS: {
      state.usersList = action.payload;

      return { ...state };
    }
    default:
      return state;
  }
}
