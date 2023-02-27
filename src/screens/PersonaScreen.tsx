import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

//Forma sucia de recuperar parametros
interface Props extends StackScreenProps<any,any>{};


// props: any , props: Props -> {}: Props
export const PersonaScreen = ({route}: Props) => {

    const params = route.params;


  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            {
                JSON.stringify(params, null,3)
            }
        </Text>
    </View>
  )
}
