import {View, Text, Button, StyleSheet} from 'react-native';
import { useState } from 'react';

export default function Count({navigation}){

    const [contador, setContador] = useState(0);

    function Add(){
        setContador(contador + 1)
    }

    function Sub(){
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Contador </Text>
            <Text style={styles.txt}> {contador} </Text>
            <View style={styles.buttons}>
                <Button title='+' color={'#e9186d'} onPress={Add}></Button>
                <Button title='-' color={'#e9186d'} onPress={Sub}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
    title:{
        fontSize: '20px',
        alignSelf: 'center',
        fontWeight: 'bolder',
    },
    txt:{
        fontSize: '15px',
        alignSelf: 'center',
    },
    buttons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
})