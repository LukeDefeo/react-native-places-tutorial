import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'
//setup redux store
const store = configureStore()

//register screens

Navigation.registerComponent("react-native-places.AuthScreen", () => AuthScreen, store, Provider)
Navigation.registerComponent("react-native-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider)
Navigation.registerComponent("react-native-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider)
Navigation.registerComponent("react-native-places.PlaceDetailsScreen", () => PlaceDetailScreen, store, Provider)

//if  screen doesnt need redux you dont have to pass store and provider to register
Navigation.registerComponent("react-native-places.SideDrawerScreen", () => SideDrawer)

//start app

Navigation.startSingleScreenApp({
  screen: {
    screen: "react-native-places.AuthScreen",
    title: "Login"
  }
});

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// // import React, {Component} from 'react';
// // import {Platform, StyleSheet, Text, View} from 'react-native';



// // type Props = {};

// import React from 'react';
// import {connect} from 'react-redux'
// import { StyleSheet, View } from 'react-native';
// import PlacesInput from './src/components/PlacesInput/PlacesInput.js';
// import PlacesList from './src/components/PlacesList/PlacesList.js';
// import tajImage from './src/assets/taj.jpg'
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail.js';
// import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'
// class App extends React.Component {

//   onPlaceAdded = (placeName) => {
//     this.props.onAddPlace(placeName)
//   }

//   onItemSelected = (key) => {
//     this.props.onSelectPlace(key)
//   }

//   onPlaceDeleted = () => {
//     this.props.onDeletePlace()
//   }

//   onModalClosed = () => {
//     this.props.onDeselectPlace()
//   }

//   render() {

//     return (
//       <View style={styles.container}>
//         <PlaceDetail
//          place={this.props.selectedPlace}
//          onItemDeleted={this.onPlaceDeleted}
//          onModalClosed={this.onModalClosed} />
//         <PlacesInput onPlaceAdded={this.onPlaceAdded} />
//         <PlacesList
//           places={this.props.places}
//           onItemSelected={this.onItemSelected} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 40,
//     backgroundColor: '#fff',
//     justifyContent: 'flex-start',
//     alignItems: 'center'
//   }
// });

// const mapStateToProps = (state) => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)