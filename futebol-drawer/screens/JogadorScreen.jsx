import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper'

export default function JogadorScreen() {

    const jogadores = [
        {
        nome: "Gabriel Barbosa",
        numero: 9,
        posicao: "Atacante",
        idade: 27,
        imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
        },
        {
        nome: "Arrascaeta",
        numero: 14,
        posicao: "Meia",
        idade: 29,
        imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
        },
        {
        nome: "Everton Ribeiro",
        numero: 7,
        posicao: "Meia",
        idade: 33,
        imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
        },
        {
        nome: "David Luiz",
        numero: 23,
        posicao: "Zagueiro",
        idade: 35,
        imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
        },
        {
        nome: "Pedro",
        numero: 21,
        posicao: "Atacante",
        idade: 26,
        imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
        }
        ];

  return (
    <View style={{backgroundColor:"#3c3c3c", flex:1}}>
    <FlatList
          data={jogadores}
          renderItem={({ item }) => (
            
        
      <Card style={styles.card}>
            <Card.Title title={item.nome} style={{ backgroundColor:"#970700"}} />
            <Card.Content>
                <Text>Camisa: {item.numero}</Text>
                <Text>Posição: {item.posicao}</Text>
                <Text>Idade: {item.idade}</Text>
            </Card.Content>
            <Card.Cover source={{uri: item.imagem}} style={{width: 200}}/>
            
        </Card>
    )} />
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        margin: 10,
        widht: 200,
        backgroundColor:"#FF6961"
    }
})