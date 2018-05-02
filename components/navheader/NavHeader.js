import React from 'react'
import { Header, Left, Right, Body, Title, Button, Text, Icon, Badge } from 'native-base'
import { withNavigation } from 'react-navigation'
import ShoppingCart from '../shoppingcart/ShoppingCart';
import {teritaryColor, secondaryColor, primaryTextColor } from '../../styles/Styles';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const navheader  = class NavHeader extends React.Component{
    constructor(props){
        super(props);
        this.backPage = props.backPage;
        this.title = props.title;
    }

    goBack(){
        if (this.backPage !== null){
            this.props.navigation.navigate(this.backPage);
        }else{
            this.props.navigation.goBack()
        }
    }
    render(){
        let headerChildren = null;
        if (this.backPage !== undefined){
            headerChildren = <Left><Button transparent onPress={this.goBack.bind(this)}>
            <Icon name="arrow-back" style={{color:primaryTextColor}} />
        </Button></Left>
        }
        let cartElem = null;
        if (!this.props.hideCart){
            cartElem = <ShoppingCart cart={this.props.cart} />
        }else{
            cartElem = <Right></Right>
        }
        return(
            <Header style={{backgroundColor: teritaryColor}}>
                    {headerChildren}
                <Body>
                    <Title style={{color:primaryTextColor}}>{this.title}</Title>
                </Body>
                {cartElem}
            </Header>
        )
    }
}
navheader.propTypes = {
    cart: PropTypes.array
}
const mapPropsToState = function(state){
    return {
        cart: state.cart
    }
}
export default connect(mapPropsToState)(withNavigation(navheader))
//export default withNavigation(navheaders);