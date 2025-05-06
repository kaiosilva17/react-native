import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-paper'
import React from 'react'

export default function ItemScreen({ navigation, route }) {

    const carro = route.params.item

    return (
        <View>
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Text>Nome: {carro.nome}</Text>
                    <Text>Fabricante: {carro.fabricante}</Text>
                    <Text>cor: {carro.cor}</Text>
                    <Text>Ano: {carro.ano}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button
                        mode='contained-tonal'
                        icon='arrow-left'
                        onPress={() => navigation.goBack()}
                    >
                        Voltar
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({})