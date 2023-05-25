// import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// Navigation Stuff
import { NavigationContainer } from '@react-navigation/native';

// Stack navigator
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons' //Icons for Tab Navigator

// Drawer Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';


// Importing Local Components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';
import Login from './components/Login';
import ImageTest from './components/ImageTest';

// Colors
const green = '#495E57';
const yellow = '#F4CE14';

// Instantiate Stack Nav
// const Stack = createNativeStackNavigator();

// Instantiate Tab Nav
const Tab = createBottomTabNavigator();

// INstantiate Drawer Nav
const Drawer = createDrawerNavigator();

const LogoTitle = () => {
  return (
    <>
      <Image
        source={require('./img/littleLemonLogo.png')}
        style={{
          height: 50,
          width: 50,
          resizeMode: 'contain',
          // alignSelf: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          margin: 9
        }}
      />
    </>
  )
}


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation
          initialRouteName='Welcome'
          screenOptions={{ drawerPosition: 'left' }}

        >
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Menu" component={MenuItems} />
        </Drawer.Navigator>
      </NavigationContainer>
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