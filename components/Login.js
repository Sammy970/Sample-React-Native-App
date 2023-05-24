import { StyleSheet, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform, Alert, Pressable } from 'react-native'
import { React, useState } from 'react'

const green = '#495E57';
const yellow = '#F4CE14';


export default function Login({ navigation }) {

    const [userID, onChangeUserID] = useState('');
    const [userPassword, onChangeUserPassword] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);

    return (

        <>

            <KeyboardAvoidingView
                style={loginStyles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <ScrollView keyboardDismissMode='on-drag'>
                    <Text style={loginStyles.headerText}>Welcome to Little Lemon!</Text>
                    {loggedIn && <Text style={loginStyles.regularText}>You are logged in!</Text>}

                    {!loggedIn && (
                        <>
                            <Text style={loginStyles.regularText}>Login</Text>
                            <TextInput
                                value={userID}
                                onChangeText={onChangeUserID}
                                placeholder='User Name / User ID'
                                clearButtonMode={'always'}
                                // onFocus={() => Alert.alert("First Name is focused")}
                                // onBlur={() => Alert.alert("First Name is now blurred")}
                                style={loginStyles.input}

                            />
                            <TextInput
                                value={userPassword}
                                secureTextEntry={true}
                                onChangeText={onChangeUserPassword}
                                placeholder='Password'
                                style={loginStyles.input}
                            />

                            <Pressable
                                style={loginStyles.button}
                                onPress={() => {
                                    setLoggedIn(!loggedIn);
                                }}
                            >
                                <Text style={loginStyles.buttonText}>Log In</Text>

                            </Pressable>

                            <Pressable
                                style={loginStyles.button}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Text style={loginStyles.buttonText}>Go Back</Text>

                            </Pressable>
                        </>
                    )}

                    {loggedIn && (
                        <Pressable
                            style={loginStyles.button}
                            onPress={() => {
                                setLoggedIn(!loggedIn);
                            }}

                        >
                            <Text style={loginStyles.buttonText}>Reset</Text>

                        </Pressable>
                    )}

                </ScrollView >


            </KeyboardAvoidingView >

        </>
    )
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: 'beige'
    },
    headerText: {
        fontSize: 36,
        padding: 30,
        textAlign: 'center',
        color: 'black',
    },
    regularText: {
        fontSize: 25,
        padding: 10,
        textAlign: 'center',
        color: 'black',
    },
    input: {
        fontSize: 20,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'beige',
        borderWidth: 2,
        borderRadius: 10,
        width: 250,
        // height: 40,
        textAlign: 'center',
        marginTop: 30,
    },
    button: {
        padding: 6,
        margin: 30,
        backgroundColor: 'beige',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 2,
        borderRadius: 14,
        width: '30%',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
})