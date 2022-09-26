import React, { useReducer } from "react";
import UserReduce from "./UserReduce";
import { UserContext } from "./UserContext";
import axios from "axios";

export const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReduce, initialState);

  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    dispatch({
      type: "GET_USERS",
      payload: res.data.data,
    });
  };

  const getProfile = async (id) => {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(res.data);
    dispatch({
      type: "GET_PROFILE",
      payload: res.data.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
