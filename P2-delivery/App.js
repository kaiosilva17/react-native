import * as React from "react";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AppDrawer from "./src/routes/AppDrawer.jsx";

export default function App() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </PaperProvider>
  );
}
