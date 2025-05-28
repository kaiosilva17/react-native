import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'

export default function AlunoFormScreen() {

    const [nome, setNome] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")

    function salvar() {
        let aluno = {
            nome,
            cpf,
            email,
            dataNascimento,
            telefone
        }

        if (!aluno.nome || !aluno.cpf || !aluno.email || !aluno.dataNascimento || !aluno.telefone) {
            alert('Preencha todos os campos!')
        } else {

        }

    }

    return (
        <View style={styles.container}>
            <Text variant='titleLarge'>Informe os dados</Text>
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