import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initState = {
  users: [
    {
      id: "1",
      username: "徐文江",
      password: "Password",
      avatar: "https://picsum.photos/200/300?random=1",
    },
  ],
};

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
      console.log('删除成功')
    },
  },
});
export default userSilce.reducer;
export const { add, edit,del } = userSilce.actions;
