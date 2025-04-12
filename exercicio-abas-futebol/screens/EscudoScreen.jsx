import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, Title } from 'react-native-paper'


export default function EscudoScreen() {

  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    };

   

  return (
    <View style={{backgroundColor:"#3c3c3c", flex:1}}>
      
      <Card style={styles.card}>
            <Card.Title title={time.nome} style={{ backgroundColor:"#970700"}} />
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