import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { Text, TextInput, Button, HelperText, Menu } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProdutoService from "../../services/ProdutoService";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { AppColors } from "../../constants/Colors";
import MaskInput, { Masks } from "react-native-mask-input";

const schema = yup.object({
  nome: yup.string().required("Informe o nome do produto"),
  categoria: yup
    .string()
    .oneOf(["Hambúrguer", "Acompanhamentos", "Bebidas"])
    .required("Selecione a categoria"),
  preco: yup
    .string()
    .required("Informe o preço")
    .test(
      "valid-preco",
      "Preço deve ser entre R$ 1,00 e R$ 100,00",
      (value) => {
        if (!value) return false;
        const numeric = parseFloat(
          value.replace(/[R$\s.]/g, "").replace(",", ".")
        );
        return numeric >= 1 && numeric <= 100;
      }
    ),
  ingredientes: yup.string(),
  calorias: yup
    .number()
    .typeError("Informe um número válido")
    .required("Informe as calorias"),
  pessoas: yup
    .number()
    .typeError("Informe um número válido")
    .min(1, "Deve ser no mínimo 1")
    .max(12, "Deve ser no máximo 12")
    .required("Informe quantas pessoas serve"),
  tamanho: yup.string().required("Informe o tamanho"),
});

export default function ProdutosFormScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { loja, produto = null } = route.params || {};
  const lojaId = loja?.id;

  useEffect(() => {
    if (!lojaId) {
      Alert.alert("Erro", "Loja não encontrada.");
      navigation.goBack();
    }
  }, [lojaId]);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const categorias = ["Hambúrguer", "Acompanhamentos", "Bebidas"];
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (produto) {
      setValue("nome", produto.nome);
      setValue("categoria", produto.categoria);
      setValue("preco", produto.preco);
      setValue("ingredientes", produto.ingredientes);
      setValue("calorias", produto.calorias?.toString());
      setValue("pessoas", produto.pessoas?.toString());
      setValue("tamanho", produto.tamanho);
    }
  }, [produto]);

  async function salvar(data) {
    try {
      if (produto && produto.id) {
        await ProdutoService.atualizarProduto(lojaId, {
          id: produto.id,
          ...data,
        });
        Alert.alert("Sucesso", "Produto atualizado com sucesso");
      } else {
        await ProdutoService.salvarProduto(lojaId, data);
        Alert.alert("Sucesso", "Produto cadastrado com sucesso");
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao salvar o produto");
    }
  }

  if (!lojaId) return null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>

      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Nome do Produto"
            value={value}
            onChangeText={onChange}
            error={!!errors.nome}
            style={styles.input}
          />
        )}
      />
      {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>}

      <Controller
        control={control}
        name="categoria"
        render={({ field: { onChange, value } }) => (
          <View style={{ marginBottom: 12 }}>
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={
                <Button
                  mode="outlined"
                  onPress={() => setMenuVisible(true)}
                  style={styles.menuButton}
                >
                  {value || "Selecione a categoria"}
                </Button>
              }
            >
              {categorias.map((item) => (
                <Menu.Item
                  key={item}
                  onPress={() => {
                    onChange(item);
                    setMenuVisible(false);
                  }}
                  title={item}
                />
              ))}
            </Menu>
            {errors.categoria && (
              <HelperText type="error">{errors.categoria.message}</HelperText>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="preco"
        render={({ field: { onChange, value } }) => (
          <MaskInput
            style={styles.maskInput}
            value={value}
            onChangeText={onChange}
            mask={Masks.BRL_CURRENCY}
            placeholder="R$ 0,00"
            keyboardType="numeric"
          />
        )}
      />
      {errors.preco && <Text style={styles.error}>{errors.preco.message}</Text>}

      <Controller
        control={control}
        name="ingredientes"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Ingredientes (separe por vírgula)"
            value={value}
            onChangeText={onChange}
            style={styles.input}
            multiline
          />
        )}
      />

      <Controller
        control={control}
        name="calorias"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Calorias (kcal)"
            value={value}
            onChangeText={onChange}
            error={!!errors.calorias}
            style={styles.input}
            keyboardType="numeric"
          />
        )}
      />
      {errors.calorias && (
        <Text style={styles.error}>{errors.calorias.message}</Text>
      )}

      <Controller
        control={control}
        name="pessoas"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Serve quantas pessoas"
            value={value}
            onChangeText={onChange}
            error={!!errors.pessoas}
            style={styles.input}
            keyboardType="numeric"
          />
        )}
      />
      {errors.pessoas && (
        <Text style={styles.error}>{errors.pessoas.message}</Text>
      )}

      <Controller
        control={control}
        name="tamanho"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Tamanho"
            value={value}
            onChangeText={onChange}
            error={!!errors.tamanho}
            style={styles.input}
          />
        )}
      />
      {errors.tamanho && (
        <Text style={styles.error}>{errors.tamanho.message}</Text>
      )}

      <Button
        mode="contained"
        onPress={handleSubmit(salvar)}
        style={styles.button}
      >
        Salvar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: AppColors.lightGray,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: AppColors.primaryBlue,
    textAlign: "center",
  },
  input: {
    marginBottom: 12,
    backgroundColor: AppColors.white,
  },
  maskInput: {
    height: 56,
    backgroundColor: AppColors.white,
    borderRadius: 4,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 12,
  },
  error: {
    color: AppColors.error,
    marginBottom: 8,
  },
  button: {
    marginTop: 20,
    padding: 8,
    backgroundColor: AppColors.primaryBlue,
  },
  menuButton: {
    backgroundColor: AppColors.white,
  },
});
