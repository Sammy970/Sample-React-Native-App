import * as React from 'react'
import { View, Text, StyleSheet, SectionList } from 'react-native'

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
)

const Seperator = () => <View style={menuStyles.seperator} />

const Footer = () => <Text style={menuStyles.headerText}>--  End  --</Text>


const MenuItems = () => {
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

    const renderSectionHeader = ({ section: { title } }) => (
        <View style={menuStyles.sectionHeaderStyle}>
            <Text style={menuStyles.sectionHeader}>{title}</Text>
        </View>
    )

    return (

        <View style={menuStyles.container}>
            <SectionList
                sections={menuItemsToDisplay}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            // ItemSeparatorComponent={Seperator}
            // ListFooterComponent={Footer}
            />
        </View>

    );
};

const menuStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        paddingHorizontal: 45,
        paddingVertical: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: green
        // paddingLeft: 35,
    },
    headerText: {
        paddingVertical: 20,
        fontSize: 30,
        flexWrap: 'wrap',
        color: 'white',
        textAlign: 'center'
    },
    itemText: {
        color: yellow,
        fontSize: 20
    },
    seperator: {
        borderBottomWidth: 2,
        borderColor: 'white'
    },
    sectionHeader: {
        backgroundColor: yellow,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: 'black',
        color: '#333333',
        fontSize: 25,
        fontStyle: 'italic',
        flexWrap: 'wrap',
        textAlign: 'center'
    },
    sectionHeaderStyle: {
        padding: 30,
        width: 250,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

export default MenuItems;