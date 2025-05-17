import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
       <Tab.Navigator>
         <Tab.Screen
           name="MegaSena"
           component={MegaSenaScreen}
           options={{
             title: 'Mega Sena',
             headerTitleAlign: 'center',
             headerStyle: {
               backgroundColor: "red"
             },
             tabBarActiveTintColor: 'black',
             tabBarInactiveTintColor: '#ADD8E6',
             tabBarActiveBackgroundColor: "red",
             tabBarIcon: ({ color, size }) => (
               <Ionicons name="cash" size={size} color={color} />
             ),
           }}
         />
         <Tab.Screen
           name="JogoDoBicho"
           component={JogoDoBichoScreen}
           options={{
             title: 'Jogo Do Bicho',
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
