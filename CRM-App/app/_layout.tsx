import { Slot } from "expo-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "@/src/reducers/PeopleReducers";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
