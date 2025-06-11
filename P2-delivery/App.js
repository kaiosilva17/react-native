import * as React from "react";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import AppDrawer from "./src/routes/AppDrawer.jsx";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  return (
    <PaperProvider 
      theme={theme}
      settings={{
        linearGradient: (props) => <LinearGradient {...props} />
      }}
    >
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </PaperProvider>
  );
}