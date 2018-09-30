import { Platform, StyleSheet, Text, View, TextInput, Button, Slider } from 'react-native';
export class VerticalSlider extends React.Component {

    render() {
      return (
        <View style={styles.container}>
          <Text>Hello</Text>
          <Slider
            maximumValue={100}
            minimumValue={0}
            value={50}
            minimumTrackTintColor="black"
            style={{
              transform: [{ rotate: '90deg' }]
            }}
          />
          <Text>Hello</Text>
          <View style={{ flex: 1 }}>
            <Text>Hello</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Slider
              maximumValue={100}
              minimumValue={0}
              value={50}
              minimumTrackTintColor="black"
              style={{ transform: [{ rotate: '90deg' }] }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Hello</Text>
          </View>
        </View>
      )
    }
  }