import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import EscudoScreen from './screens/EscudoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator()


export default function App() {

 

   
      
  return (

    <PaperProvider>
     <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Time"
            component={EscudoScreen}
            options={{
              title: 'Time',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "red"
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: '#ADD8E6',
              tabBarActiveBackgroundColor: "red",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="shield" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Jogadores"
            component={JogadoresScreen}
            options={{
              title: 'Jogadores',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "red"
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: '#ADD8E6',
              tabBarActiveBackgroundColor: "red",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Títulos"
            component={TitulosScreen}
            options={{
              title: 'Títulos',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "red"
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: '#ADD8E6',
              tabBarActiveBackgroundColor: "red",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy" size={size} color={color} />
              ),
            }}
          />
         
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
