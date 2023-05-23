// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Importing Local Components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <MenuItems /> */}
        {/* <WelcomeScreen /> */}
        <FeedbackForm />
      </View >

      <View style={{ backgroundColor: '#495E57' }}>
        {/* <Footer /> */}
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  }
})