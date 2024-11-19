import React from 'react';
import { StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import MainNavigation from './navigation/MainNavigation';
import { MyContextProvider } from './context/context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <>
      <MyContextProvider>
        <StatusBar backgroundColor="#f9612f" />
        
        <GestureHandlerRootView>
          <MainNavigation />
        </GestureHandlerRootView>
        
      </MyContextProvider>
    </>
  );
}

// Register the root component for Expo
registerRootComponent(App);

export default App;
