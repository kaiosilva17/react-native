import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NomeNumero from './Components/NomeNumero';
import Controle from './Components/Controle';
import NumeroAleatorio from './Components/NumeroAleatorio';
import Pessoa from './Components/Pessoa';
import GeradorNumeroAleatorio from './Components/GeradorNumeroAleatorio';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <NomeNumero />
      <Controle />
      <NumeroAleatorio /> */}
      <Pessoa />
      <GeradorNumeroAleatorio/>
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
});
