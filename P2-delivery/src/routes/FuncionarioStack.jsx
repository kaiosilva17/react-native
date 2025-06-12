import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FuncionariosFormScreen from "../screens/Admscreens/FuncionariosFormScreen";
import FuncionariosListaScreen from "../screens/Admscreens/FuncionariosListaScreen";

const Stack = createNativeStackNavigator();

export default function FuncionarioStack({ route }) {
  const { loja } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FuncionariosListaScreen"
        component={FuncionariosListaScreen}
        initialParams={{ loja }}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FuncionariosFormScreen"
        component={FuncionariosFormScreen}
        initialParams={{ loja }}
        options={{ title: "Cadastrar Funcionario" }}
      />
    </Stack.Navigator>
  );
}
