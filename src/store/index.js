import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;