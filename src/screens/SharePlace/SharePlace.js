

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PlacesInput from '../../components/PlacesInput/PlacesInput'
import { connect } from 'react-redux'
import { addPlace } from '../../store/actions/index'
class SharePlaceScreem extends Component {

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    console.log(event)
    if (event.type === "NavBarButtonPress" && event.id === "side-draw-toggle") {
      this.props.navigator.toggleDrawer()
    }
  }
  render() {
    return (
      <View>
        <PlacesInput onPlaceAdded={this.props.onAddPlace} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placename) => dispatch(addPlace(placename))
  }
}

//the first arg is map state to props which we dont have
export default connect(null, mapDispatchToProps)(SharePlaceScreem)

