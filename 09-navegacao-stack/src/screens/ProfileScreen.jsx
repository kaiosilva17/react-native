import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function ProfileScreen(props) {

    const { navigation, route } = props

    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button mode='contained' onPress={() => navigation.navigate('ConfigScreen')}>
                Config
            </Button>

            <Button mode='contained-tonal' onPress={() => navigation.goBack()}>
                Voltar
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})