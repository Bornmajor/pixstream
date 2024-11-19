import { StyleSheet, Text, View,Pressable } from 'react-native'
import React, { useContext } from 'react'
import MyContext from '../context/context'
import AntDesign from '@expo/vector-icons/AntDesign';

const CircleButton = ({title}) => {

    const {appTheme} = useContext(MyContext);

  return (

    <Pressable  style={[styles.container,{backgroundColor:appTheme}]} onPress={() =>  console.log()}>
      <AntDesign name="like2" size={24} color="black" />
    </Pressable>
  )
}

export default CircleButton

const styles = StyleSheet.create({
    container:{
    width:'50px',
    height:'50px',
    borderRaduis:25,
    
    }
})