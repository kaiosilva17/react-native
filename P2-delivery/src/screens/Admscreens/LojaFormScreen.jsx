import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MaskInput, { Masks } from "react-native-mask-input";
import LojaService from "../../services/LojaService";
import CepService from "../../services/CepServices";
import { AppColors } from "../../constants/Colors";

const schema = yup.object({
  cep: yup.string().required("Informe o CEP"),
  tamanho: yup.string().required("Informe o tamanho"),
  qtdeFuncionarios: yup
    .number()
    .min(3, "Mínimo de 3 funcionários")
    .required()
    .typeError("Número inválido"),
  qtdeProdutos: yup
    .number()
    .min(3, "Mínimo de 3 produtos")
    .required()
    .typeError("Número inválido"),
  horario: yup.string().required("Informe o horário de funcionamento"),
  fundacao: yup.string().required("Informe a data de fundação"),
});

export default function LojaFormScreen({ navigation, route }) {
  const lojaAntiga = route.params || {};

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      funcionarios: "Atendente, Entregador, Chapeiro",
      produtos: "Hamburguer, Acompanhamentos, Bebidas",
    },
  });

  useEffect(() => {
    if (lojaAntiga.id) {
      reset(lojaAntiga);
    }
  }, []);

  async function buscarCep(cep) {
    if (cep.length < 8) return;
    try {
      const data = await CepService.buscar(cep);
      setValue("logradouro", data.logradouro || "");
      setValue("bairro", data.bairro || "");
      setValue("localidade", data.localidade || "");
      setValue("uf", data.uf || "");
    } catch (error) {
      Alert.alert("Erro", "CEP não encontrado.");
    }
  }

  async function salvar(data) {
    try {
      const lojaData = {
        ...data,
        logradouro: data.logradouro || "",
        bairro: data.bairro || "",
        localidade: data.localidade || "",
        uf: data.uf || "",
      };

      if (lojaAntiga.id) {
        await LojaService.atualizar({ id: lojaAntiga.id, ...lojaData });
        Alert.alert("Sucesso", "Loja atualizada com sucesso!");
      } else {
        await LojaService.salvar(lojaData);
        Alert.alert("Sucesso", "Loja cadastrada com sucesso!");
      }
      navigation.reset({ index: 0, routes: [{ name: "LojaListaScreen" }] });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar.");
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="cep"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="CEP"
              value={value}
              onChangeText={(masked, unmasked) => {
                onChange(masked);
                if (unmasked.length === 8) {
                  buscarCep(unmasked);
                }
              }}
              mode="outlined"
              render={(props) => (
                <MaskInput
                  {...props}
                  value={value}
                  onChangeText={(masked, unmasked) => {
                    onChange(masked);
                    if (unmasked.length === 8) {
                      buscarCep(unmasked);
                    }
                  }}
                  mask={Masks.ZIP_CODE}
                />
              )}
            />
          )}
        />
        {errors.cep && <Text style={styles.error}>{errors.cep.message}</Text>}
      </View>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="tamanho"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Tamanho"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              right={<TextInput.Affix text="m²" />}
            />
          )}
        />
        {errors.tamanho && (
          <Text style={styles.error}>{errors.tamanho.message}</Text>
        )}
      </View>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="funcionarios"
          render={({ field: { value } }) => (
            <TextInput
              label="Funcionários (fixo)"
              value={value}
              mode="outlined"
              editable={false}
            />
          )}
        />
      </View>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="qtdeFuncionarios"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Quantidade de Funcionários"
              value={value?.toString()}
              onChangeText={onChange}
              mode="outlined"
              keyboardType="numeric"
            />
          )}
        />
        {errors.qtdeFuncionarios && (
          <Text style={styles.error}>{errors.qtdeFuncionarios.message}</Text>
        )}
      </View>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="produtos"
          render={({ field: { value } }) => (
            <TextInput
              label="Produtos (fixo)"
              value={value}
              mode="outlined"
              editable={false}
            />
          )}
        />
      </View>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="qtdeProdutos"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Quantidade de Produtos"
              value={value?.toString()}
              onChangeText={onChange}
              mode="outlined"
              keyboardType="numeric"
            />
          )}
        />
        {errors.qtdeProdutos && (
          <Text style={styles.error}>{errors.qtdeProdutos.message}</Text>
        )}
      </View>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="horario"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Horário de Funcionamento"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              render={(props) => (
                <MaskInput
                  {...props}
                  value={value}
                  onChangeText={onChange}
                  mask={[
                    /\d/,
                    /\d/,
                    ":",
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                    ":",
                    /\d/,
                    /\d/,
                  ]}
                  placeholder="00:00-00:00"
                />
              )}
            />
          )}
        />
        {errors.horario && (
          <Text style={styles.error}>{errors.horario.message}</Text>
        )}
      </View>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="fundacao"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Data de Fundação"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              render={(props) => (
                <MaskInput
                  {...props}
                  value={value}
                  onChangeText={onChange}
                  mask={Masks.DATE_DDMMYYYY}
                  placeholder="DD/MM/AAAA"
                />
              )}
            />
          )}
        />
        {errors.fundacao && (
          <Text style={styles.error}>{errors.fundacao.message}</Text>
        )}
      </View>

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
  container: { padding: 20 },
  inputGroup: { marginBottom: 10 },
  error: { color: AppColors.error, fontSize: 12, marginTop: 4 },
  button: { marginTop: 20, backgroundColor: AppColors.primaryBlue },
});
