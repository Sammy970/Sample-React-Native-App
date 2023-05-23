// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Importing Local Components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';
import Login from './components/Login';
import ImageTest from './components/ImageTest';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {/* <LittleLemonHeader /> */}
        <WelcomeScreen />
        {/* <MenuItems /> */}
        {/* <FeedbackForm /> */}
        {/* <Login /> */}
        {/* <ImageTest /> */}
      </View >

      {/* <View style={styles.footerContainer}>
        <Footer />
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige'
    // backgroundColor: '#495E57'
  },
  footerContainer: { backgroundColor: '#333333' },
})