import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen(props) {

    const { navigation, route } = props

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button mode='contained' onPress={() => navigation.navigate('ProfileScreen')}>
                Profile
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})