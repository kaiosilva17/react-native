import { StyleSheet, View } from 'react-native'
import { Text, Card, Avatar, IconButton, ActivityIndicator, MD2Colors } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'

export default function HomeScreen({ navigation, route }) {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products/category-list")
            .then(resposta => {
                setCategorias(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                style={{ marginBottom: 40 }}
                data={categorias}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Card
                        style={{ margin: 8 }}
                        onPress={() => navigation.navigate('ListaProdutoScreen', { categoria: item })}
                    >
                        <Card.Title
                            title={item}
                            right={(props) => <IconButton {...props} icon={'chevron-right'} size={30} />}
                        />
                    </Card>
                )}

                ListEmptyComponent={() => (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator animating={true} color={MD2Colors.red800} size={50} />
                        <Text>Carregando categorias...</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',

    }
})