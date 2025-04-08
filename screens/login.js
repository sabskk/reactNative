import {View, Text, Image, Button, TextInput, StyleSheet} from 'react-native';

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png"}}/>
                <Text style={styles.title}> Site Bizarro </Text>
            </View>
            <View style={styles.logincontent}>
                <Text style={styles.logintitle}> Login de Usuário </Text>
                <TextInput
                    placeholder="Usuário"
                    placeholderTextColor={'black'}
                    style={styles.txtinput}
                />
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor={'black'}
                    style={styles.txtinput}
                />
                <Button title='Login' color={'#e9186d'} onPress={()=>navigation.navigate('Home')}/>
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
        backgroundColor: '#a4e8e2',
        padding: 15,
    },
    title:{
        fontSize: '20px',
        alignSelf: 'center',
        fontWeight: 'bolder',
    },
    logintitle:{
        fontSize: '20px',
        alignSelf: 'center',
        marginBottom: '25px',
        fontWeight: 'bolder',
    },
    logo:{
        width: 150,
        height: 70,
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px'
    },
    logincontent:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px',
    },
    txtinput:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: '20px',
    }
})