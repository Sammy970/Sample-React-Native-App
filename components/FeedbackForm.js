import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import * as React from 'react'

export default function FeedbackForm() {

    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');

    return (
        <ScrollView style={fbStyles.headerContainer}>
            <Text style={fbStyles.headerText}>
                Hello how are you?
            </Text>
            <TextInput
                value={firstName}
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
                value={message}
                onChangeText={onChangeMessage}
                placeholder={'Message'}
                style={fbStyles.messageInput}
            />
        </ScrollView>
    )
}

const fbStyles = StyleSheet.create({
    headerContainer: {
        flex: 0.2,
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
    }
})