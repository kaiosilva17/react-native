import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ListaComponente from './componentes/ListaComponente';
import Pessoa from './componentes/Pessoa';

export default function App() {

  const Jogadores = [
    {
      nome: "CR7",
      idade: 38,
      imagem: "https://cdn.pixabay.com/photo/2017/07/10/20/30/cristiano-ronaldo-2491446_640.jpg"
    },
    {
      nome: "messi",
      idade: 30,
      imagem: "https://cdn.pixabay.com/photo/2017/07/10/20/30/cristiano-ronaldo-2491446_640.jpg"
    },
    {
      nome: "neymar",
      idade: 32,
      imagem: "https://cdn.pixabay.com/photo/2017/07/10/20/30/cristiano-ronaldo-2491446_640.jpg"
    }
  ]


  return (
    <ScrollView>
      <View style={styles.container}>

        {Jogadores.map(
          (jogador) => {
            return (
              <Pessoa
                dados={jogador}
              />
            )
          }
        )}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
