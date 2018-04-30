import React from 'react'
import { Header, Left, Right, Body, Title, Button, Text, Icon, Badge } from 'native-base'
import { withNavigation } from 'react-navigation'
import ShoppingCart from '../shoppingcart/ShoppingCart';
import {teritaryColor, secondaryColor, primaryTextColor } from '../../styles/Styles';
class NavHeader extends React.Component{
    constructor(props){
        super(props);
        this.backPage = props.backPage;
        this.title = props.title;
        console.log(this.backPage)
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
            cartElem = <ShoppingCart />
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

export default withNavigation(NavHeader);