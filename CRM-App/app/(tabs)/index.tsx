import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "@/components/Navigation";
import reducers from "../../src/reducers/PeopleReducers";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // thunk is added by default
});

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
