import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, Text, Card, Button } from "react-native-paper";
import { AppColors } from "../constants/Colors";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBarHeader}>
        <Appbar.Action
          icon="menu"
          color={AppColors.white}
          onPress={() => navigation.openDrawer()}
        />
        <Appbar.Content
          title="Bem-vindo ao Meu Delivery"
          titleStyle={styles.appBarTitle}
        />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.introText}>
          Bem-vindo ao nosso aplicativo de delivery! 

          <Text variant="displaySmall"style={{color:AppColors.darkPurple}}>KIO's</Text>
        </Text>

        <Card style={styles.card}>
          <Card.Cover
            source={{ uri: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" }}
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
              Se você busca praticidade e variedade, nossa área de usuário
              permite explorar o nosso cardapio, no qual o cliente pode escolher
              seu hamburguer, acompanhamento e bebida.
            </Text>
          </Card.Content>
          <Card.Actions></Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri: "https://i.pinimg.com/736x/e8/6b/c2/e86bc2b23a9b6358f4a1f3e1e3946333.jpg",
            }}
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
              ferramentas completas para cadastrar lojas, gerenciar produtos e
              controle de funcionários. Mantenha seu negócio no
              controle.
            </Text>
          </Card.Content>
          <Card.Actions></Card.Actions>
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
    textAlign: "center",
    marginVertical: 20,
    lineHeight: 28,
    color: AppColors.darkGray,
  },
  card: {
    marginVertical: 10,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: AppColors.white,
    marginBottom: 30,
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
