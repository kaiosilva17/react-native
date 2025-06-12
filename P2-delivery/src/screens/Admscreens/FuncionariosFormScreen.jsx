import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { Text, TextInput, Button, HelperText, Menu } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FuncionarioService from "../../services/FuncionarioService";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppColors } from "../../constants/Colors";
import MaskInput, { Masks } from "react-native-mask-input";

const schema = yup.object({
  nome: yup.string().required("Informe o nome do funcionário"),
  funcao: yup
    .string()
    .oneOf(["Atendente", "Chapeiro", "Entregador"])
    .required("Selecione a função"),
  dataNascimento: yup.string().required("Informe a data de nascimento"),
  cpf: yup.string().required("Informe o CPF"),
  dataAdmissao: yup.string().required("Informe a data de admissão"),
  telefone: yup.string().required("Informe o telefone"),
  email: yup.string().email("Email inválido").required("Informe o email"),
  salario: yup.string().required("Informe o salário"),
});

export default function FuncionariosFormScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { loja, funcionario = null } = route.params || {};
  const lojaId = loja?.id;

  const [menuVisible, setMenuVisible] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!lojaId) {
      Alert.alert("Erro", "Loja não encontrada.");
      navigation.goBack();
    }
  }, [lojaId]);

  useEffect(() => {
    if (funcionario) {
      setValue("nome", funcionario.nome);
      setValue("funcao", funcionario.funcao);
      setValue("dataNascimento", funcionario.dataNascimento);
      setValue("cpf", funcionario.cpf);
      setValue("dataAdmissao", funcionario.dataAdmissao);
      setValue("telefone", funcionario.telefone);
      setValue("email", funcionario.email);
      setValue("salario", funcionario.salario);
    }
  }, [funcionario]);

  const funcoes = ["Atendente", "Chapeiro", "Entregador"];

  async function salvar(data) {
    try {
      const dadosComFoto = {
        ...data,
        foto: "https://i.pinimg.com/736x/4e/7d/ba/4e7dbad7fe6d6cf32feefbe36231effd.jpg",
      };

      if (funcionario && funcionario.id) {
        await FuncionarioService.atualizarFuncionario(lojaId, {
          id: funcionario.id,
          ...dadosComFoto,
        });
        Alert.alert("Sucesso", "Funcionário atualizado com sucesso");
      } else {
        await FuncionarioService.salvarFuncionario(lojaId, dadosComFoto);
        Alert.alert("Sucesso", "Funcionário cadastrado com sucesso");
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao salvar o funcionário");
    }
  }

  if (!lojaId) return null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cadastro de Funcionário</Text>

      <Image
        source={{
          uri: "https://i.pinimg.com/736x/4e/7d/ba/4e7dbad7fe6d6cf32feefbe36231effd.jpg",
        }}
        style={styles.avatar}
      />
      <Text style={styles.photoHint}>Foto padrão do funcionário</Text>

      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Nome"
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
        name="funcao"
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
                  {value || "Selecione a função"}
                </Button>
              }
            >
              {funcoes.map((item) => (
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
            {errors.funcao && (
              <HelperText type="error">{errors.funcao.message}</HelperText>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="dataNascimento"
        render={({ field: { onChange, value } }) => (
          <MaskInput
            style={styles.maskInput}
            value={value}
            onChangeText={onChange}
            mask={Masks.DATE_DDMMYYYY}
            placeholder="Data de nascimento"
            keyboardType="numeric"
          />
        )}
      />
      {errors.dataNascimento && (
        <Text style={styles.error}>{errors.dataNascimento.message}</Text>
      )}

      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange, value } }) => (
          <MaskInput
            style={styles.maskInput}
            value={value}
            onChangeText={onChange}
            mask={Masks.BRL_CPF}
            placeholder="CPF"
            keyboardType="numeric"
          />
        )}
      />
      {errors.cpf && <Text style={styles.error}>{errors.cpf.message}</Text>}

      <Controller
        control={control}
        name="dataAdmissao"
        render={({ field: { onChange, value } }) => (
          <MaskInput
            style={styles.maskInput}
            value={value}
            onChangeText={onChange}
            mask={Masks.DATE_DDMMYYYY}
            placeholder="Data de admissão"
            keyboardType="numeric"
          />
        )}
      />
      {errors.dataAdmissao && (
        <Text style={styles.error}>{errors.dataAdmissao.message}</Text>
      )}

      <Controller
        control={control}
        name="telefone"
        render={({ field: { onChange, value } }) => (
          <MaskInput
            style={styles.maskInput}
            value={value}
            onChangeText={onChange}
            mask={Masks.BRL_PHONE}
            placeholder="Telefone"
            keyboardType="numeric"
          />
        )}
      />
      {errors.telefone && (
        <Text style={styles.error}>{errors.telefone.message}</Text>
      )}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Email"
            value={value}
            onChangeText={onChange}
            error={!!errors.email}
            style={styles.input}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="salario"
        render={({ field: { onChange, value } }) => (
          <MaskInput
            style={styles.maskInput}
            value={value}
            onChangeText={onChange}
            mask={Masks.BRL_CURRENCY}
            placeholder="Salário"
            keyboardType="numeric"
          />
        )}
      />
      {errors.salario && (
        <Text style={styles.error}>{errors.salario.message}</Text>
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
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 12,
  },
  photoHint: {
    textAlign: "center",
    color: AppColors.darkGray,
    marginBottom: 16,
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
    marginBottom: 30,
  },
  menuButton: {
    backgroundColor: AppColors.white,
  },
});
