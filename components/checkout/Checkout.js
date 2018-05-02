import React from 'react'
import { Container, Content, Button, Text, Thumbnail, Icon, List, ListItem, Left, Body, Right } from 'native-base'
import NavHeader from '../navheader/NavHeader';
import { FlatList} from 'react-native'
import { primaryColor, secondaryColor, primaryTextColor } from '../../styles/Styles'
import CheckoutItem from '../checkout-item-list/CheckoutItem'
import { connect } from 'react-redux'

const checkout = class Checkout extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.total = this.props.cart.reduce((acc, val) => {
            console.log(val.price) 
            return acc + val.price 
        }, 0)
    }

    _renderItems = ({item}) => {
        console.log("insdie of the flatlist")
        console.log(item);
        return (
           <CheckoutItem item={item} /> 
        );
    }
    render(){
        return(
            <Container style={{ backgroundColor: primaryColor}}>
                <NavHeader hideCart backPage='Foodlist' title="Checkout" />
                <Content style={{ backgroundColor: primaryTextColor}}>
                    
                    <FlatList data={this.props.cart} 
                    renderItem={this._renderItems}
                    style={{backgroundColor: primaryTextColor}}
                    />
                    <ListItem style={{backgroundColor:primaryTextColor}}>
                        <Body>
                        <Text>Total:</Text>
                        </Body>
                        <Right>
                            <Text note>${this.total}</Text>
                        </Right>
                    </ListItem>
                    <Button full style={{backgroundColor: secondaryColor }}>
                        <Text>Buy</Text>
                    </Button>
                </Content>
            </Container>   
        )
    }
}

const mapStateToProps = function(state){
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(checkout)