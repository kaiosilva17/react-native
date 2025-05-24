import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import ProdutoScreen from '../screens/ProdutoScreen'
import ListaProdutoScreen from '../screens/ListaProdutoScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    title: "Lista de Categorias",
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='ListaProdutoScreen'
                component={ListaProdutoScreen}
                options={{
                    title: "Lista de Produtos",
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='ProdutoScreen'
                component={ProdutoScreen}
                options={{
                    title: "Produto",
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}