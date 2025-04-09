import { StyleSheet, View } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{textAlign:'center'}}>Tela de Inicio</Text>

      <Card style={{ width: '90%'}}>
        <Card.Content>
       <Title>Kaio</Title>
       <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eveniet aliquid dolorum iure eius 
        adipisci, impedit nobis dolorem ex unde amet sapiente nulla delectus praesentium veritatis sed porro 
        autem. Voluptas?
       </Paragraph>
       </Card.Content>
       <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    }
})