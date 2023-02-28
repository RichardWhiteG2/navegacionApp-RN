import 'react-native-gesture-handler';
import React from 'react'
//import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';


const App = () => {
  return (

    <NavigationContainer>
      
      {/* <StackNavigator/> */}
      <MenuLateralBasico/>
      
    </NavigationContainer>
    // <View>
    //   <Text> Navegacion Screen</Text>
    // </View>
  )
}
export default App;