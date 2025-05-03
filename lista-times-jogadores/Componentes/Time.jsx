import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper'
import Jogador from './Jogador'

export default function Time (props) {

    const { nome, anoFundacao, mascote, imagem, jogadores } = props


  return (
    <Card style={{margin: 10, backgroundColor:"#ADD8E6"}}>
            <Card.Title title={nome} titleVariant='headlineLarge' />
            <Card.Content>
                <Text variant='bodyLarge' style={{color:'#00A8FF', fontWeight:"bold"}}>Ano da Fundação: {anoFundacao}</Text>
                <Text variant='bodyLarge' style={{color:'#00A8FF', fontWeight:"bold"}}>Mascote: {mascote}</Text>
            </Card.Content>
            <Card.Cover source={{uri: imagem}}/>
            <Card.Actions>
                <FlatList
                horizontal
                data={brasil.jogadores}
                renderItem={({item}) => (
                    <Jogador
                    nome={item.nome}
                    numero={item.numero}
                    imagem={item.imagem}
                    />
                )}/>
            </Card.Actions>
        </Card>
  )
}

const styles = StyleSheet.create({})