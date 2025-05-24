import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Card, MD2Colors } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'
import axios from 'axios'

export default function ListaProdutoScreen({ navigation, route }) {
    const { categoria } = route.params
    const [produtos, setProdutos] = useState([])


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoria}`)
            .then(resposta => {
                setProdutos(resposta.data.products)

            })
            .catch(erro => {
                console.log("Erro ao buscar produtos da categoria:", erro)

            })
    }, [])


    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={{ margin: 10 }} onPress={() => navigation.navigate('ProdutoScreen',  item.id )}>
                        <Card.Cover source={{ uri: item.thumbnail }} />
                        <Card.Title title={item.title} subtitle={`$${item.price}`} />
                    </Card>
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
        marginTop: 50
    }
})