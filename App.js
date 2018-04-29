import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Footer, FooterTab, Button, Text, StyleProvider  } from 'native-base'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Foodlist from './components/foodlist/Foodlist'
import UserProfile from './components/userprofile/UserProfile'
import CreditCardInfo from './components/creditcardinfo/CreditCardInfo'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import { secondaryColor, primaryTextColor, teritaryColor } from './styles/Styles';
import getTheme from './native-base-theme/components'
import platformTheme from './native-base-theme/variables/platform'

const UserAccountNav = StackNavigator({
  UserProfile:{
    screen: UserProfile
  },
  CreditCardInfo:{
    screen: CreditCardInfo
  }
},{
  headerMode:'none'
})



const MainApp = TabNavigator({
  Foodlist: {
    screen: Foodlist
  },
  UserNav: {
    screen: UserAccountNav
  }
},{
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  lazy: true,
  showIcon: true,
  tabBarComponent: props => {
    return (
      <StyleProvider style={getTheme(platformTheme)}>
        <Footer style={{backgroundColor: secondaryColor}}>
            <FooterTab >
                <Button
                    vertical
                    active={props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate("Foodlist")}>
                    <Icon name="restaurant" style={{color: primaryTextColor}} />
                    <Text style={{color: primaryTextColor}}>Eats</Text>
                </Button>
                <Button
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate("UserNav")}>
                    <Icon name="person" style={{color: primaryTextColor}} />
                    <Text style={{color: primaryTextColor}}>My Account</Text>
                </Button>
            </FooterTab>
        </Footer>
        </StyleProvider>
    );
}
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
