import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='Pagina2Screen'
      screenOptions={{
        headerStyle:{
          elevation:0,
          shadowColor:'transparent' //This line for IOS
        },
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{title:"Pagina 1"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:"En 2 Pagina"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:"3 page"}} component={Pagina3Screen} />
    </Stack.Navigator>
  );
}