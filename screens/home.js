import {View, Text, Image, Button, StyleSheet, FlatList} from 'react-native';
import { useState } from "react";
import ProductCard from '../componentes/productCard';

export default function Home(){

    const [produtos, setProdutos] = useState([
        {foto:'https://obahortifruti.vtexassets.com/arquivos/ids/4906022/Manga-Palmer.png?v=638265729931630000', id: '1', nome: 'Manga', valor: 2.00},
        {foto:'https://superprix.vteximg.com.br/arquivos/ids/175201-600-600/Abacaxi--unidade-.png?v=636294199507870000', id: '2', nome: 'Abacaxi', valor: 10.00},
        {foto:'https://vallefrutas.com.br/wp-content/uploads/banana-nanica.png', id: '3', nome: 'Banana', valor: 100.50},
        {foto:'https://superprix.vteximg.com.br/arquivos/ids/170267-200-200/Morango--Bandeja-.jpg?v=636094550355970000', id: '4', nome: 'Morango', valor: 2.00},
    ])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png"}}/>
                <Text style={styles.sitetitle}> Site Bizarro </Text>
            </View>
            <FlatList
                data={produtos}
                renderItem={({item}) => (
                    <ProductCard
                    foto = {item.foto}
                    id = {item.id}
                    nome = {item.nome}
                    valor = {item.valor}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#a4e8e2',
        padding: 15,
    },
    logo:{
        width: 150,
        height: 70,
    },
    sitetitle:{
        fontSize: '20px',
        alignSelf: 'center',
        fontWeight: 'bolder',
    },
    title:{
        alignSelf: 'center',
        fontSize: '20px',
        fontWeight: 'bolder',
        color: '#e9186d',
        marginBottom: '10px',
    },
    txt:{
        textAlign: 'center',
        marginBottom: '10px',
    },
    img:{
        width: 250,
        height: 300,
        marginBottom: '10px',
    },
    content:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
})