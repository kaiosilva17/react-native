import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function ConsfigScreen(props) {

    const { navigation, route } = props


    return (
        <View>
            <Text>ConsfigScreen</Text>
            <Button mode='contained-tonal' onPress={() => navigation.goBack()}>
                Voltar
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})