import React from 'react'
import { Badge, Icon, Button, Right, Text } from 'native-base'
import { teritaryColor, primaryTextColor } from '../../styles/Styles';

export default class ShoppingCart extends React.Component{
    render(){
        return(
            <Right>
                <Button transparent badge>
                    <Badge primary>
                        <Text>2</Text>
                    </Badge>
                    <Icon name="basket" style={{color: primaryTextColor}} />
                </Button>
            </Right>
        )
    }
}