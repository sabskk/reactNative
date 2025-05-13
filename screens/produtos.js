import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {useState} from 'react';
import ProductCard from '../componentes/productCard';

export default function Produto(){

    const [produtos, setProdutos] = useState([
        {foto:'https://obahortifruti.vtexassets.com/arquivos/ids/4906022/Manga-Palmer.png?v=638265729931630000', id: '1', nome: 'Manga', valor: 2.00},
        {foto:'https://superprix.vteximg.com.br/arquivos/ids/175201-600-600/Abacaxi--unidade-.png?v=636294199507870000', id: '2', nome: 'Abacaxi', valor: 10.00},
        {foto:'https://vallefrutas.com.br/wp-content/uploads/banana-nanica.png', id: '3', nome: 'Banana', valor: 100.50},
        {foto:'https://superprix.vteximg.com.br/arquivos/ids/170267-200-200/Morango--Bandeja-.jpg?v=636094550355970000', id: '4', nome: 'Morango', valor: 2.00},
        {foto:'https://images.tcdn.com.br/img/img_prod/1284052/maca_gala_kg_171_1_fc81812d677f46905545c2212343fe89.png', id: '5', nome: 'Maçã', valor: 10.00},
        {foto:'https://images.tcdn.com.br/img/img_prod/1284052/pessego_importado_kg_1033_1_ecb7863e185b00e286961eff53fcca0c.png', id: '6', nome: 'Pêssego', valor: 100.50},
        {foto:'https://carrefourbrfood.vtexassets.com/arquivos/ids/163244564/349b478a357a4ccb96499beae42ac556.jpg?v=638548054128300000', id: '7', nome: 'Mirtilo', valor: 2.00},
        {foto:'https://images.tcdn.com.br/img/img_prod/1284052/pera_importada_kg_1659_1_d3dd987ac423a7ffeafbaf46613c8d20.png', id: '8', nome: 'Pêra', valor: 10.00},
        {foto:'https://phygital-files.mercafacil.com/nossohortifruti/uploads/produto/uva_vit_ria_500g_un_a0520ff1-5a92-442b-9415-c1a45d6326b4.png', id: '9', nome: 'Uva', valor: 100.50},
        {foto:'https://obahortifruti.vtexassets.com/arquivos/ids/6061541/Pitaya-Polpa-Vermelha.png?v=638438754880270000', id: '10', nome: 'Pitaya', valor: 2.00},
    ])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png"}}/>
                <Text style={styles.sitetitle}> Site Bizarro </Text>
            </View>
            <Text style={styles.title}> Produtos </Text>
            {/* MAP
            {produtos.map((item) => (
                <View>
                    <Text style={styles.txt}> {item.nome} </Text>
                    <Text style={styles.txt}> R${item.valor.toFixed(2)} </Text>
                </View>
            ))} */}
            <FlatList
                data={produtos}
                renderItem={({item}) => (
                    // <View>
                    //     <Text style={styles.txt}> —————————— </Text>
                    //     <Image style={styles.foto} source={{uri:item.foto}}/>
                    //     <View style={styles.card}>
                    //         <Text style={styles.txt}> {item.nome} </Text>
                    //         <Text style={styles.txt}> R${item.valor.toFixed(2)} </Text>
                    //     </View>
                    // </View>
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
        backgroundColor: '#E8E8E8',
    },
    card:{
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: 150,
        height: 80,
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
    foto:{
        width: 150,
        height: 150,
        alignSelf: 'center'
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
        marginTop: '15px',
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