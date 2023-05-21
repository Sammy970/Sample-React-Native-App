import * as React from 'react'
import { Text, View } from 'react-native'

export default function WelcomeScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ padding: 40, fontSize: 27, textAlign: 'center', color: 'white' }}>Welcome to Little Lemon!</Text>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 20, marginVertical: -18 }}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View >
    )

}