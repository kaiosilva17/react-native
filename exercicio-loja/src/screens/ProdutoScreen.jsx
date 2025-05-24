import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import axios from 'axios'

export default function ProdutoScreen({ navigation, route }) {

    const idProduto  = route.params
    const [produto, setProduto] = useState({})

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${idProduto}`)
            .then(resposta => {
                setProduto(resposta.data)

            })
            .catch(erro => {
                console.log("Erro ao buscar detalhes do produto:", erro)

            })
    }, [])

    return (
        <View>
            <Card style={{ margin: 10 }}>
                <Card.Cover source={{ uri: produto.thumbnail }} />
                <Card.Title title={produto.title} subtitle={`Marca: ${produto.brand}`} />
                <Card.Content>
                    <Text style={styles.descricao}>Descrição: {produto.description}</Text>
                    <Text style={styles.preco}>Preço: ${produto.price}</Text>
                    <Text>Desconto: {produto.discountPercentage}%</Text>
                    <Text>Rating: {produto.rating}</Text>
                    <Text>Estoque disponível: {produto.stock}</Text>
                    <Text>Categoria: {produto.category}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({})