import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PAGE_SIZE } from "../../tools/constants";
const initState = {
  users: [],
  imgUrl: "",
  total: 0,
  current: 0,
};
export const getUsers = createAsyncThunk("users/getusers", async (props) => {
  const response = await axios({
    method: "GET",
    url: `http://localhost:4000/users/getuser`,
    params: {
      page: props,
      pageSize: PAGE_SIZE,
    },
  });
  return response.data;
});

const userSilce = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    add: (state, action) => {
      const { username, password, avatar } = action.payload;
      state.users.push({ ...action.payload });
    },
    edit: (state, action) => {
      const { id, username, password, avatar } = action.payload;

      const existingUser = state.users.find((user) => user.id === id);
      existingUser.password = password;
      existingUser.username = username;
      existingUser.avatar = avatar;
      console.log("existingUser", existingUser.username);
      console.log("保存成功");
    },
    del: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter((item) => item.id !== id);
      console.log("删除成功");
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUsers.fulfilled, (state, action) => {
      // Add user to the state array
      const { result, message, total, userList } = action.payload;
      state.users = userList;
      state.total = total;
    });
  },
});
export default userSilce.reducer;
export const { add, edit, del } = userSilce.actions;
