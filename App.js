/* importar função default(chamadas de "não nomeadas") não precisa de {}, mas outras funções criadas precisa(chamadas de "nomeadas") */
import Home from './screens/home';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Feed from './screens/feed';
import Count from './screens/contador';
import Produto from './screens/produtos';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from '@expo/vector-icons/Feather';

export default function App() { 

  const Stack = createStackNavigator();

  return (
    /* Só um tipo de navigation container durante o projeto */
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
      headerStyle: {backgroundColor: '#e9186d'},
      headerTintColor: 'white',
    }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='HomeTab' component={BottomTabs} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTabs(){

  const BottomTab = createBottomTabNavigator();

  return(
    <BottomTab.Navigator initialRouteName='Home' screenOptions={{
      headerStyle: {backgroundColor: '#e9186d'},
      headerTintColor: 'white',
      tabBarActiveBackgroundColor: '#e9186d',
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'black',
    }}>
      <BottomTab.Screen name='Home' component={Home} 
      options={{
        tabBarIcon:() =>
        <Feather name="home" size={24} color="white" />
      }} />

      <BottomTab.Screen name='Feed' component={Feed} 
      options={{
        tabBarIcon:() =>
        <Feather name="file-text" size={24} color="white" />
      }} />

      <BottomTab.Screen name='Contador' component={Count} 
      options={{
        tabBarIcon:() =>
        <Feather name="plus-circle" size={24} color="white" />
      }} />

      <BottomTab.Screen name='Produto' component={Produto} 
      options={{
        tabBarIcon:() =>
        <Feather name="shopping-cart" size={24} color="white" />
      }} />
    </BottomTab.Navigator>
  );
}