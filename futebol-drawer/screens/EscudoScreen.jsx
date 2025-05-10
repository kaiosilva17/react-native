import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, Title } from 'react-native-paper'

export default function EscudoScreen() {

    const time = {
        nome: "Flamengo",
        escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
        fundacao: "15 de novembro de 1895",
        estadio: "Maracanã",
        mascote: "Urubu",
        cores: ["Vermelho", "Preto"]
        };

  return (
    <View style={{backgroundColor:"#3c3c3c", flex:1}}>
      
      <Card style={styles.card}>
            <Card.Title title={time.nome} style={{ backgroundColor:"#970700"}} />
            <Card.Content>
                <Text>Ano de Fundação:{time.fundacao}</Text>
                <Text>Estadio:{time.estadio}</Text>
                <Text>Mascote:{time.mascote}</Text>
                <Text>Cores:{time.cores.join('\t e ')}</Text>
                </Card.Content>            
                <Card.Cover source={{uri: time.escudo}} style={{ width: 200}}/>
            
        </Card>
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