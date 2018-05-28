import React from 'react'
import { Container, Content, Button, Text, Grid, Row, Col, Thumbnail, Icon, List, ListItem, Left, Body, Right } from 'native-base'
import NavHeader from '../navheader/NavHeader';
import { FlatList} from 'react-native'
import { primaryColor, secondaryColor, primaryTextColor } from '../../styles/Styles'
import CheckoutItem from '../checkout-item-list/CheckoutItem'
import { connect } from 'react-redux'
import { removeCartItem, buyFood } from '../../actions'
import { withNavigation } from 'react-navigation'

const checkout = class Checkout extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        
    }

    onBuy(){
        this.props.navigation.navigate("Confirm")
    }

    _renderItems = ({item}) => {
        console.log("insdie of the flatlist")
        console.log(item);
        return (
           <CheckoutItem item={item} onDelete={()=> { this.props.onDeleteItem(item.key) }} /> 
        );
    }
    render(){
        this.total = this.props.cart.reduce((acc, val) => {
            console.log(val.price) 
            return acc + val.price 
        }, 0)
        return(
            <Container style={{ backgroundColor: primaryColor}}>
                <NavHeader hideCart backPage='Foodlist' title="Checkout" />
                <Content style={{ backgroundColor: primaryTextColor, paddingBottom:150}}>
                    <Row size={70}>
                    <Col>
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
                    </Col>
                    </Row>
                    <Row size={30}>
                    <Col>
                    <Button full style={{backgroundColor: secondaryColor }} onPress={this.onBuy.bind(this)}>
                        <Text>Buy</Text>
                    </Button>
                    </Col>
                    </Row>
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

const mapPropsToDispatch = function(dispatch){
    return ({
        onDeleteItem: (key) =>{
            return dispatch(removeCartItem(key))
        }

    })
}
export default connect(mapStateToProps, mapPropsToDispatch)(withNavigation(checkout))