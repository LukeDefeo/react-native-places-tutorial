

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { addPlace } from '../../store/actions/index'
import PlacesList from '../../components/PlacesList/PlacesList'
class FindPlaceScreem extends Component {

  onItemSelected = (key) => {
    const selPlace = this.props.places.find(place => {
      return place.key === key
    })
    this.props.navigator.push({
      screen: "react-native-places.PlaceDetailsScreen",
      title: selPlace.name,
      passProps: {
        place: selPlace
      }
    })
  }

  render() {
    return (
      <View>
        <PlacesList places={this.props.places} onItemSelected={this.onItemSelected} />
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreem)