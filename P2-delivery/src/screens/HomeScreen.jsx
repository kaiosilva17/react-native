import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Appbar, Text, Card, Button } from 'react-native-paper'; 
import { AppColors } from '../constants/Colors'; 

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Appbar.Header style={styles.appBarHeader}>
        <Appbar.Action icon="menu" color={AppColors.white} onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Bem-vindo ao Meu Delivery" titleStyle={styles.appBarTitle} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.introText}>
          Bem-vindo ao nosso aplicativo de delivery! Explore as melhores opções de
          restaurantes e produtos para você ou gerencie seu negócio com nossa
          plataforma intuitiva.
        </Text>

        
        <Card style={styles.card}>
          <Card.Cover
            source={{ uri: 'https://via.placeholder.com/300x150?text=Usuário' }}
            style={styles.cardCover}
          />
          <Card.Title
            title="Para Usuários"
            subtitle="Descubra e Peça"
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
          />
          <Card.Content>
            <Text style={styles.cardContentText}>
              Se você busca praticidade e variedade, nossa área de usuário permite
              explorar lojas, navegar por cardápios, adicionar itens ao carrinho e
              fazer pedidos de forma rápida e segura.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              // === NAVEGAÇÃO PARA A AUTHSTACK ===
              onPress={() => navigation.navigate('AuthStack')} 
              style={styles.cardButtonPrimary}
              labelStyle={styles.cardButtonLabel}
            >
              Entrar como Usuário
            </Button>
          </Card.Actions>
        </Card>

        
        <Card style={styles.card}>
          <Card.Cover
            source={{ uri: 'https://via.placeholder.com/300x150?text=Administrador' }}
            style={styles.cardCover}
          />
          <Card.Title
            title="Para Administradores"
            subtitle="Gerencie Seu Negócio"
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
          />
          <Card.Content>
            <Text style={styles.cardContentText}>
              Para proprietários de estabelecimentos, nossa área ADM oferece
              ferramentas completas para cadastrar lojas, gerenciar produtos,
              controle de funcionários e muito mais. Mantenha seu negócio no controle.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="outlined"
              onPress={() => { /* navigation.navigate('AdminDashboard') */ }}
              style={styles.cardButtonSecondary}
              labelStyle={styles.cardButtonLabelSecondary}
            >
              Acessar Painel ADM
            </Button>
          </Card.Actions>
        </Card>
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
    padding: 16,
    paddingTop: 0,
  },
  introText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    lineHeight: 28,
    color: AppColors.darkGray,
  },
  card: {
    marginVertical: 10,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: AppColors.white, 
  },
  cardCover: {
    height: 150,
  },
  cardTitle: {
    color: AppColors.darkPurple, 
  },
  cardSubtitle: {
    color: AppColors.gray, 
  },
  cardContentText: {
    color: AppColors.darkGray, 
  },
  cardButtonPrimary: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: AppColors.primaryBlue, 
  },
  cardButtonLabel: {
    color: AppColors.white, 
  },
  cardButtonSecondary: {
    flex: 1,
    marginHorizontal: 8,
    borderColor: AppColors.primaryPurple, 
  },
  cardButtonLabelSecondary: {
    color: AppColors.primaryPurple, 
  },
});

export default HomeScreen;