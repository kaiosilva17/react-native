import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

  return (
    <View style={styles.container}>
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#90ee90",
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
    }
})