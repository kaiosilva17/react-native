import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'
import Alunoservices from '../services/Alunoservices'

export default function AlunoFormScreen({ navigation, route }) {

    const alunoAntigo = route.params || {}

    const [nome, setNome] = useState(alunoAntigo.nome || "")
    const [dataNascimento, setDataNascimento] = useState(alunoAntigo.dataNascimento || "")
    const [email, setEmail] = useState(alunoAntigo.email || "")
    const [cpf, setCpf] = useState(alunoAntigo.cpf || "")
    const [telefone, setTelefone] = useState(alunoAntigo.telefone || "")

    async function salvar() {
        let aluno = {
            nome,
            cpf,
            email,
            dataNascimento,
            telefone
        }

        if (!aluno.nome || !aluno.cpf || !aluno.email || !aluno.dataNascimento || !aluno.telefone) {
            alert('Preencha todos os campos!')
            return
        }

        if (alunoAntigo.id) {
            aluno.id = alunoAntigo.id
            await Alunoservices.atualizar(aluno)
            alert("Aluno alterado com sucesso!")
            navigation.reset({
                index: 0,
                routes: [{ name: 'AlunoListaScreen' }]
            })
        } else {
            await Alunoservices.salvar(aluno)
            alert("Aluno cadastrado com sucesso!")
            navigation.reset({
                index: 0,
                routes: [{ name: 'AlunoListaScreen' }]
            })
        }


    }

    return (
        <View style={styles.container}>
            <Text variant='titleLarge'>Informe os dados</Text>
            <Text variant='titleLarge'>ID ALUNO: {alunoAntigo.id || "NOVO"}</Text>
            <TextInput
                style={styles.input}
                mode='outlined'
                label='Nome'
                placeholder='Informe o nome'
                value={nome}
                onChangeText={e => setNome(e)}
            />
            <TextInput
                style={styles.input}
                mode='outlined'
                label='CPF'
                placeholder='Informe o CPF'
                value={cpf}
                onChangeText={e => setCpf(e)}
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={'cpf'}
                    />
                )}
            />
            <TextInput
                style={styles.input}
                mode='outlined'
                label='Email'
                placeholder='Informe o Email'
                value={email}
                onChangeText={e => setEmail(e)}
                keyboardType='email-address'
            />
            <TextInput
                style={styles.input}
                mode='outlined'
                label='Telefone'
                placeholder='Informe o Telefone'
                value={telefone}
                onChangeText={e => setTelefone(e)}
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99)'
                        }}
                    />
                )}
            />
            <TextInput
                style={styles.input}
                mode='outlined'
                label='Data de Nascimento'
                placeholder='Informe a Data de Nascimento'
                value={dataNascimento}
                onChangeText={e => setDataNascimento(e)}
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                    />
                )}
            />

            <Button
                style={styles.input}
                mode='contained'
                onPress={salvar}
            >
                Salvar
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    input: {
        width: '90%',
        marginTop: 10

    }
})