import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from 'react-native-paper'
import { createStackNavigator } from "@react-navigation/stack"
import ReceitaScreen from "./screens/ReceitaScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: "Inicio",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#ff6347',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
                fontFamily: 'sans-serif-medium',
              },
            }}

          />
          <Stack.Screen
            name='ReceitaScreen'
            component={ReceitaScreen}
            options={{
              title: "Receita",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#ff6347',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
                fontFamily: 'sans-serif-medium',
              },
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

