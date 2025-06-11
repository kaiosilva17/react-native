import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProdutosListaScreen from "../screens/Admscreens/ProdutosListaScreen";
import ProdutosFormScreen from "../screens/Admscreens/ProdutosFormScreen";

const Stack = createNativeStackNavigator();

export default function ProdutosStack({ route }) {
  const { loja } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProdutosListaScreen"
        component={ProdutosListaScreen}
        initialParams={{ loja }}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProdutosFormScreen"
        component={ProdutosFormScreen}
        initialParams={{ loja }}
        options={{ title: "Cadastrar Produto" }}
      />
    </Stack.Navigator>
  );
}
