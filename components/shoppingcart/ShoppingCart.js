import React from 'react'
import { Badge, Icon, Button, Right, Text } from 'native-base'
import { teritaryColor, primaryTextColor } from '../../styles/Styles';
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const cart = class ShoppingCart extends React.Component{
    goToCheckout(){
        this.props.navigation.navigate('Checkout')
    }
    render(){
        console.log("shoppng cart prop")
        console.log(this.props.cart.length)
        let count = this.props.cart.length
        return(
            <Right>
                <Button transparent badge onPress={this.goToCheckout.bind(this)}>
                    <Badge primary>
                        <Text>{count}</Text>
                    </Badge>
                    <Icon name="basket" style={{color: primaryTextColor}} />
                </Button>
            </Right>
        )
    }
}

cart.propTypes = {
    cart: PropTypes.array.isRequired
}
const mapStateToProps = function(state){
   return {
        cart: state.cart
    }
}
export default withNavigation(connect(mapStateToProps, null)(cart))