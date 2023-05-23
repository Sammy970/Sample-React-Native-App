import { StyleSheet, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import * as React from 'react'

export default function FeedbackForm() {

    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [phoneNumber, onChangePhoneNumber] = React.useState('');
    const [message, onChangeMessage] = React.useState('');

    return (
        <KeyboardAvoidingView
            style={fbStyles.headerContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView keyboardDismissMode='on-drag'>
                <Text style={fbStyles.headerText}>
                    Hello how are you?
                </Text>

                <Text style={fbStyles.bodyText}>
                    Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. We would
                    love to hear your experience with us!
                </Text>

                <TextInput
                    value={firstName}
                    secureTextEntry={false}
                    onChangeText={onChangeFirstName}
                    placeholder={'First Name'}
                    style={fbStyles.input}
                />
                <TextInput
                    value={lastName}
                    onChangeText={onChangeLastName}
                    placeholder={'Last Name'}
                    style={fbStyles.input}
                />
                <TextInput
                    value={phoneNumber}
                    onChangeText={onChangePhoneNumber}
                    placeholder={'Phone Number'}
                    keyboardType='phone-pad'
                    style={fbStyles.input}
                />
                <TextInput
                    value={message}
                    onChangeText={onChangeMessage}
                    placeholder={'Please Leave Feedback'}
                    multiline={true}
                    maxLength={250}
                    // autoComplete='birthdate-day'
                    style={fbStyles.messageInput}
                />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const fbStyles = StyleSheet.create({

    headerContainer: {
        flex: 1,
        padding: 20,
        // backgroundColor: 'beige',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 28,
        color: 'beige'
    },
    input: {
        padding: 4,
        height: 35,
        width: 350,
        borderRadius: 10,
        borderColor: '#EDEFEE',
        borderWidth: 1,
        backgroundColor: 'beige',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    messageInput: {
        padding: 4,
        height: 80,
        width: 350,
        borderRadius: 10,
        borderColor: '#EDEFEE',
        borderWidth: 1,
        backgroundColor: 'beige',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    bodyText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    }
})