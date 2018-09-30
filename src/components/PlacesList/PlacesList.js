
import React from 'react'
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem.js'


const PlacesList = (props) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={({ item }) => (
        <ListItem
          placeName={item.name}
          image={item.image}
          onItemPressed={() => props.onItemDeleted(item.key)}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({

  listContainer: {
    width: "100%"
  }
});

export default PlacesList