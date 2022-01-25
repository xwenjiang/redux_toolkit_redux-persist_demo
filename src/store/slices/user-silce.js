import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ajax from "../../tools/ajax";
import { PAGE_SIZE } from "../../tools/constants";
const initState = {
  users: [],
  imgUrl: "",
  total: 0,
  current: 0,
};
export const getUsers = createAsyncThunk("users/getusers", async (props) => {
  const response = await ajax({
    method: "GET",
    url: `http://localhost:4000/users/getuser`,
    params: {
      page: props,
      pageSize: PAGE_SIZE,
    },
  });
  return response.data;
});
export const addUser = createAsyncThunk("users/adduser", async (user) => {
  const response = await ajax.post(`http://localhost:4000/users/adduser`, user);

  return response.data;
});
export const editUser = createAsyncThunk("users/edituser", async (user) => {
  const response = await ajax.post(
    `http://localhost:4000/users/edituser`,
    user
  );

  return response.data;
});
export const deleteUser = createAsyncThunk("users/deleteuser", async (_id) => {
  const response = await ajax.post(`http://localhost:4000/users/deleteuser`, {
    _id,
  });

  return response.data;
});

const userSilce = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    add: (state, action) => {
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
      const { total, userList } = action.payload;
      state.users = userList;
      state.total = total;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      // Add user to the state array
      const { data } = action.payload;
      for (let index = 0; index < state.users.length; index++) {
        const element = state.users[index];
        if (element._id === data._id) {
          state.users[index].username = data.username;
          state.users[index].age = data.age;
          state.users[index].avatar = data.avatar;
        }
      }
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      const { _id } = action.payload.data;

      state.users = state.users.filter((item) => item._id !== _id);
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      if (action.payload.stauts === "1") {
        state.users.push(action.payload.data);
      }
    });
  },
});
export default userSilce.reducer;
export const { add, edit, del } = userSilce.actions;
