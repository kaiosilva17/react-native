import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JSComponente() {

    const nome = "Kaio"
    const idade = 20

    function CheckMaiorIdade() {
        if (idade => 18) {
            return "Maior de Idade"
        } else {
            return "Menor de Idade"
        }
    }

    function alerta() {
        alert("Clicou no botão")
    }


    return (
        <View style={styles.container}>
            <Text>NOME: {nome}</Text>
            <Text>IDADE: {idade}</Text>
            <Text>Sou maior de Idade? {CheckMaiorIdade()}</Text>
            <Button title='Clicar' onPress={alerta}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue"
    }
})