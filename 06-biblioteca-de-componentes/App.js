import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Card, PaperProvider, Paragraph, Title, Text, Divider, Button } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button mode='elevated' onPress={() => alert("Clicou")}>Clique</Button>
        <Button mode='elevated' icon="camera" onPress={() => alert("Clicou")}>Clique</Button>
        <Text variant='titleLarge'>Kaio</Text>
        <Divider style={styles.divider} />
        <Text variant='titleLarge'>Uva</Text>
        <Divider style={styles.divider}/>
        <Text variant='titleLarge'>Banana</Text>
        <Divider style={styles.divider}/>
        <Text variant='titleLarge'>Tomate</Text>
        <Divider style={styles.divider}/>
        <Text variant='titleLarge'>Ameixa</Text>
        <Card>
          <Card.Content>
            <Title>Título</Title>
            <Paragraph>Descrição do card.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg"}}/>
        </Card>;
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: "blue", 
    width: "80%"
  }
});
