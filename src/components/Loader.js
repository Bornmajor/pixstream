import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { useContext } from 'react'
import MyContext from '../context/context'
import { Image } from 'react-native'

const Loader = () => {

  const {appTheme} = useContext(MyContext);

  return (
    <View style={styles.container}>
         <Image style={styles.img} source={require('../assets/images/logo.png')} />
       <ActivityIndicator animating={true} color={appTheme} size={30} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    },
    img:{
        width:180,
        height:150,
        marginVertical:5
    }
})