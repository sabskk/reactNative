/* importar função default(chamadas de "não nomeadas") não precisa de {}, mas outras funções criadas precisa(chamadas de "nomeadas") */
import Home from './screens/home';
import Login from './screens/login';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from '@expo/vector-icons/Feather';

export default function App() {

  const BottomTab = createBottomTabNavigator(); 

  return (
    /* Só um tipo de navigation container durante o projeto */
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='Login' screenOptions={{
        headerStyle: {backgroundColor: '#f99'},
        headerTintColor: 'white',
        tabBarActiveBackgroundColor: '#dda0dd'
      }}>
        <BottomTab.Screen name='Login' component={Login} 
        options={{
          tabBarIcon:() =>
          <Feather name="pen-tool" size={24} color="black" />
          }} />
        <BottomTab.Screen name='Home' component={Home} 
        options={{
          tabBarIcon:() =>
          <Feather name="home" size={24} color="black" />
          }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}