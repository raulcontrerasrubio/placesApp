import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';

// Register Screens
Navigation.registerComponent("placesApp.AuthScreen", () => AuthScreen);

// Start the App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'placesApp.AuthScreen',
    title: 'Login'
  }
})