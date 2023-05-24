import * as React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
            <Image
                style={headerStyles.image}
                source={require('../img/littleLemonHeader.png')}
                resizeMode='center'
                accessible={true}
                accessibilityLabel='Little Lemon Logo'
            />
            {/* <Text style={headerStyles.headerText}>Little Lemon</Text> */}
        </View>
    )
}

const headerStyles = StyleSheet.create({
    container: {
        // flex: 0.18,
        backgroundColor: '#F4CE14'
    },
    headerText: {
        marginTop: 30,
        marginBottom: -20,
        padding: 40,
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    image: {
        height: 100,
        width: 278,
        // margin: 8,
        marginTop: 45,
        // marginBottom: -40,
        marginLeft: 'auto',
        marginRight: 85,
    }
})