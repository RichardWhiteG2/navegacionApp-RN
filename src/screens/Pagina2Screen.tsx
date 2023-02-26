
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'

import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {

  //Segunda forma de realizar la navegación

  const navigator = useNavigation()
  return (
    <View style={ styles.globalMargin}>
        <Text>Pagina2Screen</Text>

        <Button
          title='Ir a página 3'
          onPress={ () => navigator.navigate('Pagina3Screen' as never)}
        />

    </View>
  )
}
