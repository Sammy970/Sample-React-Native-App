import * as React from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'

export default function WelcomeScreen() {
    return (
        <ScrollView style={welcomeStyles.container}>

            <Image
                style={welcomeStyles.logo}
                source={require("../img/littleLemonHeader.png")}
                resizeMode='contain'
                accessible={true}
                accessibilityLabel='Little Lemon Logo'
            />

            <Text style={welcomeStyles.headerText}>
                Little Lemon, your local Mediterranean Bistro
            </Text>

            {/* <Text style={welcomeStyles.bodyText}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text> */}

            <Image
                style={welcomeStyles.image}
                source={require("../img/Picture1.png")}
                resizeMode='cover'
                accessible={true}
                accessibilityLabel='Food Picture 1'
            />

            <Image
                style={welcomeStyles.image}
                source={require("../img/Picture2.png")}
                resizeMode='cover'
                accessible={true}
                accessibilityLabel='Food Picture 2'
            />

            <Image
                style={welcomeStyles.image}
                source={require("../img/Picture3.png")}
                resizeMode='cover'
                accessible={true}
                accessibilityLabel='Food Picture 3'
            />

            <Image
                style={welcomeStyles.image}
                source={require("../img/Picture4.png")}
                resizeMode='cover'
                accessible={true}
                accessibilityLabel='Food Picture 4'
            />

        </ScrollView >
    )

}

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 30,
        marginBottom: 20,
    },
    headerText: {
        paddingVertical: 16,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: 'black'
    },
    bodyText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        padding: 20,
        marginVertical: 8
    },
    logo: {
        width: 300,
        height: 100,
        marginTop: 19,
        // marginBottom: -10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image: {
        height: 250,
        width: 350,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        borderWidth: 2
    }
})