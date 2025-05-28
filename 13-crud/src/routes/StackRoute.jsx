import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AlunoFormScreen from '../screens/AlunoFormScreen'
import AlunoListaScreen from '../screens/AlunoListaScreen'





const Stack = createStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='AlunoListaScreen'
             component={AlunoListaScreen}
             options={{
                title:"Lista de Usuários",
                headerTitleAlign:'center'
             }}
             />
            <Stack.Screen 
            name='AlunoFormScreen' 
            component={AlunoFormScreen} 
            options={{
                title:"Usuário",
                headerTitleAlign:'center'
             }}
            />
        </Stack.Navigator>
    )
}
