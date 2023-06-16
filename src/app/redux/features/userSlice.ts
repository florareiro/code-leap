import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface User {
  username: string;
}
const userSlice = createSlice({
  name: "user",
  initialState: ({} as User) || null,
  reducers: {
    setUsername: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
