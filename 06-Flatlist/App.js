import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper'


export default function App() {

const frutas = ["uva", "banana", "ameixa", "jaca"]

const lista = [
  {
    titulo: "Kaio",
    descricao: "Estudando React-Native",
    imagem: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg"
  },
  {
    titulo: "Kaio",
    descricao: "Estudando React-Native",
    imagem: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg"
  },
  {
    titulo: "Kaio",
    descricao: "Estudando React-Native",
    imagem: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg"
  }
]

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
      data={lista}
      renderItem={({item}) => (
        <Card>
          <Card.Content>
            <Title>{item.titulo}</Title>
            <Paragraph>{item.descricao}</Paragraph>
            <Card.Cover source={{uri: item.imagem}}/>
          </Card.Content>
        </Card>
      )}
      />
      <FlatList
      data={frutas}
      renderItem={({item}) => <Text>{item}</Text>}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});
