import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Card, Text, FAB, Button } from "react-native-paper";
import ProdutoService from "../../services/ProdutoService";
import { AppColors } from "../../constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function ProdutosListaScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { loja } = route.params || {};
  const lojaId = loja?.id;

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removendo, setRemovendo] = useState(false);

  useEffect(() => {
    if (!lojaId) {
      Alert.alert("Erro", "Loja não encontrada.");
      navigation.goBack();
    } else {
      carregar();
    }
  }, [lojaId]);

  async function carregar() {
    try {
      setLoading(true);
      const dados = await ProdutoService.listarProdutos(lojaId);
      setProdutos(dados);
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar os produtos");
    } finally {
      setLoading(false);
    }
  }

  async function remover(produtoId) {
    Alert.alert("Confirmar", "Deseja excluir o produto?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            setRemovendo(true);
            await ProdutoService.removerProduto(lojaId, produtoId);
            await carregar();
            Alert.alert("Sucesso", "Produto excluído com sucesso!");
          } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir o produto");
          } finally {
            setRemovendo(false);
          }
        },
      },
    ]);
  }

  if (!lojaId) return null;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={AppColors.primaryBlue} />
      ) : (
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animatable.View
              animation="fadeInUp"
              delay={index * 100}
              duration={600}
            >
              <Card style={styles.card} elevation={4}>
                <Card.Cover
                  source={{
                    uri: "https://i.pinimg.com/736x/80/34/ed/8034ed2bdada180ab5698551bc1830d6.jpg",
                  }}
                  style={styles.cardImage}
                />
                <Card.Content>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.info}>💲 Preço: {item.preco}</Text>
                  <Text style={styles.info}>
                    🍽 Ingredientes: {item.ingredientes}
                  </Text>
                  <Text style={styles.info}>
                    🔥 Calorias: {item.calorias} kcal
                  </Text>
                  <Text style={styles.info}>
                    👨‍👩‍👧‍👦 Serve: {item.pessoas} pessoas
                  </Text>
                  <Text style={styles.info}>📏 Tamanho: {item.tamanho}</Text>
                </Card.Content>

                <Card.Actions style={styles.actions}>
                  <Button
                    icon="pencil"
                    onPress={() =>
                      navigation.navigate("ProdutosFormScreen", {
                        lojaId,
                        produto: item,
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
            <Text style={styles.emptyText}>Nenhum produto cadastrado.</Text>
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
        onPress={() => navigation.navigate("ProdutosFormScreen", { lojaId })}
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
  cardImage: {
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  height: 180,
},
});
