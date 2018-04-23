import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Foodlist from './components/foodlist/Foodlist'
import UserProfile from './components/userprofile/UserProfile'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'

const MainApp = TabNavigator({
  Foodlist: {
    screen: Foodlist,
    navigationOptions:{
      tabBarLabel: 'Food',
      tabBarIcon:<Icon ios='ios-thumbs-up' width={50} height={50} active /> 
    }
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: <Icon ios='ios-thumbs-down' width={50} height={50} />
    }
  }
},{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  showIcon: true
})

export default StackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Foodlist: {
    screen: MainApp
  }

})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9d1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
