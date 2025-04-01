/* importar função default(chamadas de "não nomeadas") não precisa de {}, mas outras funções criadas precisa(chamadas de "nomeadas") */
import Home from './screens/home';
import Login from './screens/login';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function BottomTab() {

  const BottomTab = createBottomTabNavigator(); 

  return (
    /* Só um tipo de navigation container durante o projeto */
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Login' component={Login}/>
        <BottomTab.Screen name='Home' component={Home}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}