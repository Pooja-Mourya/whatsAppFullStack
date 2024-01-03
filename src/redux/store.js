import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserService, userProfileApi } from "./apiServices/UserService";
import { AuthService } from "./apiServices/AuthService";
import { fileUploadApi } from "./apiServices/UploadService";

export const store = configureStore({
  reducer: {
    [AuthService.reducerPath]: AuthService.reducer,
    [UserService.reducerPath]: UserService.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthService.middleware,
      UserService.middleware,
      userProfileApi.middleware,
      fileUploadApi.middleware
    ),
});

setupListeners(store.dispatch);
