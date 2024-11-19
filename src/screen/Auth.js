import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput, IconButton,Button } from 'react-native-paper'
import MyContext from '../context/context'
import HorizontalRule from '../components/HorizontalRule'
import PixButton from '../components/PixButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Auth = () => {
    const {appTheme,showFeedback,getAuthData,showOnBoarding,setShowOnBoarding } = useContext(MyContext);
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    const [authContext,setAuthContext] = useState('login');
    const navigation = useNavigation();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const submitFormData = async() =>{
      console.log('Submitting data')
    if(email == ''){
        //email is empty
        showFeedback('Email required');
        
    }else if(pwd == ''){
        //pwd is empty
        showFeedback('Password required');
       
    }else if(!emailRegex.test(email)){
        showFeedback('Email not valid');
    }else if(email == ' ' || pwd == ' '){
        showFeedback('__spaces not allowed');
    }
    else{

       // console.log(email);
       
       console.log(email,pwd);
       //clear fields
       setEmail('');
       setPwd('');
       //store data
       await AsyncStorage.setItem('email', email);
       getAuthData();

       if(authContext === 'register') {
        setShowOnBoarding(true);
       }

       showFeedback('Login successfully')
       

    }
    }

  return (
    <View style={styles.container}>
        <View style={styles.coverImg}>
          <Image style={styles.img} source={require('../assets/images/pixstream_3.png')}  />
        </View>

         <View style={styles.content}>

        {authContext === 'login' ? 
         <Text style={styles.header}>Login to continue</Text> 
        :
        <Text style={styles.header}>Setup an account</Text> 
        }
            

        <TextInput
        mode='outlined'
        activeOutlineColor={appTheme}
        style={styles.inputText}
        label="Email"
        placeholder="Email address"
        value={email}
        onChangeText={(t) => setEmail(t)}
        />

        <TextInput
         mode='outlined'
        activeOutlineColor={appTheme}
         style={[styles.inputText,{marginBottom:10}]}
        label="Password"
        placeholder="Password"
        value={pwd}
        secureTextEntry
        onChangeText={(t) => setPwd(t)}
        right={
            <IconButton
            icon="eye"
            iconColor="black"
            size={20}
            onPress={() => console.log('Pressed')}
          />
        } 
        />

        

          <HorizontalRule text="New here" />
        
        {
          authContext === 'login' ? 
           <PixButton title="Login" action={()=> submitFormData()} />
          :
          <PixButton title="Create an account"  action={()=> submitFormData()} />
        }
       
         {
          authContext === 'login' ? 
          <PixButton title="Create an account" type="secondary" action={() => setAuthContext('register')} />
          
          :
        <PixButton title="Login" type="secondary" action={() => setAuthContext('login')}  />
         }
       






         </View>
      


    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
    container:{
     flex:1,
     
    },
    coverImg:{
    position:'relative',
    },
    img:{
    width:'100%',
    height:280,
    },
    header:{
     textAlign:'center',
     fontSize:20,
     fontWeight:600,
     marginVertical:5
    },
    content:{
        
     padding:15,
     
    },
    inputText:{
        marginVertical:5
    },
   
 
})