import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Filme(props) {

    const { dados } = props


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nome: {dados.nome}</Text>
            <Text style={styles.texto}>Ano: {dados.ano}</Text>
            <Text style={styles.texto}>Diretor: {dados.diretor}</Text>
            <Text style={styles.texto}>Tipo: {dados.tipo}</Text>
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
        backgroundColor: "#ADD8E6",
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
        borderBottomEndRadius: 250,

    },
    texto: {
        fontSize: 15,
        fontWeight: '300',
        color: "#343433"
    }
})