import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper'

export default function TituloScreen() {

    const titulos = [
        {
        nome: "Campeonato Brasileiro",
        anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
        },
        {
        nome: "Copa Libertadores da América",
        anos: [1981, 2019, 2022]
        },
        {
        nome: "Copa do Brasil",
        anos: [1990, 2006, 2013, 2022, 2024]
        },
        {
        nome: "Supercopa do Brasil",
        anos: [2020, 2021, 2025]
        }
        ];

  return (
    <View style={{backgroundColor:"#3c3c3c", flex:1}}>
         <FlatList
          data={titulos}
          renderItem={({ item }) => (
            
        
      <Card style={{margin: 10, backgroundColor:"#FF6961"}}>
            <Card.Title title={item.nome} style={{ backgroundColor:"#970700"}}/>
            <Card.Content>
                <Text variant='labelSmall'> {item.anos.join('\n')}</Text>
            </Card.Content>
            
            
        </Card>
    )} />
      
    </View>
  )
}

const styles = StyleSheet.create({})