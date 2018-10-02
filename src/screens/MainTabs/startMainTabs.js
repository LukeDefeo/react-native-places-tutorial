import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
export const startTabs = () => {
  const prom1 = Icon.getImageSource("md-map", 30)
  const prom2 = Icon.getImageSource("ios-share-alt", 30)

  const images =
    Promise
      .all([prom1, prom2])
      .then(images => {
        Navigation.startTabBasedApp({
          tabs: [
            {
              screen: "react-native-places.FindPlaceScreen",
              label: "Find Place",
              title: "Find Place",
              icon: images[0]
        },
            {
              screen: "react-native-places.SharePlaceScreen",
              label: "Share Place",
              title: "Share Place",
              icon: images[1]
            },
          ]
        })
      })

}
