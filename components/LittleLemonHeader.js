import * as React from 'react'
import { Text, View } from 'react-native'

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
            <Text style={{
                paddingTop: 63,
                textAlign: 'center',
                fontSize: 30,
                color: 'black',
                fontWeight: 'bold',
            }}>Little Lemon</Text>

            <Text style={{ textAlign: 'center', fontStyle: 'italic', fontSize: 17, }}>-- By Samyak Jain</Text>
        </View>
    )
}