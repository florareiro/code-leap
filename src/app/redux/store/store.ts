import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import postsReducer from "../features/postsSlice";
import counterReducer from "../features/counterSlice";
const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: rootReducer,
});
console.log("Stored created");

export default store;
