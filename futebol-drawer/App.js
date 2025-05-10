
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer"
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from "@expo/vector-icons"
import EscudoScreen from '../futebol-drawer/screens/EscudoScreen';
import JogadorScreen from '../futebol-drawer/screens/JogadorScreen'
import TituloScreen from '../futebol-drawer/screens/TituloScreen'


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
        name='EscudoScreen' 
        component={EscudoScreen}
        options={{
            title:"Escudo",
            drawerIcon: ({ color, size}) => <Ionicons name ='shield' color={color} size={size} />
        }}
        />
        <Drawer.Screen 
        name='JogadorScreen' 
        component={JogadorScreen}
        options={{
            title:"Jogadores",
            drawerIcon: ({ color, size}) => <Ionicons name ='person' color={color} size={size} />
        }}
        />
        <Drawer.Screen
         name='TituloScreen' 
         component={TituloScreen}
         options={{
            title:"Titulos",
            drawerIcon: ({ color, size}) => <Ionicons name ='trophy' color={color} size={size} />
        }}
         />
    </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


