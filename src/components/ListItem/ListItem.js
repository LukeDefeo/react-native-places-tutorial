import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image source={props.image } style={styles.image} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 5,
        marginBottom: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default listItem