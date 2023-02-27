import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={ styles.globalMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>
        <Button
          title='Ir a pagina 2'
          onPress={()=> navigation.navigate('Pagina2Screen')}
        />

        <Text>NAvegar con argumentos</Text>
        <TouchableOpacity
          onPress={()=> navigation.navigate('PersonaScreen', {
            //Enviar argumentos a la otra pantalla
            id:1,
            nombre:'Pedro'
          })
          }
        >
          <Text>Pedro</Text>
        </TouchableOpacity>
    </View>
  )
}
