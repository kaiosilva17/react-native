import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function NumeroAleatorio() {

    const [numero, Setnumero] = useState("???")

    function gerarNumero() {
        const numeroAleatorio = Math.floor(Math.random() * 101)
        Setnumero(numeroAleatorio.toString())
    }
    function resetarNumero() {
        Setnumero("???")
    }

    return (
        <View>
            <Card>
                <Card.Content>
                    <Card.Title title='Componente Numero Aleatorio'></Card.Title>
                    <Text variant='displayMedium'>Numero Aleatório:{numero}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button
                        onPress={resetarNumero}
                    >
                        Resetar
                    </Button>
                    <Button
                        onPress={gerarNumero}
                    >
                        Gerar
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

