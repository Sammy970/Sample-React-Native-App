import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>Little Lemon</Text>
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
    }
})