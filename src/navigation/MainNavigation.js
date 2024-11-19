import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home';
import Auth from '../screen/Auth';
import Settings from '../screen/Settings';
import { useContext } from 'react';
import MyContext from '../context/context';
import Loader from '../components/Loader';


const MainNavigation = () => {
    const Stack = createStackNavigator();
    const {appTheme,isLogin,isLoading} = useContext(MyContext);

  return (
    <>
    {isLoading  ? 
    <Loader />

    :
     <NavigationContainer>
        <Stack.Navigator
    
        screenOptions={{
            headerStyle:{backgroundColor:appTheme,height:70},
            headerTintColor:'white',
            headerTitleStyle: {
              fontSize: 25, // Adjust the font size here
            },

        }}>
       {isLogin ?  (
        <>
         <Stack.Screen
            name='home'
            component={Home}
            options={{ 
              headerShown: false 
            }} // Hides the header for Details screen
            
            />
         <Stack.Screen
            name='settings'
            component={Settings}
            options={{
                title:'Settings',  
            }}
            
            /> 
        </>
       ):
         <Stack.Screen
            name='auth'
            component={Auth}
            options={{
               headerShown: false
             }} // Hides the header for Details screen
            
            />
        

       }
            

        
        </Stack.Navigator>
    </NavigationContainer> 
    
  }
   
    
    </>
   

  )
}

export default MainNavigation