import axios from "axios";
import { PositionInterface } from "../../components/WorkFlow/interfaces";

export const positionActionTypes = {
  ADD_POSITION: "ADD_POSITION",
  ADD_POSITION_TO_API: "ADD_POSITION_TO_API",
  GET_POSITIONS: "GET_POSITIONS",
  REMOVE_USER_FROM_POSITION: "REMOVE_USER_FROM_POSITION",
};

export const deltePositionFromState = (obj: PositionInterface) => {
  return {
    type: positionActionTypes.REMOVE_USER_FROM_POSITION,
    payload: obj,
  };
};

export const addPosition = (obj: PositionInterface) => {
  return {
    type: positionActionTypes.ADD_POSITION,
    payload: obj,
  };
};

export const addPositionToApi = (obj: PositionInterface) => {
  return {
    type: positionActionTypes.ADD_POSITION_TO_API,
    payload: obj,
  };
};

export const getInitialPositions = (obj: any) => {
  return {
    type: positionActionTypes.GET_POSITIONS,
    payload: obj,
  };
};

export const deletePositionFromApi = (obj: PositionInterface) => {
  const { date, position } = obj;
  return (dispatch: any) => {
    axios
      .delete(`localhost:8000/api/positions/delete/${date}/${position}`)
      .then((res) => {
        return dispatch(deltePositionFromState(obj));
      })
      .catch((e) => {
        console.log("could not send the request", e);
      });
  };
};

export const getPositionsByDate = (date: String) => {
  return (dispatch: any) => {
    axios
      .get(`localhost:8000/api/positions/${date}`)
      .then(({ data }) => {
        return dispatch(getInitialPositions({ date, data }));
      })
      .catch((e) => {
        console.log("could not send the request", e);
      });
  };
};
