// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

// Instantiate Stack
const Stack = createNativeStackNavigator();


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
    <NavigationContainer>
      <View style={styles.container}>
        {/* <LittleLemonHeader /> */}

        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: { backgroundColor: '#333333' },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}

        >

          <Stack.Screen
            options={{
              title: 'Home',
              headerTitle: (props) => <LogoTitle {...props} />
            }}
            name="Welcome"
            component={WelcomeScreen} />

          <Stack.Screen options={{ title: 'Login' }} name="Login" component={Login} />

          <Stack.Screen options={{ title: 'Menu' }} name="Menu" component={MenuItems} />

        </Stack.Navigator>

        <Footer />
      </View>
    </NavigationContainer >
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