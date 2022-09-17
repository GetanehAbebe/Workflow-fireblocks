import axios from "axios";

export const usersActionTypes = {
  FETCH_USERS: "FETCH_USERS",
};

export const addUsers = (users: Object[]) => {
  return {
    type: usersActionTypes.FETCH_USERS,
    payload: users,
  };
};

export const fetchUsers = () => {
  return (dispatch: any) => {
    axios
      .get("localhost:8000/api/users/all")
      .then((res) => {
        return dispatch(addUsers(res.data));
      })
      .catch((e) => {
        console.log("cloud not fetch  the users", e);
      });
  };
};
