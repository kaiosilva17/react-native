import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'

export default function Pessoa() {

    const [pessoa, Setpessoa] = useState({})

    function revelar() {
        const novaPessoa = {
            nome: 'Kaio',
            idade: '22',
            imagem: "https://i.pinimg.com/736x/b2/21/24/b22124a2c8fbebcf0fa2be2f4fa2fade.jpg"
        }
        Setpessoa(novaPessoa)
    }

    function revelar2() {
        const novaPessoa = {
            nome: 'João',
            idade: '35',
            imagem: "https://i.pinimg.com/736x/c4/80/71/c48071b19b035f7fd9c1071f18e9fcf1.jpg"
        }
        Setpessoa(novaPessoa)
    }

    return (
        <View>
            <Card>
                <Card.Content>
                    <Text variant='displaySmall'>Componente Pessoa</Text>
                    <Text variant='displaySmall'>Nome: {pessoa.nome}</Text>
                    <Text variant='displaySmall'>Idade: {pessoa.idade}</Text>
                    <Card.Cover source={{ uri: pessoa.imagem }} />
                </Card.Content>
                <Card.Actions>
                    <Button onPress={revelar}>
                        Revelar
                    </Button>
                    <Button onPress={revelar2}>
                        Revelar2
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

