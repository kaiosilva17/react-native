import { StyleSheet, View } from 'react-native'
import { Text, Card, Avatar, IconButton } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'

export default function HomeScreen({ navigation, route }) {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(resposta => {
                console.log(resposta.data.users)
                setUsuarios(resposta.data.users)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                style={{ marginBottom: 40 }}
                data={usuarios}
                renderItem={({ item }) => (
                    <Card
                        style={{ margin: 8 }}
                        onPress={() => navigation.navigate('UsuarioScreen', item.id)}
                    >
                        <Card.Title
                            title={item.firstName + " " + item.lastName}
                            subtitle={item.email}
                            left={(props) => <Avatar.Image {...props} source={{ uri: item.image }} />}
                            right={() => <IconButton icon={'chevron-right'} size={30} />}
                        />
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
})