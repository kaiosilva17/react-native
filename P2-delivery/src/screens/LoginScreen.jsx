import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, TextInput, Button, Appbar } from "react-native-paper";
import { AppColors } from "../constants/Colors";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
});

function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("Login bem-sucedido:", userCredential.user.email);

      Alert.alert("Sucesso", "Login realizado com sucesso!"); 
      reset();

      navigation.navigate("UserFlow");
    } catch (error) {
      console.error("Erro no login:", error.code, error.message);
      let errorMessage =
        "Ocorreu um erro ao fazer login. Verifique suas credenciais.";

      if (error.code === "auth/invalid-email") {
        errorMessage = "O formato do e-mail é inválido.";
      } else if (error.code === "auth/user-disabled") {
        errorMessage = "Este usuário foi desabilitado.";
      } else if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        errorMessage = "E-mail ou senha inválidos.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage =
          "Muitas tentativas de login. Tente novamente mais tarde.";
      }

      Alert.alert("Erro de Login", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBarHeader}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color={AppColors.white}
        />
        <Appbar.Content title="Fazer Login" titleStyle={styles.appBarTitle} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Bem-vindo de Volta!</Text>
        <Text style={styles.subtitle}>Entre com sua conta para continuar.</Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="E-mail"
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              theme={{ colors: { primary: AppColors.primaryBlue } }}
              error={!!errors.email}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Senha"
              mode="outlined"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              theme={{ colors: { primary: AppColors.primaryBlue } }}
              error={!!errors.password}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}

        <Button
          mode="contained"
          onPress={handleSubmit(handleLogin)}
          style={styles.loginButton}
          labelStyle={styles.loginButtonLabel}
        >
          Entrar
        </Button>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.registerLink}
        >
          <Text style={styles.registerLinkText}>
            Não tem uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.lightGray,
  },
  appBarHeader: {
    backgroundColor: AppColors.primaryPurple,
  },
  appBarTitle: {
    color: AppColors.white,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: AppColors.darkPurple,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: AppColors.gray,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    marginBottom: 15,
    backgroundColor: AppColors.white,
  },
  loginButton: {
    width: "100%",
    paddingVertical: 8,
    backgroundColor: AppColors.primaryBlue,
    borderRadius: 8,
    marginTop: 20,
  },
  loginButtonLabel: {
    fontSize: 18,
    color: AppColors.white,
  },
  registerLink: {
    marginTop: 20,
  },
  registerLinkText: {
    color: AppColors.primaryBlue,
    fontSize: 16,
    textDecorationLine: "underline",
  },
  errorText: {
    color: AppColors.error,
    alignSelf: "flex-start",
    marginLeft: 5,
    marginBottom: 10,
    marginTop: -10,
  },
});

export default LoginScreen;
