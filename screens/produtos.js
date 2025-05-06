import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {useState} from 'react';
import ProductCard from '../componentes/productCard';

export default function Produto(){

    const [produtos, setProdutos] = useState([
        {foto:'https://www.quitandatomio.com.br/upload/1085343213-beneficios-da-manga-palmer-para-a-saude.jpg', id: '1', nome: 'Manga', valor: 2.00},
        {foto:'https://www.hortifruti.com.br/_next/image?url=https%3A%2F%2Fhortifrutibr.vtexassets.com%2Farquivos%2Fids%2F155442%2FAbacaxi-Organico-Unidade.jpg%3Fv%3D638671092903500000&w=320&q=75', id: '2', nome: 'Abacaxi', valor: 10.00},
        {foto:'https://vallefrutas.com.br/wp-content/uploads/banana-nanica.png', id: '3', nome: 'Banana', valor: 100.50},
        {foto:'https://www.hortifruti.com.br/_next/image?url=https%3A%2F%2Fhortifrutibr.vtexassets.com%2Farquivos%2Fids%2F169083%2FMorango.jpg%3Fv%3D638671094409070000&w=1440&q=75', id: '4', nome: 'Morango', valor: 2.00},
        {foto:'https://acdn-us.mitiendanube.com/stores/746/397/products/maca-argentina1-a86acef532d11addf315221676880019-640-0.jpg', id: '5', nome: 'Maçã', valor: 10.00},
        {foto:'https://images.tcdn.com.br/img/img_prod/450860/muda_de_pessego_aurora_com_1m_enxertada_684_1_20190611093602.jpg', id: '6', nome: 'Pêssego', valor: 100.50},
        {foto:'https://bretas.vtexassets.com/arquivos/ids/185357-800-auto?v=638375504073270000&width=800&height=auto&aspect=true', id: '7', nome: 'Mirtilo', valor: 2.00},
        {foto:'https://images.tcdn.com.br/img/img_prod/450860/muda_de_pera_d_agua_ou_europeia_1m_enxertada_676_1_20190611093602.jpg', id: '8', nome: 'Pêra', valor: 10.00},
        {foto:'https://cdn.awsli.com.br/496/496853/produto/37100363/my-project-1---2023-05-13t182519-771-moh6ce2zg7.png', id: '9', nome: 'Uva', valor: 100.50},
        {foto:'https://organicodiniz.com.br/wp-content/uploads/2021/01/pitaya-roxa-800x800-1.jpg', id: '10', nome: 'Pitaya', valor: 2.00},
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