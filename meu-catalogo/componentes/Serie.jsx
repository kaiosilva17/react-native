import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Serie(props) {

    const { dados } = props

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nome: {dados.nome}</Text>
            <Text style={styles.texto}>Ano: {dados.ano}</Text>
            <Text style={styles.texto}>Diretor: {dados.diretor}</Text>
            <Text style={styles.texto}>Temporadas: {dados.temporadas}</Text>
            <Image
                source={{ uri: dados.capa }}
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
        backgroundColor: "#00A8FF",
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
        borderBottomStartRadius: 250,

    },
    texto: {
        fontSize: 15,
        fontWeight: '300',
        color: "#CFEFFC"
    }
})