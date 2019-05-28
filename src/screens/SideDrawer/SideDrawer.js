import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.logoutContainer}>
          <Icon name='ios-log-out' size={20} style={styles.logoutIcon}/>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width*.8,
    flex: 1,
    paddingTop: 20
  },
  logoutContainer: {
    backgroundColor: 'hsl(0, 50%, 50%)',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingVertical: 5,
  },
  logoutIcon: {
    marginRight: 10,
    color: '#eee'
  },
  logout: {
    color: '#EEE',
  }
})


export default SideDrawer;