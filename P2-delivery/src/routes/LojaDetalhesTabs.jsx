import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProdutosStack from "./ProdutoStack";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "../constants/Colors";
import FuncionarioStack from "./FuncionarioStack";

const Tab = createBottomTabNavigator();

export default function LojaDetalhesTabs({ route }) {
  const { loja } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: AppColors.primaryBlue,
        tabBarInactiveTintColor: AppColors.darkGray,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Produtos") {
            iconName = "cart-outline";
          } else if (route.name === "Funcionarios") {
            iconName = "people-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Produtos"
        component={ProdutosStack}
        initialParams={{ loja }}
      />
      <Tab.Screen
        name="Funcionarios"
        component={FuncionarioStack}
        initialParams={{ loja }}
      />
    </Tab.Navigator>
  );
}
