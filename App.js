// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native';

// Importing Local Components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <View style={{
        flex: 1,
        backgroundColor: '#495E57'
      }}>
        <LittleLemonHeader />
      </View >

      <View style={{ backgroundColor: '#495E57' }}>
        <Footer />
      </View>

    </>
  );
}