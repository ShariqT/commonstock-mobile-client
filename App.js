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
import { TabNavigator, TabBarBottom, StackNavigator, addNavigationHelpers } from 'react-navigation'
import { secondaryColor, primaryTextColor, teritaryColor } from './styles/Styles'
import getTheme from './native-base-theme/components'
import platformTheme from './native-base-theme/variables/platform'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import RootReducer from './reducers/Root'
import thunk from 'redux-thunk'
import { connect } from 'react-redux'
import ApiMiddleware from './middleware'
import {cartReducer} from './reducers/Cart'
import accessReducer from './reducers/Access'
import {listReducer} from './reducers/List'
import { USER_ACCESS } from './actions/index'
import { NavigationActions } from 'react-navigation';

import { createReactNavigationReduxMiddleware, createReduxBoundAddListener} from 'react-navigation-redux-helpers'
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
const initialRoute = RootStack.router.getStateForAction(RootStack.router.getStateForAction('Entry'))

const navReducer = (state = initialRoute, action) => {
  let nextState;
  console.log("inside of nav reducer")
  switch(action.type){
    case USER_ACCESS:
      console.log("inside of user access")

      nextState = RootStack.router.getStateForAction( NavigationActions.navigate({routeName: 'Foodlist'}), state)
      console.log(nextState)
      break;
    default:
      nextState = RootStack.router.getStateForAction(action, state)
    break;

  }
  return nextState || state;
}
const appReducer = combineReducers({
  nav: navReducer,
  cart: cartReducer,
  foodlist: listReducer,
  access: accessReducer
})

const navMiddleware = createReactNavigationReduxMiddleware("root", state => state.nav)
const addListener = createReduxBoundAddListener("root")
const store = createStore(appReducer, applyMiddleware(ApiMiddleware, navMiddleware))
console.log("the original state is --")
console.log(store)

const RootNav = class RootNav extends React.Component{
  render(){
    return(<RootStack navigation={addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
      addListener
    })} />)
  }
}
const mapStateToProps = (state) => {
    return({
      nav: state.nav
    })
}
const RootNavWithState = connect(mapStateToProps)(RootNav)
export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <RootNavWithState />
      </Provider>
    )
  }
}