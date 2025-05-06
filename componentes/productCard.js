import { View, Text, StyleSheet, Image } from "react-native";

export default function ProductCard({foto, id, nome, valor}){
    return(
        <View>
            <Text style={styles.txt}> —————————— </Text>
            <Image style={styles.foto} source={{uri:foto}}/>
            <View style={styles.card}>
                <Text style={styles.txt}> {nome} </Text>
                <Text style={styles.txt}> R${valor.toFixed(2)} </Text>
            </View>
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