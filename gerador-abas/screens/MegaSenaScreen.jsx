import { StyleSheet, View } from 'react-native'
import { Card, Text, Button } from 'react-native-paper'
import React, { useState } from 'react'


export default function MegaSenaScreen() {

    const [jogoGerado, setJogoGerado] = useState([]);
    const [jogosMegaSena, setJogosMegaSena] = useState([]);

    function gerar() {
        const numeros = [];

        for (let i = 0; numeros.length < 6 && i < 100; i++) {
            const numero = Math.floor(Math.random() * 60) + 1;
            if (!numeros.includes(numero)) {
                numeros.push(numero);
            }
        }

        numeros.sort((a, b) => a - b);
        setJogoGerado(numeros);
        setJogosMegaSena((prevJogos) => [...prevJogos, numeros]);
    }

    function resetar() {
        setJogoGerado([]);
        setJogosMegaSena([]);
    }

    return (
        <View>
            <Card>
                <Card.Content>
                    <Text variant='displaySmall' >Mega Sena:</Text>
                    <Text variant='displaySmall' >{jogoGerado.join('-')}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={gerar}>
                        Gerar
                    </Button>
                    <Button onPress={resetar}>
                        Resetar
                    </Button>
                </Card.Actions>
            </Card>
            <Card>
            <Card.Content>
                    <Text variant='displaySmall'>Histórico de Jogos:</Text>
                    {jogosMegaSena.map((item, index) => (
                        <Text variant='bodyLarge' key={index}>
                            Jogo {index + 1}: {item.join(' - ')}
                        </Text>
                    ))}
                </Card.Content>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({})