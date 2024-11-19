import { StyleSheet, Text, View,Dimensions,Image,Pressable } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { useVideoPlayer, VideoView } from 'expo-video'
import { Button } from 'react-native-paper'
import PixButton from './PixButton'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MyContext from '../context/context'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { PanGestureHandler } from 'react-native-gesture-handler'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'

const FullScreenViewer = ({mediaSource,photographer,category}) => {

  const {appTheme,currentIndex,nextItem,prevItem,theme,imageKey,showFeedback,getNewPhotos,retrieveCategory } = useContext(MyContext);
  const [isReady,setIsReady] = useState(true);
  const [isLiked,setIsLiked] = useState(false);
  const [isSaved,setIsSaved] = useState(false);
  const [showButton,setShowButton] = useState(true);
  const navigation = useNavigation();




      // Determine screen dimensions for full-screen rendering
  const { width, height } = Dimensions.get('window');

  const handleLoadStart = () => {
    setIsReady(false);
  };

  const handleLoadEnd = () => {
    setIsReady(true);
  };


  const handleGesture = ({ nativeEvent }) => {
    if (nativeEvent.translationY < -50) {
      console.log('Swiped Up');
      swipeUpAction();
    } else if (nativeEvent.translationY > 50) {
      console.log('Swiped Down');
      swipeDownAction();
    }
  };

  const swipeUpAction = () => {
    console.log('Swipe up action executed!');
    // Add your logic here
   nextItem();
    
  };

  const swipeDownAction = () => {
    console.log('Swipe down action executed!');
    // Add your logic here
     prevItem();
  };




  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
    <View style={[styles.container,{width,height}]} >
      <Pressable style={[styles.container,{position:'relative'}]}onPress={() => setShowButton(!showButton)}>

     


         {/* Render Picture or Video */}
         
   
            <Image
            key={imageKey}
            source={{ uri: mediaSource }} 
           style={[styles.media, { width, height }]}
           resizeMode="contain"
           onLoadStart={() => 
           {
            setIsReady(true)
           console.log('Started loading media');  
           }
            
          }
           onLoadEnd={() => {
            setIsReady(false)
            console.log('Media loaded')
           } }
           onError={() =>  showFeedback('Media failed to load')}
          //  onProgress={() => console.log('Image loading')}
        
          />
          
        
          { isReady && 
           <View style={{position:'absolute'}}>
              <ActivityIndicator animating={true} color={appTheme} size={30} />
            </View>
          }
         
        
      {showButton && 
      <>

     <View style={styles.textPlaceholder}>
       <Text style={{color:'white',fontSize:22}}>By {photographer}</Text>
       <Text style={{color:appTheme,marginVertical:5}}>{category}</Text>
     </View>
     

       <View style={[styles.skipBtn,{position:'absolute',right:'15',top:'15%'}]}>
         <Pressable onPress={() => navigation.navigate('settings')} >
         <MaterialCommunityIcons name="account-cog" size={25} color="black" />
         </Pressable>
      </View>


        <View style={[styles.skipBtn,{position:'absolute',right:'15',top:'40%'}]}>
         <Pressable onPress={() => setIsLiked(!isLiked)} >
         <Entypo name="thumbs-up" size={25} color={isLiked ? appTheme : 'black'} />
         </Pressable>
      </View>

       <View style={[styles.skipBtn,{position:'absolute',right:'15',top:'50%'}]}>
         <Pressable onPress={() => setIsSaved(!isSaved)}>
         <FontAwesome name="bookmark" size={25} color={isSaved ? appTheme : 'black'} />
         </Pressable>
       </View>

       <View style={[styles.skipBtn,{position:'absolute',right:'15',top:'60%'}]}>
         <Pressable >
         <FontAwesome name="share" size={24} color={appTheme} />
         </Pressable>
       </View>

       <View style={[styles.skipBtn,{position:'absolute',right:'15',top:'75%'}]}>
         <Pressable onPress={() => retrieveCategory()}>
                <MaterialCommunityIcons name="update" size={24} color="black" />
         </Pressable>
       </View>
      
      </>
      }     
    





     
    </Pressable>
       </View>
        </PanGestureHandler>
   
  )
}

export default FullScreenViewer;                      

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
      video: {
        width: 350,
        height: 275,
      },
      skipBtn:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        alignItems:'center',
        justifyContent:'center',


      },
      textPlaceholder:{
      backgroundColor:'rgba(0, 0, 0, 0.3)',
      padding:10,
      position:'absolute',
      left:'0',
      bottom:'10%',
      width:"100%"
      }

})