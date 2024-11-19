// MyContext.js
import React, { createContext, useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ToastAndroid } from 'react-native';
import pexelapi from '../api/pexelapi';

const MyContext = createContext();

export const MyContextProvider = (props) => {
  const [appTheme, setAppTheme] = useState('#f9612f');
  const [textTheme,setTextTheme] = useState("black");
  const [isLoading,setIsLoading] = useState(true);
  const [isLogin,setIsLogin] = useState(false);
  const [hasInternet, setHasInternet] = useState(null);
   const [listCategories,setListCategories] = useState([]);
  const [currentIndex,setCurrentIndex] = useState(0);
  const [results,setResults] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showOnBoarding,setShowOnBoarding] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [usrMail,setUsrMail] = useState('');

  const getRandomCategory = () => {

    const randomIndex = Math.floor(Math.random() * listCategories.length);
    setSelectedCategory(listCategories[randomIndex]);
  

  };

  const retrieveCategory = async () => {
    try {
      // Retrieve the item from AsyncStorage
      const stringifiedArray = await AsyncStorage.getItem('categories');
      const array = JSON.parse(stringifiedArray);
  
      // Check if the retrieved value is a valid array and has length
      if (Array.isArray(array) && array.length > 0) {
        setListCategories(array);
        console.log(`Array: ${array}`);
  
        // Attempt to retrieve a random category and fetch new photos if successful

     
      } else {
        console.log('No stored categories');
        // If the array is empty or doesn't exist, show onboarding
        setListCategories(['nature','beauty','people','kids','animals','tech'])
        setShowOnBoarding(true);
      }
    } catch (error) {
      console.error('Error retrieving array:', error);
    }
  };
  
  

  // Function to toggle an item in the state array
  const toggleItem = (item) => {
    setSelectedItems((prevItems) => {
      // Use the toggle function to update the state
      if (prevItems.includes(item)) {
        // Remove the item if it exists
        return prevItems.filter((existingItem) => existingItem !== item);
      } else {
        // Add the item if it does not exist
        return [...prevItems, item];
      }
    });
  };

  useEffect(() =>{
  console.log(selectedItems)
  },[selectedItems])

  useEffect(()=>{
  if(!usrMail){
    setIsLogin(false);
  }
  },[usrMail])

  const getAuthData = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        // value previously stored
      setIsLogin(true);
      setUsrMail(value);

      
      }else{
        setIsLogin(false); 
      }
    } catch (e) {
      // error reading value
    }
  };
  
  useEffect(()=>{
  getAuthData();
  },[])

  useEffect(()=>{
  setIsLoading(false)
  },[isLogin])

  useEffect(()=>{
   if(!showOnBoarding){
    retrieveCategory();
   }
  },[showOnBoarding]);

  useEffect(()=>{
    getRandomCategory();
   
    console.log(`My list ${listCategories}`)
  },[listCategories])

  useEffect(()=>{
    getNewPhotos();

  },[selectedCategory])



  const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#f9612f', // Main theme color
        outline: '#f9612f', // Outline color for outlined buttons
    },
   };

const nextItem = ()=>{
  
  if(currentIndex !== 10){
    setCurrentIndex(currentIndex + 1); 
   
  }else{
    console.log('list elapsed') 
    showFeedback('Loading new posts');
    setCurrentIndex(0);
    getNewPhotos();
  }
  console.log(currentIndex);
}

const prevItem = ()=>{
 
  if(currentIndex !== 0){
    setCurrentIndex(currentIndex - 1); 
    
  }else{
    console.log('list elapsed') 
  }
  console.log(currentIndex);
}


const showFeedback = (msg) =>{
  ToastAndroid.showWithGravity(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
  );
}

const logout = async() =>{
  try{
await AsyncStorage.removeItem('email');
  }catch(err){
    console.log(err);
    showFeedback('Something went wrong')
  }
 setIsLogin(false);


}


  useEffect(() => {
    // Function to update the internet status
    const updateInternetStatus = (state) => {
      setHasInternet(state.isConnected && state.isInternetReachable);
    };

    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(updateInternetStatus);
    console.log('Network changed');

    // Check the initial connection status
    NetInfo.fetch().then(updateInternetStatus);

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const getNewPhotos = async() => {
    try{
      
     
     
     let response = await pexelapi.get(`/v1/search?query=${selectedCategory}&per_page=11`);
     setResults(response.data.photos); // Adjust response based on API structure
     console.log(response.data.photos);

     //console.log(results[0].src.original)
     console.log(`Selected cat:${selectedCategory}`);


     

    }catch(err){
      console.log(err)

    }

  }
    


  const [imageKey, setImageKey] = useState(0);

  const reloadImage = () => {
    setImageKey(prevKey => prevKey + 1); // Increment key to trigger re-render
  };



  return (
    <MyContext.Provider
      value={{
        appTheme,
        setAppTheme,
        textTheme,
        setTextTheme,
        hasInternet, setHasInternet,
        isLogin,setIsLogin,
        theme,getRandomCategory,selectedCategory,
        currentIndex,setCurrentIndex,
        nextItem,prevItem,
        getNewPhotos,results,imageKey,reloadImage,
        showFeedback,
        isLoading,setIsLoading,
        getAuthData,logout,
        showOnBoarding,setShowOnBoarding,
        toggleItem,selectedItems, setSelectedItems, retrieveCategory ,
        usrMail,setListCategories
   
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContext;
