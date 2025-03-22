import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JSComponente() {

    const nome = "kaio"
    const idade = 20

    function checkMaiorIdade() {
        if (idade >= 18) {
            return "Sim"
        } else {
            "Menor de idade"
        }
    }

    function alerta() {
        alert("Clicou no botão")
    }

    return (
        <View>

            <Text>NOME: {nome}</Text>
            <Text>IDADE: {idade}</Text>
            <Text>É maior de  idade? {checkMaiorIdade()}</Text>
            <Text>Check 18+: {idade >= 18 ? "18+" : "18-"}</Text>
            <Button title='Clicar' onPress={alerta} color="black"/>
        </View>
    )
}

const styles = StyleSheet.create({})