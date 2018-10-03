

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { addPlace } from '../../store/actions/index'
import PlacesList from '../../components/PlacesList/PlacesList'
class FindPlaceScreem extends Component {
  render() {
    return (
      <View>
        <PlacesList places={this.props.places}  />
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