/* importar função default(chamadas de "não nomeadas") não precisa de {}, mas outras funções criadas precisa(chamadas de "nomeadas") */
import Home from './screens/home';
import Login from './screens/login';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Stack() {

  /* quando importamos um pacote queremos utilizar uma função, prar não ter que chamar ela inteira toda vez criamos uma variável constante */
  const Stack = createStackNavigator();

  return (
    /* Só um tipo de navigation container durante o projeto */
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}