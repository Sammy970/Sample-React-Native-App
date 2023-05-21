import * as React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

export default function WelcomeScreen() {
    return (
        <View style={welcomeStyles.container}>

            <Text style={welcomeStyles.headerText}>
                Welcome to Little Lemon!
            </Text>

            <Text style={welcomeStyles.bodyText}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>

        </View >
    )

}

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        padding: 40,
        fontSize: 35,
        textAlign: 'center',
        color: '#EDEFEE'
    },
    bodyText: {
        textAlign: 'center',
        color: '#EDEFEE',
        fontSize: 24,
        padding: 20,
        marginVertical: 8
    }
})