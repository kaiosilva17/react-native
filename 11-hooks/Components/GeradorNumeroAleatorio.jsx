import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'
import { ScrollView } from 'react-native'

export default function GeradorNumeroAleatorio() {

    const [numeroAleatorio, SetnumeroAleatorio] = useState(0)
    const [lista, Setlista] = useState([])

    function gerar() {
        const numero = Math.floor(Math.random() * 101)
        SetnumeroAleatorio(numero)
        Setlista([...lista, numero])
    }


    function resetar() {

        SetnumeroAleatorio(0)
        Setlista([])
    }

    return (
        <ScrollView>
            <Card>
                <Card.Content>
                    <Text variant='displaySmall' >Gerador de Numeros</Text>
                    <Text variant='displaySmall' >{numeroAleatorio}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={gerar}>
                        Gerar
                    </Button>
                </Card.Actions>
            </Card>
            <Card>
                <Card.Content>
                    <Text variant='displaySmall' >Historico:</Text>
                    {lista.map((item, index) => <Text variant='displaySmall' key={index}>{item}</Text>)}
                </Card.Content>
                <Card.Actions>
                    <Button onPress={resetar}>
                        Resetar
                    </Button>
                </Card.Actions>

            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})