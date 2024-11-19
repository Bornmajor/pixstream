//rnfes
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import FullScreenViewer from '../components/FullScreenViewer'
import pexelapi from '../api/pexelapi'
import MyContext from '../context/context'
import { Snackbar } from 'react-native-paper'
import OnBoarding from '../components/OnBoarding'
import Loader from '../components/Loader'



const Home = () => {

  const {getRandomCategory,selectedCategory,currentIndex,getNewPhotos,results,hasInternet,reloadImage,showOnBoarding } =  useContext(MyContext);

  
;

//   useEffect(()=>{
//  console.log(selectedCategory)
//   },[selectedCategory]);

  

  return (
    <View style={{flex:1}}>

      {showOnBoarding ?
      
      <OnBoarding />
      :

      results.length !== 0 ?

      <>

     <FullScreenViewer
      
       mediaSource={results[currentIndex].src.original}
       photographer={results[currentIndex].photographer}
       category={selectedCategory}
       
       />


    <Snackbar
        visible={!hasInternet}
        onDismiss={reloadImage }
        action={{
          label: 'Reload',
          onPress: () => {
            // Do something
            reloadImage() 
          },
        }}>
        No internet
      </Snackbar> 
       
      </>
      
     

      :
      <Loader />

      }
      

 
   
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})