import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

const nome = "Cristiano Ronaldo"

function alerta() {
  alert("Gol do Cristiano Ronaldo")
}

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textomaior}>{nome}</Text>
        <Image source={{
          uri: "https://cdn.pixabay.com/photo/2023/04/05/20/07/player-7902240_640.jpg"
        }}
          style={styles.imagem} />
        <Image source={{
          uri: "https://cdn.pixabay.com/photo/2016/08/24/23/08/cristiano-ronaldo-1618341_640.jpg"
        }}
          style={styles.imagem} />
        <Image source={{
          uri: "https://cdn.pixabay.com/photo/2023/11/07/20/24/cristiano-ronaldo-8373364_1280.jpg"
        }}
          style={styles.imagem} />
        <Image source={{
          uri: "https://cdn.pixabay.com/photo/2017/07/10/20/30/cristiano-ronaldo-2491446_640.jpg"
        }}
          style={styles.imagem} />
        <Image source={{
          uri: "https://cdn.pixabay.com/photo/2021/03/28/08/18/ronaldo-6130591_640.jpg"
        }}
          style={styles.imagem} />


        <Text style={styles.texto}>Salário: 200 milhões EUR</Text>
        <Text style={styles.texto}>Altura: 1,89 m</Text>
        <Text style={styles.texto}>Peso: 83 kg</Text>
        <Text style={styles.texto}>Parceira: Georgina Rodríguez</Text>
        <Text style={styles.texto}>Nascimento: 5 de fevereiro de 1985</Text>
        <Button title='GOL' onPress={alerta} />
        <StatusBar style="auto" />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 40
  },
  textomaior: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 20,
    fontWeight: 300,
    color: "#00008B"
  },
  imagem: {
    height: 250,
    width: 300,
  }
});
