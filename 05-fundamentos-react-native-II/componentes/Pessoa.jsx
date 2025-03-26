import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pessoa(props) {

    const { dados } = props

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Jogador</Text>
            <Text style={styles.texto}>Nome: {dados.nome}</Text>
            <Text style={styles.texto}>Idade: {dados.idade}</Text>
            <Image
            source={{ uri: dados.imagem}}
            style={{
                height: 200,
                width: 200
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        borderWidth: 10,
        padding: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    texto: {
        fontSize: 10,
        fontWeight: '400'
    },
    titulo: {
        fontSize: 20,
        fontWeight: '800'
    }
})