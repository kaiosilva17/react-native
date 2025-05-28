import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, Card } from 'react-native-paper'

export default function AlunoListaScreen({ navigation, route }) {

    const [alunos, setALunos] = useState([
        {
            id: "1",
            nome: "Kaio",
            cpf: "00011122233",
            email: "teste@gmail.com",
            dataNascimento: '17/12/1965',
            telefone: "(61) 95867-9865"
        },
        {
            id: "2",
            nome: "Kaio",
            cpf: "00011122233",
            email: "teste@gmail.com",
            dataNascimento: '17/12/1965',
            telefone: "(61) 95867-9865"
        }
    ])

    return (
        <View>
            <Button
                style={{ marginTop: 10 }}
                icon='plus'
                mode='contained'
                onPress={() => navigation.navigate('AlunoFormScreen')}
            >
                Cadastrar
            </Button>
            <FlatList
                data={alunos}
                renderItem={({ item }) => (
                    <Card style={{ margin: 10 }}>
                        <Card.Content>
                            <Text>ID: {item.id}</Text>
                            <Text>Nome: {item.nome}</Text>
                            <Text>CPF: {item.cpf}</Text>
                            <Text>Email: {item.email}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button>
                                Editar
                            </Button>
                            <Button>
                                Excluir
                            </Button>
                        </Card.Actions>
                    </Card>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})