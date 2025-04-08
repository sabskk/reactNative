import Home from './screens/home';
import Login from './screens/login';
import Feed from './screens/feed';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from '@expo/vector-icons/Feather';

export default function App() {

  const BottomTab = createBottomTabNavigator(); 

  return (
    /* Só um tipo de navigation container durante o projeto */
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='Feed' screenOptions={{
        headerStyle: {backgroundColor: 'red'},
        headerTintColor: 'white',
        tabBarActiveBackgroundColor: 'red'
      }}>
        <BottomTab.Screen name='Login' component={Login} 
        options={{
          tabBarIcon:() =>
          <Feather name="pen-tool" size={24} color="white" />
          }} />
          <BottomTab.Screen name='Home' component={Home} 
        options={{
          tabBarIcon:() =>
          <Feather name="home" size={24} color="white" />
          }} />
        <BottomTab.Screen name='Feed' component={Feed} 
        options={{
          tabBarIcon:() =>
          <Feather name="pen-tool" size={24} color="white" />
          }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}