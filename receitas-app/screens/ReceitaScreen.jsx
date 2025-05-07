import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-paper'
import React from 'react'

export default function ReceitaScreen({ navigation, route }) {

    const receita = route.params.item

    return (
        <View>
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Text>Nome: {receita.nome}</Text>
                    <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
                    <Text>Porções: {receita.porcoes}</Text>
                    <Text>Ingredientes:</Text>
                    {receita.ingredientes.map((item, index) => (
                        <Text key={index}>• {item}</Text>
                    ))}
                    <Text>Modo de Preparo:</Text>
                    {receita.modoPreparo.map((item, index) => (
                        <Text key={index}>{item}</Text>
                    ))}

                </Card.Content>
                <Card.Cover source={{ uri: receita.imagem }} />
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