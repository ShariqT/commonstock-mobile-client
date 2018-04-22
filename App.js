import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import { StackNavigator } from 'react-navigation'

export default StackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
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
