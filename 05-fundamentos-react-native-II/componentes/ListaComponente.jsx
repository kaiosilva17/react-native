import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const frutas = ["Uva", "Banana", "Morango"]

    return (
        <View style={styles.container}>
            {frutas.map((fruta) => <Text style={styles.texto}>{fruta}</Text>)}

            {frutas.map(
                (fruta) => {
                    return (
                        <View>
                            <Text style={styles.texto}>{fruta}</Text>
                        </View>
                    )
                }
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    texto: {
        fontSize: 20,
        fontWeight: '400'
    }
})