import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useContext } from 'react'
import MyContext from '../context/context'

const PixButton = ({type,title,action}) => {
    const {appTheme,theme} = useContext(MyContext);
  return (
    <View style={styles.container}>
        <Button
        theme={theme}
         mode={type === 'secondary' ? 'outlined': 'contained' }
         style={styles.btn}
         buttonColor={type === 'secondary' ? '' : appTheme}
         textColor={type === 'secondary' ? appTheme : 'white'}
         labelStyle={{fontSize:17}} 
         contentStyle={{borderRadius:5}}
         onPress={() => action()}
        >
          {title}
          </Button>
          
    </View>
  )
}

export default PixButton

const styles = StyleSheet.create({
    container:{
        marginVertical:5
    },
    btn:{
        marginVertical:5,
        borderRadius:5,
        
    },
 
})