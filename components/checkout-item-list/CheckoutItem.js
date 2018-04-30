import React from 'react'
import { ListItem, Left, Right, Body, Button, Icon, Thumbnail, Text} from 'native-base'
import { primaryTextColor } from '../../styles/Styles'
import {withNavigation } from 'react-navigation'


const checkoutItemComp = class CheckoutItem extends React.Component{
    constructor(props){
        super(props)

        switch(props.item.pic){
            case "Nachos": 
                this.pic = require("../../assets/Nachos.jpg")
            break;
            case "Burrito":
                this.pic = require("../../assets/California-Burrito.jpg")
            break;
        }
        this.item = props.item
    }

    goToSellerPage(){
        this.props.navigation.navigate('SellerProfile', {seller: this.item.seller})
    }
    render(){
        return(
            <ListItem style={{backgroundColor: primaryTextColor }} avatar>
                 <Left>
                    <Thumbnail square small source={this.pic} />
                </Left>
                <Body>
                    <Text>{this.item.name}</Text>
                    <Button transparent onPress={this.goToSellerPage.bind(this)}>
                        <Text>{this.item.seller}</Text>
                    </Button>
                </Body>
                <Right>
                    <Text note>${this.item.price}</Text>
                </Right>
                
            </ListItem>
        )
    }
}

export default withNavigation(checkoutItemComp)