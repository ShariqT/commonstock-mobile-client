import React from 'react'
import { Badge, Icon, Button, Right, Text } from 'native-base'
import { teritaryColor, primaryTextColor } from '../../styles/Styles';
import { withNavigation } from 'react-navigation'

const cart = class ShoppingCart extends React.Component{
    goToCheckout(){
        this.props.navigation.navigate('Checkout')
    }
    render(){
        return(
            <Right>
                <Button transparent badge onPress={this.goToCheckout.bind(this)}>
                    <Badge primary>
                        <Text>2</Text>
                    </Badge>
                    <Icon name="basket" style={{color: primaryTextColor}} />
                </Button>
            </Right>
        )
    }
}

export default withNavigation(cart)