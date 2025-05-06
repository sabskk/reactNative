import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';

export default function Feed({navigation}){
    return(
        // o scroll view só funciona quando tem texto o suficiente
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png"}}/>
                    <Text style={styles.sitetitle}> Site Bizarro </Text>
                </View>
                <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}> Giorno Giovanna </Text>
                    <Text style={styles.txt}>🌟 O Novo Líder 🌟</Text>
                    <Text style={styles.txt}>O protagonista da parte 5. Filho de DIO, Giorno tem o objetivo de se tornar o "Rei dos Mafiosos" para mudar a Passione e tirar a corrupção do poder. Ele possui o Stand Gold Experience, que pode dar vida a objetos inanimados.</Text>
                    <Image style={styles.img} source={{uri:"https://upload.wikimedia.org/wikipedia/en/b/b4/Giorno_Giovanna.png"}}/>
                    <Button title='Saiba Mais' color={'#e9186d'} onPress={()=>navigation.navigate('Home')}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}> Bruno Bucciarati </Text>
                    <Text style={styles.txt}>O líder da equipe de Giorno, ele é um dos membros mais importantes e leais da Passione. Seu Stand, Sticky Fingers, tem a habilidade de criar zíperes em objetos e pessoas, permitindo diversas estratégias de combate.</Text>
                    <Image style={styles.img} source={{uri:"https://static.wikia.nocookie.net/jjba/images/c/cc/BrunoManga.webp/revision/latest/scale-to-width/360?cb=20230408142833&path-prefix=pt-br"}}/>
                    <Button title='Saiba Mais' color={'#e9186d'} onPress={()=>navigation.navigate('Home')}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}> Leone Abbacchio </Text>
                    <Text style={styles.txt}>Ex-policial, Abbacchio se junta à Passione após uma tragédia pessoal. Seu Stand, Moody Blues, permite que ele reveja eventos passados, o que o torna crucial em investigações.</Text>
                    <Image style={styles.img} source={{uri:"https://static.wikia.nocookie.net/jjba/images/c/cc/BrunoManga.webp/revision/latest/scale-to-width/360?cb=20230408142833&path-prefix=pt-br"}}/>
                    <Button title='Saiba Mais' color={'#e9186d'} onPress={()=>navigation.navigate('Home')}/>
                </View>
                </ScrollView>
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