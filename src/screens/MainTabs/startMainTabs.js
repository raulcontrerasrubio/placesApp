import {Navigation} from 'react-native-navigation';

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'placesApp.FindPlaceScreen',
        label: 'Find Place',
        title: 'Find Place'
      },
      {
        screen: 'placesApp.SharePlaceScreen',
        label: 'Share Place',
        title: 'Share Place'
      },
    ]
  });
};

export default startTabs;