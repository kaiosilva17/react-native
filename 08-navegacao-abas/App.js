import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Inicio',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "blue"
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: '#ADD8E6',
              tabBarActiveBackgroundColor: "#00ffff",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Perfil',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "blue"
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: '#ADD8E6',
              tabBarActiveBackgroundColor: "#00ffff",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-circle-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: 'Configurações',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "blue"
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: '#ADD8E6',
              tabBarActiveBackgroundColor: "#00ffff",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" size={size} color={color} />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


