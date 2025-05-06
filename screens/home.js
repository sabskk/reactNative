import {View, Text, Image, Button, StyleSheet, FlatList} from 'react-native';
import { useState } from "react";
import ProductCard from '../componentes/productCard';

export default function Home(){

    const [produtos, setProdutos] = useState([
        {foto:'https://dmvfarma.vtexassets.com/arquivos/ids/242273/Sabonete-Liquido-Facial-Grapefruit-Natural-Neutrogena-Deep-Clean-Bisnaga-150g.jpg?v=638561284935900000', id: '1', nome: 'Sabonete Facial', valor: 45.90},
        {foto:'https://farmaciaterapeutica.com.br/_next/image?url=https%3A%2F%2Fpedidopago-v2-prod.s3.sa-east-1.amazonaws.com%2Fstore%2F01H532TWZJQ3TJGQ42JZBRFZY4%2Fproduct%2F01HNWQAGKD1NAX20BZYKTQY7ZN%2Fmedia_64867_base6791952622185057814.png&w=3840&q=75', id: '2', nome: 'Ácido Hisalurônico', valor: 61.50},
        {foto:'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/MP158004/f5779910-ae9d-4d95-a18f-4ae2a61230e3-mp158004-aroma-massageador-facial-rolo-pedra-natural-jade.png', id: '3', nome: 'Rolo de Pedra', valor: 25.50},
        {foto:'https://drogariacristal.com/media/catalog/product/cache/dc75f304252411b8c602e1e96d99390d/a/c/actine-fresh-solar-corporal-fps.png', id: '4', nome: 'Protetor Solar', valor: 76.90},
    ])

    return(
        <View style={styles.container}>
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
            <View style={styles.header}>
                <Image style={styles.logo} source={{uri:"https://s2-g1.glbimg.com/uNmrUV2YCrsTRn5PFyNxeEypNw4=/0x0:242x251/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/l/K/JUm2dRSriCk1pIBCJ7Mw/farmington.png"}}/>
                <Text style={styles.title}> Colégio Farmington </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.bodytext}>Com uma biblioteca de grande acervo;</Text>
                <Image style={styles.bodyimg} source={{uri:"https://magicgramas.com.br/blog/wp-content/uploads/2018/11/2.jpg"}}/>
            </View>
            <View style={styles.content}>
                <Image style={styles.bodyimg} source={{uri:"https://blog-leiturinha-novo.s3.us-east-1.amazonaws.com/production/uploads/2019/01/biblioteca.jpg"}}/>
                <Text style={styles.bodytext}>Brincadeiras intuitivas para os menores;</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.bodytext}>E salas de aula aconchegantes para os estudantes.</Text>
                <Image style={styles.bodyimg} source={{uri:"https://conceito.de/wp-content/uploads/2019/04/sala-de-aula.jpg"}}/>
            </View>
            <View style={styles.contentbutton}>
                <Button title='Faça Sua Matrícula' color={'red'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#2887c1',
    },
    title:{
        fontSize: '20px',
    },
    logo:{
        width: 100,
        height: 100,
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px'
    },
    bodytext:{
        marginRight: '10px',
        marginLeft: '10px',
    },
    bodyimg:{
        width: 190,
        height: 150,
    },
    contentbutton:{
        alignItems: 'center',
        justifyContent: 'center',
    },
})