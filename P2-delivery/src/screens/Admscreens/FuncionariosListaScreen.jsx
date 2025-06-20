import React, { useCallback, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import { Card, Text, FAB, Button, TextInput } from "react-native-paper";
import FuncionarioService from "../../services/FuncionarioService";
import { AppColors } from "../../constants/Colors";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import moment from "moment";

export default function FuncionariosListaScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { loja } = route.params || {};
  const lojaId = loja?.id;

  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removendo, setRemovendo] = useState(false);
  const [busca, setBusca] = useState("");

  useFocusEffect(
    useCallback(() => {
      if (!lojaId) {
        Alert.alert("Erro", "Loja não encontrada.");
        navigation.goBack();
      } else {
        carregar();
      }
    }, [lojaId])
  );

  async function carregar() {
    try {
      setLoading(true);
      const dados = await FuncionarioService.listarFuncionarios(lojaId);
      setFuncionarios(dados);
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar os funcionários");
    } finally {
      setLoading(false);
    }
  }

  async function remover(funcionarioId) {
    Alert.alert("Confirmar", "Deseja excluir o funcionário?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            setRemovendo(true);
            await FuncionarioService.removerFuncionario(lojaId, funcionarioId);
            await carregar();
            Alert.alert("Sucesso", "Funcionário excluído com sucesso!");
          } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir o funcionário");
          } finally {
            setRemovendo(false);
          }
        },
      },
    ]);
  }

  const funcionariosFiltrados = funcionarios.filter((func) =>
    func.nome.toLowerCase().includes(busca.toLowerCase())
  );

  if (!lojaId) return null;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar por nome..."
        value={busca}
        onChangeText={setBusca}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="magnify" />}
        theme={{
          roundness: 15,
          colors: { primary: AppColors.primaryBlue },
        }}
      />

      {loading ? (
        <ActivityIndicator size="large" color={AppColors.primaryBlue} />
      ) : (
        <FlatList
          data={funcionariosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animatable.View
              animation="fadeInUp"
              delay={index * 100}
              duration={600}
            >
              <Card style={styles.card} elevation={4}>
                <Card.Content style={styles.cardContent}>
                  <Image
                    source={{
                      uri:
                        item.foto ||
                        "https://i.pinimg.com/736x/4e/7d/ba/4e7dbad7fe6d6cf32feefbe36231effd.jpg",
                    }}
                    style={styles.avatar}
                  />
                  <View style={styles.infoContainer}>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text style={styles.info}>🧑 Função: {item.funcao}</Text>
                    <Text style={styles.info}>
                      🎂 Idade:{" "}
                      {moment().diff(
                        moment(item.dataNascimento, "DD/MM/YYYY"),
                        "years"
                      )}{" "}
                      anos
                    </Text>
                    <Text style={styles.info}>🆔 CPF: {item.cpf}</Text>
                    <Text style={styles.info}>
                      📅 Admissão: {item.dataAdmissao}
                    </Text>
                    <Text style={styles.info}>
                      📞 Telefone: {item.telefone}
                    </Text>
                    <Text style={styles.info}>📧 Email: {item.email}</Text>
                    <Text style={styles.info}>
                      💰 Salário: R$ {item.salario}
                    </Text>
                  </View>
                </Card.Content>

                <Card.Actions style={styles.actions}>
                  <Button
                    icon="pencil"
                    onPress={() =>
                      navigation.navigate("FuncionariosFormScreen", {
                        lojaId,
                        funcionario: item,
                      })
                    }
                    textColor={AppColors.primaryBlue}
                  />
                  <Button
                    icon="delete"
                    onPress={() => remover(item.id)}
                    textColor={AppColors.error}
                  />
                </Card.Actions>
              </Card>
            </Animatable.View>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Nenhum funcionário encontrado.</Text>
          )}
        />
      )}

      {removendo && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={AppColors.primaryBlue} />
        </View>
      )}

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() =>
          navigation.navigate("FuncionariosFormScreen", { lojaId })
        }
        color={AppColors.white}
        customSize={60}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: AppColors.lightGray,
  },
  card: {
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: AppColors.white,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: AppColors.primaryBlue,
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: AppColors.darkGray,
    marginBottom: 2,
  },
  actions: {
    justifyContent: "flex-start",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 10,
    backgroundColor: AppColors.primaryBlue,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 16,
    color: AppColors.darkGray,
  },
  input: {
    marginBottom: 10,
    backgroundColor: AppColors.white,
    borderRadius: 15,
  },
});
