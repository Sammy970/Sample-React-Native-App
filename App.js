// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native';

// Importing Local Components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={{
        flex: 1,
        backgroundColor: '#495E57'
      }}>
        <LittleLemonHeader />
        <WelcomeScreen />

      </View >

      <View style={{ backgroundColor: '#495E57' }}>
        <Footer />
      </View>

    </>
  );
}