import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function Controle() {

    const [volume, Setvolume] = useState(0)

    function Aumentar() {
        Setvolume(volume + 1)
    }

    function Diminuir() {
        if (volume > 0) {
            Setvolume(volume - 1)
        }
    }
    return (
        <View>
            <Card>
                <Card.Content>
                    <Card.Title title='Componente Controle'></Card.Title>
                    <Text variant='displayMedium'>Volume: {volume}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button
                        onPress={Diminuir}
                        mode='contained-tonal'
                        icon='minus'
                    >
                        Menos
                    </Button>
                    <Button
                        onPress={Aumentar}
                        mode='contained'
                        icon='plus'
                    >
                        Mais
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

