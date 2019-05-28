import {Navigation} from 'react-native-navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const startTabs = () => {
  const map = Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30);
  const share = Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share', 30);
  const menu = Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30);

  Promise.all([map, share, menu])
    .then(icons => {
      Navigation.startTabBasedApp({
        tabs: [
          {
            screen: 'placesApp.FindPlaceScreen',
            label: 'Find Place',
            title: 'Find Place',
            icon: icons[0],
            navigatorButtons: {
              leftButtons: [
                {
                  icon: icons[2],
                  id: 'sideDrawerToggle'
                }
              ]
            }
          },
          {
            screen: 'placesApp.SharePlaceScreen',
            label: 'Share Place',
            title: 'Share Place',
            icon: icons[1],
            navigatorButtons: {
              leftButtons: [
                {
                  icon: icons[2],
                  id: 'sideDrawerToggle'
                }
              ]
            }
          },
        ],
        drawer: {
          left: {
            screen: 'placesApp.SideDrawer'
          }
        }
      });
    })

};

export default startTabs;