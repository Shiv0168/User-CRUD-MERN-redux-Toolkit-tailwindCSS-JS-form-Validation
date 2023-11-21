import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "./userAPI";

const initialState = {
  users: [],
  status: "idle",
  userById: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (user) => {
    const response = await createUser(user);
    return response.data;
  }
);

export const getAllUserAsync = createAsyncThunk("user/getAllUser", async () => {
  const response = await getAllUser();
  return response.data;
});

export const getUserByIdAsync = createAsyncThunk(
  "user/getUserById",
  async (_id) => {
    const response = await getUserById(_id);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    console.log(update);
    const response = await updateUser(update);
    console.log(response);
    return response.data;
  }
);

export const deleteUserAsync = createAsyncThunk(
  "user/deleteUser",
  async (_id) => {
    const response = await deleteUser(_id);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users.push(action.payload);
      })
      .addCase(getAllUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(getUserByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userById = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.users.findIndex(
          (user) => user._id === action.payload._id
        );
        state.users[index] = action.payload;
      })
      .addCase(deleteUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.users.findIndex(
          (user) => user._id === action.payload._id
        );
        state.users.splice(index, 1);
      });
  },
});

export const { increment } = userSlice.actions;

export const selectUser = (state) => state.user.users;
export const selectUserById = (state) => state.user.userById;

export default userSlice.reducer;
