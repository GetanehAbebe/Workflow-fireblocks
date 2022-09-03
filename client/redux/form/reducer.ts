import { getNextWeekDay } from "../../components/WorkFlow/helpers";
import { formStateTypes } from "./action";

const initialState = {
  date: getNextWeekDay().toISOString().slice(0, 10),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case formStateTypes.CHNAGE_STATE: {
      const { name, value } = action.payload;
      state[name] = value;
      return { ...state };
    }

    default:
      return state;
  }
}
