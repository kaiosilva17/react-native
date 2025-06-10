import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';
import { AppColors } from '../constants/Colors';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';


const registerSchema = yup.object().shape({
  email: yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'As senhas não coincidem') 
    .required('Confirmação de senha é obrigatória'),
});

function RegisterScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleRegister = async (data) => {
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("Usuário cadastrado com sucesso!", userCredential.user.email);
      
      Alert.alert("Sucesso", "Sua conta foi criada com sucesso! Faça login para continuar."); 
      reset(); 
      navigation.navigate('Login'); 
      
    } catch (error) {
      console.error("Erro no cadastro:", error.code, error.message);
      let errorMessage = "Ocorreu um erro no cadastro. Tente novamente.";

      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "Este e-mail já está em uso. Por favor, utilize outro e-mail.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "A senha é muito fraca. Escolha uma senha mais forte.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "O formato do e-mail é inválido.";
      }

      Alert.alert("Erro de Cadastro", errorMessage); 
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBarHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color={AppColors.white} />
        <Appbar.Content title="Criar Conta" titleStyle={styles.appBarTitle} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Crie Sua Conta</Text>
        <Text style={styles.subtitle}>Junte-se a nós para explorar o mundo do delivery!</Text>

       
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
              theme={{ colors: { primary: AppColors.primaryPurple, outline: AppColors.primaryPurple } }}
              error={!!errors.email}
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

        
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
              theme={{ colors: { primary: AppColors.primaryPurple, outline: AppColors.primaryPurple } }}
              error={!!errors.password}
            />
          )}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

        
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Confirmar Senha"
              mode="outlined"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              theme={{ colors: { primary: AppColors.primaryPurple, outline: AppColors.primaryPurple } }}
              error={!!errors.confirmPassword}
            />
          )}
        />
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}

        <Button
          mode="contained"
          onPress={handleSubmit(handleRegister)}
          style={styles.registerButton}
          labelStyle={styles.registerButtonLabel}
        >
          Cadastrar
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
          <Text style={styles.loginLinkText}>Já tem uma conta? Faça Login</Text>
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
    backgroundColor: AppColors.primaryBlue, 
  },
  appBarTitle: {
    color: AppColors.white,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: AppColors.darkBlue, 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: AppColors.gray,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: AppColors.white,
  },
  registerButton: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: AppColors.primaryPurple, 
    borderRadius: 8,
    marginTop: 20,
  },
  registerButtonLabel: {
    fontSize: 18,
    color: AppColors.white,
  },
  loginLink: {
    marginTop: 20,
  },
  loginLinkText: {
    color: AppColors.primaryPurple, 
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: AppColors.error,
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginBottom: 5,
    marginTop: -10,
  },
});

export default RegisterScreen;