import {View, Text, StyleSheet, Image, Button, TextInput} from 'react-native';

export default function Teste(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Países </Text>
            <View style={styles.brasilimg}>
                <Image style={styles.img} source={require('../assets/brasil.png')}/>
            </View>
            <Text style={styles.txt}> Brasil </Text>
            <View style={styles.row}>
                <Image style={styles.img} source={require('../assets/russia.png')}/>
                <Image style={styles.img} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png"}}/>
            </View>
            <Text style={styles.creds}> Rússia e França </Text>
            <TextInput
                placeholder="User"
                placeholderTextColor={'blue'}
                style={styles.txtinput}
            />
            <TextInput
                placeholder="Senha"
                placeholderTextColor={'green'}
                style={styles.txtinput}
            />
            <Button title="Enviar" color={'red'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'pink',
        padding: 20,
        justifyContent: 'space-evenly',
    },
    img:{
        width: 150,
        height: 100,
        borderRadius: 10,
    },
    brasilimg:{
        alignItems: 'flex-end',
    },
    title:{
        fontSize: 20,
    },
    txt:{
        fontSize: 20,
        alignSelf: 'flex-end',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    creds:{
        fontSize: 20,
        alignSelf: 'center',
    },
    txtinput:{
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        padding: 10,
    }
})