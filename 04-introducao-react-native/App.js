import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

const nome = "Kaio"

function alerta() {
  alert("Clicou no botão")
}

export default function App() {
  return (
    
    <View style={styles.container}>
      <Image source={{
        uri: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg"
      }}
        style={{
          height: 200,
          width: 300,
        }} />
        <Image source={require("./images/image.png")}
        style={{
          height: 200,
          width: 300,
        }} />
      <Text style={styles.textomaior}>Meu projeto</Text>
      <Text>Bem vindo {nome}</Text>
      <Button title='Click' onPress={alerta} />
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  textomaior: {
    fontSize: 30,
    fontWeight:'bold'
  }
});
