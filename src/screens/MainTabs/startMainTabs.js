import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';



const startTabs = () => {
  const map = Icon.getImageSource('md-map', 30);
  const share = Icon.getImageSource('ios-share-alt', 30);

  Promise.all([map, share])
    .then(icons => {
      Navigation.startTabBasedApp({
        tabs: [
          {
            screen: 'placesApp.FindPlaceScreen',
            label: 'Find Place',
            title: 'Find Place',
            icon: icons[0]
          },
          {
            screen: 'placesApp.SharePlaceScreen',
            label: 'Share Place',
            title: 'Share Place',
            icon: icons[1]
          },
        ]
      });
    })

};

export default startTabs;