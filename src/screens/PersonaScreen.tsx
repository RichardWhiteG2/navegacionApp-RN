import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'

//Referencia1
// interface RouterParams {
//   id: number;
//   nombre: string
// }

//Forma sucia de recuperar parametros
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};


// props: any , props: Props -> {}: Props
export const PersonaScreen = ({route, navigation}: Props) => {

  //No es correcto realizar la siguiente linea para colocar el tipo. Referencia1
    //const params = route.params as RouterParams;
    const params = route.params;

    useEffect(()=>{

      navigation.setOptions({
        title: params!.nombre
      })

    },[])
    

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
