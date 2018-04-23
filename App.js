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
    screen: Foodlist
  },
  UserProfile: {
    screen: UserProfile
  }
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Foodlist') {
        iconName = 'ios-restaurant';
      } else if (routeName === 'Settings') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icon ios='ios-thumbs-up' active />;
    },
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  showLabel: true
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
