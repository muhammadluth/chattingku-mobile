import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Splashscreen from './Screens/Splashscreen';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Maps from './Screens/Maps';
import Account from './Screens/Account';
import ListChat from './Components/ListChat';
import Profile from './Components/Profile';
import AddContact from './Components/AddContact';
import BioMaps from './Components/BioMaps';

const MainNavigator = createStackNavigator(
  {
    Splashscreen: {screen: Splashscreen},
    Login: {screen: Login},
    Register: {screen: Register},
    ListChat: {screen: ListChat},
    Profile: {screen: Profile},
    AddContact: {screen: AddContact},
    BioMaps: {screen: BioMaps},

    Index: createMaterialBottomTabNavigator({
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Chat',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor}]}
                size={25}
                name={'ios-chatboxes'}
              />
            </View>
          ),
          activeColor: '#f0edf6',
          inactiveColor: '#226557',
          barStyle: {backgroundColor: '#3BAD87'},
        },
      },
      Contact: {
        screen: Contact,
        navigationOptions: {
          tabBarLabel: 'Contact',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor}]}
                size={25}
                name={'ios-contacts'}
              />
            </View>
          ),
          activeColor: '#f0edf6',
          inactiveColor: '#226557',
          barStyle: {backgroundColor: '#7158e2'},
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
      Account: {
        screen: Account,
        navigationOptions: {
          tabBarLabel: 'Account',
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
