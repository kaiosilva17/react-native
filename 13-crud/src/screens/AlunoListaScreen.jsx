import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Text, Card } from 'react-native-paper'
import Alunoservices from '../services/Alunoservices'

export default function AlunoListaScreen({ navigation, route }) {

    const [alunos, setALunos] = useState([])

    useEffect(() => {
        listarAlunos()
    }, [])

    async function listarAlunos() {
        const listaAlunos = await Alunoservices.listar()
        setALunos(listaAlunos)

    }

    async function removerAluno(id) {
        await Alunoservices.remover(id)
        alert("Aluno excluido com sucesso!")
        listarAlunos()

    }

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
                            <Button 
                            icon='pencil'
                            onPress={() => navigation.navigate('AlunoFormScreen', item)}
                            >

                            </Button>
                            <Button
                                icon='delete'
                                onPress={() => removerAluno(item.id)}
                            >

                            </Button>
                        </Card.Actions>
                    </Card>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})