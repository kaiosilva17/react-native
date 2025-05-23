import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ConsfigScreen from "../screens/ConsfigScreen"
import ItemScreen from "../screens/ItemScreen"
import ListaScreen from "../screens/ListaScreen"

const Stack = createStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ListaScreen' component={ListaScreen} />
            <Stack.Screen name='ItemScreen' component={ItemScreen} />
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    title: "Inicio",
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            <Stack.Screen name='ConfigScreen' component={ConsfigScreen} />
        </Stack.Navigator>
    )
}

