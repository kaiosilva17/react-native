import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function NomeNumero() {

    const [nome, Setnome] = useState()
    const [numero, Setnumero] = useState()

    function mostrarNomeNumero() {
        Setnome("kaio")
        Setnumero(17)
    }

    return (
        <View>
            <Card>
                <Card.Content>
                    <Card.Title title='Componente NomeNuemro' />
                    <Text variant='displayMedium'>Nome: {nome}</Text>
                    <Text variant='displayMedium'>Numero: {numero}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={mostrarNomeNumero}>Mostrar</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}
