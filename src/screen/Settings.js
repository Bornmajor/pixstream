import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import PixButton from '../components/PixButton';
import MyContext from '../context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';

const Settings = () => {
  const {appTheme,logout,setListCategories,usrMail,listCategories} = useContext(MyContext);


  const removeCategories = async () => {
    try {
      await AsyncStorage.removeItem('categories');
      console.log('Array removed successfully');
    } catch (error) {
      console.error('Error removing array:', error);
    } 
   
    logout();
    setListCategories([]);
  };

  useEffect(()=>{
    console.log(`My list ${listCategories}`)
  },[listCategories])



  const renderItem = ({ item }) => (
      <Text style={{textAlign:'center',marginHorizontal:3}}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      

   <View>
<MaterialCommunityIcons name="account-circle" size={150} color={appTheme} />
<Text style={{textAlign:'center'}}>{usrMail}</Text>
    
    </View> 

    <View>
      {listCategories  &&
      <FlatList
      data={listCategories}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      />
      }
    </View>


<View>
<PixButton title="Reset account"  action={() => removeCategories()}  />
<PixButton title="Logout"  action={() => logout()}  />  
</View>




    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center'

  }
})