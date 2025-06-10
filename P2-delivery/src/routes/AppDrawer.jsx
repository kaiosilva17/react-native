import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import { Text, Avatar, useTheme } from "react-native-paper";
import { AppColors } from "../constants/Colors";

// Importe suas telas
import HomeScreen from "../screens/HomeScreen.jsx";
// === IMPORTAÇÃO CORRETA do AuthNavigator ===
import AuthNavigator from "./AuthStack.jsx"; // Note que é 'AuthNavigator'

// Importe os stacks futuros de Usuário e ADM (ainda não criados)
// import UserStack from './UserStack.jsx';
// import AdminStack from './AdminStack.jsx';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const theme = useTheme();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Avatar.Icon
          size={50}
          icon="truck-delivery"
          style={{ backgroundColor: AppColors.primaryPurple }}
          color={AppColors.white}
        />
        <Text style={styles.drawerHeaderText}>Meu App de Delivery</Text>
        <Text style={styles.drawerHeaderSubtitle}>Bem-vindo!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: AppColors.lightPurple,
        drawerActiveTintColor: AppColors.darkPurple,
        drawerInactiveTintColor: AppColors.darkGray,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 16,
        },
        drawerItemStyle: {
          borderRadius: 5,
        },
      }}
    >
      {/* Home Screen - A tela inicial do seu app */}
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Início",
          drawerIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🏠</Text>
          ),
        }}
      />

      {/* AuthStack - O fluxo de Login/Cadastro */}
      {/* Oculto do Drawer, pois é acessado por um botão na Home */}
      <Drawer.Screen
        name="AuthStack" // ESTE É O NOME QUE VOCÊ USA NO navigation.navigate
        component={AuthNavigator} // ESTE É O COMPONENTE QUE VOCÊ IMPORTA
        options={{
          title: "Autenticação", // Título para fins internos ou debug
          drawerItemStyle: { height: 0 }, // Oculta este item do Drawer
        }}
      />

      {/* UserFlow - Placeholder para o fluxo de usuário logado */}
      <Drawer.Screen
        name="UserFlow"
        component={HomeScreen} // Temporariamente aponta para HomeScreen
        options={{
          title: "Área do Usuário",
          drawerIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>👤</Text>
          ),
        }}
      />

      {/* AdminFlow - Placeholder para o fluxo de ADM logado */}
      <Drawer.Screen
        name="AdminFlow"
        component={HomeScreen} // Temporariamente aponta para HomeScreen
        options={{
          title: "Painel ADM",
          drawerIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>⚙️</Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    backgroundColor: AppColors.primaryBlue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.white,
    marginTop: 10,
  },
  drawerHeaderSubtitle: {
    fontSize: 14,
    color: AppColors.lightBlue,
  },
});

export default AppDrawer;