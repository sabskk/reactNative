import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
/* importar função default não precisa de {}, mas outras funções criadas precisa */
import Teste from './componentes/teste';

export default function App() {
  return (
    <View style={app.container}>
      <Teste/>
    </View>
  );
}

/* FLEX 1 PRO APP OCUPAR A TELA TODA, NÃO COLOCAR OUTRAS ESTILIZAÇÕES */
const app = StyleSheet.create({
  container:{
    flex:1,
  }
})