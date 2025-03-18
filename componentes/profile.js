import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-web';

export default function Profile(){
    return(
        <View style={styles.container}>
            <Text> Tenho os dois componentes. </Text>
        </View>
    )
}

export function Gallery(){
    return(
        <View style={gallery.container}>
            <Text> Essa é minha galeria. </Text>
        </View>
    )
}

export function Artist(){
    return(
        <View style={artist.container}>
            <Text> Esses são os artistas. </Text>
        </View>
    )
}

export function Brasil(){
    return(
        <View style={brasil.container}>
            <Text> Brasil </Text>
            <Image style={{width:200, height:200}} source={require('../assets/brasil.png')}/>
        </View>
    )
}

export function Russia(){
    return(
        <View style={russia.container}>
            <Text> Russia </Text>
            <Button> Clique </Button>
        </View>
    )
}

export function Russiaimg(){
    return(
        <View style={russiaimg.container}>
            <Image style={{width:200, height:200}} source={require('../assets/russia.png')}/>
        </View>
    )
}

const brasil = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const russia = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'right',
    }
})

const russiaimg = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
    }
})

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    }
})

const gallery = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue'
    }
})

const artist = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red'
    }
})
