/* importar função default(chamadas de "não nomeadas") não precisa de {}, mas outras funções criadas precisa(chamadas de "nomeadas") */
import Home from './screens/home';
import Login from './screens/login';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Drawer() {

  const Drawer = createDrawerNavigator(); 

  return (
    /* Só um tipo de navigation container durante o projeto */
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Home' component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}