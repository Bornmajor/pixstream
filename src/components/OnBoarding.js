import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import CategoryBtn from './CategoryBtn';
import PixButton from './PixButton';
import MyContext from '../context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding = () => {
    const categories = ['nature','beauty','people','kids','animals','tech'];
    const {selectedItems, setSelectedItems,setShowOnBoarding ,setListCategories,showFeedback} = useContext(MyContext);

    const saveItems = async() =>{
      try{
        if(selectedItems.length !== 0 ){
          //if user select items
          const stringifiedArray = JSON.stringify(selectedItems);
          await AsyncStorage.setItem('categories', stringifiedArray);  
          setListCategories(selectedItems);

        }else{
          showFeedback('Select at least one content');
        }
     
       }catch(error){
        console.error('Error storing array:', error);
       }
     
       setTimeout(() => {
        setShowOnBoarding(false);
       }, 1000);
       
      //  retrieveCategory();
     
    }
    

    const skipItems = async() =>{
      try{
        const stringifiedArray = JSON.stringify(categories);
        await AsyncStorage.setItem('categories', stringifiedArray); 

       setShowOnBoarding(false);  

      }catch(err){


      }

    

    }

  return (
    <View style={styles.container}>

      <Text style={styles.header}>What type of content would be interested in</Text>

      <View style={{ flexDirection: 'row',flexWrap:'wrap',marginVertical:10 }}>

        <CategoryBtn title="Art" category="art"/>
        <CategoryBtn title="Tech" category="tech"/>
        <CategoryBtn title="Nature" category="nature"/>
        <CategoryBtn title="People" category="people"/>
        <CategoryBtn title="Kids"  category="kids"/>
        <CategoryBtn title="Animals"  category="animals"/>
        <CategoryBtn title="Beauty"  category="beauty"/>
        <CategoryBtn title="Cars"  category="cars"/>
        <CategoryBtn title="Food" category="food"/>
        <CategoryBtn title="Events" category="events"/>
        <CategoryBtn title="Sports" category="sports"/>

       
        
      </View>

      <View>
        <PixButton title="Save" action={() => saveItems()}  />
        <PixButton title="Skip" type="secondary" action={() => skipItems()}  />
      </View>


    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
        justifyContent:'space-between'
    },
    header:{
    fontSize:18,
    fontWeight:'600'
    }
})