import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import {
  Button,
  Card,
  Text,
  Divider,
  FAB,
  IconButton,
} from "react-native-paper";
import LojaService from "../../services/LojaService";
import moment from "moment";
import { AppColors } from "../../constants/Colors";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import ProdutoService from "../../services/ProdutoService";
import FuncionarioService from "../../services/FuncionarioService";

export default function LojaListaScreen() {
  const navigation = useNavigation();

  const [lojas, setLojas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removendo, setRemovendo] = useState(false);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    setLoading(true);
    const dados = await LojaService.listar();
    setLojas(dados);
    setLoading(false);
  }

  // async function remover(id) {
  //   Alert.alert("Confirmar", "Deseja excluir a loja?", [
  //     { text: "Cancelar" },
  //     {
  //       text: "Excluir",
  //       onPress: async () => {
  //         setRemovendo(true);
  //         await LojaService.remover(id);
  //         await carregar();
  //         setRemovendo(false);
  //         Alert.alert("Sucesso", "Loja excluída com sucesso!");
  //       },
  //     },
  //   ]);
  // }

  async function remover(id) {
    Alert.alert("Confirmar", "Deseja excluir a loja?", [
      { text: "Cancelar" },
      {
        text: "Excluir",
        onPress: async () => {
          try {
            setRemovendo(true);

            const produtos = await ProdutoService.listarProdutos(id);
            if (produtos.length > 0) {
              Alert.alert(
                "Atenção",
                "Não é possível excluir. Existem produtos cadastrados nessa loja."
              );
              setRemovendo(false);
              return;
            }

            const funcionarios = await FuncionarioService.listarFuncionarios(
              id
            );
            if (funcionarios.length > 0) {
              Alert.alert(
                "Atenção",
                "Não é possível excluir. Existem funcionários cadastrados nessa loja."
              );
              setRemovendo(false);
              return;
            }

            await LojaService.remover(id);
            await carregar();
            Alert.alert("Sucesso", "Loja excluída com sucesso!");
          } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir a loja.");
          } finally {
            setRemovendo(false);
          }
        },
      },
    ]);
  }

  function calcularMeses(fundacao) {
    const dataFundacao = moment(fundacao, "DD/MM/YYYY");
    const meses = moment().diff(dataFundacao, "months");
    return meses;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="menu"
          size={28}
          onPress={() => navigation.getParent()?.openDrawer()}
        />
        <Text style={styles.headerTitle}>Lojas Cadastradas</Text>
      </View>

      {loading ? (
        <View style={styles.skeletonCard}>
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonLine} />
          <View style={styles.skeletonLineSmall} />
          <View style={styles.skeletonLineLarge} />
        </View>
      ) : (
        <FlatList
          data={lojas}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Animatable.View
              animation="fadeInUp"
              delay={index * 100}
              duration={600}
            >
              <Card
                style={styles.card}
                elevation={4}
                onPress={() =>
                  navigation.navigate("LojaDetalhesTabs", { loja: item })
                }
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: "https://i.pinimg.com/736x/f0/84/f7/f084f7f84a56ed31f9bf5a9fb7a1eab2.jpg",
                    }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>

                <Card.Content>
                  <Text style={styles.titulo}>
                    Loja aberta há {calcularMeses(item.fundacao)} meses
                  </Text>

                  <Divider style={styles.divider} />

                  <Text style={styles.info}>🛒 Produtos: {item.produtos}</Text>
                  <Text style={styles.info}>
                    👨‍🍳 Funcionários: {item.funcionarios}
                  </Text>

                  <Text style={styles.info}>
                    📍 Endereço: {item.logradouro}, {item.bairro},{" "}
                    {item.localidade} - {item.uf}
                  </Text>

                  <Text style={styles.info}>📅 Fundação: {item.fundacao}</Text>
                  <Text style={styles.info}>⏰ Horário: {item.horario}</Text>
                  <Text style={styles.info}>📏 Tamanho da Loja: {item.tamanho} m²</Text>
                </Card.Content>

                <Card.Actions style={styles.actions}>
                  <Button
                    icon="pencil"
                    onPress={() => navigation.navigate("LojaFormScreen", item)}
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
        onPress={() => navigation.navigate("LojaFormScreen")}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: AppColors.primaryBlue,
    marginLeft: 8,
    marginTop: 30,
  },
  card: {
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: AppColors.white,
    overflow: "hidden",
    marginBottom: 40,
  },
  imageContainer: {
    width: "100%",
    height: 150,
    backgroundColor: AppColors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: AppColors.primaryBlue,
    marginBottom: 4,
  },
  subTitulo: {
    fontSize: 14,
    color: AppColors.darkGray,
    marginBottom: 6,
  },
  info: {
    fontSize: 14,
    marginBottom: 2,
    color: AppColors.darkGray,
  },
  divider: {
    marginVertical: 6,
    backgroundColor: AppColors.lightGray,
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
  skeletonCard: {
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#e0e0e0",
  },
  skeletonImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    backgroundColor: "#cccccc",
  },
  skeletonLine: {
    marginTop: 10,
    height: 20,
    width: "60%",
    backgroundColor: "#cccccc",
    borderRadius: 4,
  },
  skeletonLineSmall: {
    marginTop: 6,
    height: 20,
    width: "40%",
    backgroundColor: "#cccccc",
    borderRadius: 4,
  },
  skeletonLineLarge: {
    marginTop: 6,
    height: 20,
    width: "80%",
    backgroundColor: "#cccccc",
    borderRadius: 4,
  },
});
