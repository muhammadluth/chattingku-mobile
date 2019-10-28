import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Splashscreen from './Screens/Splashscreen';
import Home from './Screens/Home';
import Maps from './Screens/Maps';
import Profile from './Screens/Profile';
import ListCard from './Components/ListChat';

const MainNavigator = createStackNavigator(
  {
    // Login: {screen: Login},
    Splashscreen: {screen: Splashscreen},
    ListCard: {screen: ListCard},

    Index: createMaterialBottomTabNavigator({
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
            </View>
          ),
          activeColor: '#f0edf6',
          inactiveColor: '#226557',
          barStyle: {backgroundColor: '#3BAD87'},
        },
      },
      Maps: {
        screen: Maps,
        navigationOptions: {
          tabBarLabel: 'Maps',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-pin'} />
            </View>
          ),
          activeColor: '#f0edf6',
          inactiveColor: '#226557',
          barStyle: {backgroundColor: '#67baf6'},
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor}]}
                size={25}
                name={'ios-person'}
              />
            </View>
          ),
          activeColor: '#f0edf6',
          inactiveColor: '#226557',
          barStyle: {backgroundColor: '#ff7675'},
        },
      },
    }),
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splashscreen',
  },
);

export default createAppContainer(MainNavigator);
