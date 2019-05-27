import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

// Register Screens
Navigation.registerComponent("placesApp.AuthScreen", () => AuthScreen);
Navigation.registerComponent('placesApp.SharePlaceScreen', () => SharePlaceScreen);
Navigation.registerComponent('placesApp.FindPlaceScreen', () => FindPlaceScreen);

// Start the App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'placesApp.AuthScreen',
    title: 'Login'
  }
})