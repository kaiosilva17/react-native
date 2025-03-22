import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function SegundoComponente() {

    return (
        <View style={styles.v}>
            <Text style={styles.textoGrande}>IESB</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textoGrande: {
        fontSize: 20,
        fontWeight: "200",
        color: '#f5fffb'
    },
    v: {
        backgroundColor: "#90ee90",
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }
})