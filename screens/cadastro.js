import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../controller';

export default function Cadastro({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const registroUsuario = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed up 
            console.log("Usuário cadastrado.", userCredential.user.email);
            navigation.navigate('Login');
        })
        .catch((error) => {
            console.log("Erro.", error.message);
        });
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png"}}/>
                <Text style={styles.title}> Site Bizarro </Text>
            </View>
            <View style={styles.logincontent}>
                <Text style={styles.logintitle}> Cadastro de Usuário </Text>
                <TextInput
                    placeholder="Novo Usuário"
                    placeholderTextColor={'black'}
                    style={styles.txtinput}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor={'black'}
                    style={styles.txtinput}
                    value={senha}
                    onChangeText={setSenha}
                />
                <Button title='Criar' color={'#e9186d'} onPress={registroUsuario}/>
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