import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LojaListaScreen from "../screens/Admscreens/LojaListaScreen";
import LojaFormScreen from "../screens/Admscreens/LojaFormScreen";
import LojaDetalhesTabs from "./LojaDetalhesTabs";

const Stack = createNativeStackNavigator();

export default function AdminStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LojaListaScreen"
        component={LojaListaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LojaFormScreen"
        component={LojaFormScreen}
        options={{ title: "Cadastrar/Editar Loja" }}
      />
      <Stack.Screen
        name="LojaDetalhesTabs"
        component={LojaDetalhesTabs}
        options={{ title: "Detalhes da Loja" }}
      />
    </Stack.Navigator>
  );
}
