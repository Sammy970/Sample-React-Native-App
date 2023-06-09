import * as React from 'react'
import { Text, View, ScrollView, StyleSheet, Image, useColorScheme, Pressable } from 'react-native'

export default function WelcomeScreen({ navigation }) {

    const colorScheme = useColorScheme();

    return (

        <ScrollView
            style={[
                welcomeStyles.container,
                colorScheme === 'light'
                    ? { backgroundColor: 'beige' }
                    : { backgroundColor: 'black' },
            ]}
        >
            <View style={welcomeStyles.innerContainer}>
                <Image
                    style={welcomeStyles.logo}
                    source={require("../img/littleLemonLogo.png")}
                    resizeMode='center'
                    accessible={true}
                    accessibilityLabel='Little Lemon Logo'
                />

                <Text style={welcomeStyles.logoText}>Little Lemon</Text>

            </View>

            <Text style={welcomeStyles.headerText}>
                Little Lemon, your local Mediterranean Bistro
            </Text>

            <Text style={welcomeStyles.bodyText}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>

            <View style={welcomeStyles.innerContainer}>
                <Pressable
                    onPress={() => { navigation.navigate('Login') }}>
                    <Text style={welcomeStyles.buttonText}>
                        Login
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => { navigation.navigate('Menu') }}>
                    <Text style={welcomeStyles.buttonText}>
                        View Menu
                    </Text>
                </Pressable>
            </View>

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
        // marginTop: 30,
        marginBottom: 20,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
        gap: 20,
    },
    logoText: {
        paddingRight: 10,
        paddingTop: 12,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
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
        width: 100,
        height: 90,
        marginTop: -10,
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
    },
    buttonText: {
        padding: 10,
        backgroundColor: 'beige',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 10,
        width: 170,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30,
    }
})