import { positionActionTypes } from "./action";
import axios from "axios";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case positionActionTypes.ADD_POSITION: {
      const { date, position, user } = action.payload;

      if (!state[date]) {
        state[date] = {};
      }

      if (
        !state[date][position] &&
        !Object.values(state[date]).includes(user)
      ) {
        state[date][position] = user;
      }
      return { ...state };
    }

    case positionActionTypes.ADD_POSITION_TO_API:
      axios
        .post("http://localhost:8000/api/positions/add", action.payload)
        .then((res) => {
          console.log("request sent", res);
        })
        .catch((e) => {
          console.log("could not send the request", e);
        });
      return { ...state };

    case positionActionTypes.GET_POSITIONS:
      const { date, data } = action.payload;
      return { ...state, [date]: data };

    case positionActionTypes.REMOVE_USER_FROM_POSITION:
      delete state[action.payload.date][action.payload.position];
      return { ...state };

    default:
      return state;
  }
}
