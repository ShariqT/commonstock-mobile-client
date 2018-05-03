import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Footer, FooterTab, Button, Text, StyleProvider  } from 'native-base'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Foodlist from './components/foodlist/Foodlist'
import UserProfile from './components/userprofile/UserProfile'
import CreditCardInfo from './components/creditcardinfo/CreditCardInfo'
import Checkout from './components/checkout/Checkout'
import SellerProfile from './components/sellerprofile/SellerProfile'
import { Provider } from 'react-redux'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import { secondaryColor, primaryTextColor, teritaryColor } from './styles/Styles'
import getTheme from './native-base-theme/components'
import platformTheme from './native-base-theme/variables/platform'
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/Root'
import thunk from 'redux-thunk'
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

const EntryNav = StackNavigator({
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

},{
  initialRouteName: 'Home'
})


const RootStack = StackNavigator({
  Entry:{
    screen: EntryNav
  },
  Checkout: {
    screen: Checkout,
  },
  SellerProfile: {
    screen: SellerProfile
  }
},{
  mode: 'modal'
});

const state = {
  cart: [],
  foodlist: [],
  access: false
}
const store = createStore(RootReducer, state, applyMiddleware(thunk))
console.log("the original state is --")
console.log(store)
export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}