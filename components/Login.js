import { StyleSheet, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { React, useState } from 'react'

const green = '#495E57';
const yellow = '#F4CE14';


export default function Login() {

    const [userID, onChangeUserID] = useState('')
    const [userPassword, onChangeUserPassword] = useState('')

    return (

        <KeyboardAvoidingView
            style={loginStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <ScrollView keyboardDismissMode='on-drag'>
                <Text style={loginStyles.headerText}>Welcome to Little Lemon!</Text>

                <Text style={loginStyles.regularText}>Login</Text>
                <TextInput
                    value={userID}
                    onChangeText={onChangeUserID}
                    placeholder='User Name / User ID'
                    clearButtonMode={'always'}
                    // onFocus={() => Alert.alert("First Name is focused")}
                    // onBlur={() => Alert.alert("First Name is now blurred")}
                    style={loginStyles.input}
                    keyboardType='phone-pad'

                />
                <TextInput
                    value={userPassword}
                    secureTextEntry={true}
                    onChangeText={onChangeUserPassword}
                    placeholder='Password'
                    style={loginStyles.input}
                />
            </ScrollView >

        </KeyboardAvoidingView>
    )
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    headerText: {
        fontSize: 36,
        padding: 30,
        textAlign: 'center',
        color: 'beige',
    },
    regularText: {
        fontSize: 25,
        padding: 10,
        textAlign: 'center',
        color: 'beige',
    },
    input: {
        fontSize: 20,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'beige',
        borderRadius: 10,
        width: 250,
        // height: 40,
        textAlign: 'center',
        marginTop: 30,
    }
})