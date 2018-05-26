import React from 'react'
import { ListItem, Left, Right, Body, Button, Icon, Thumbnail, Text, SwipeRow} from 'native-base'
import { primaryTextColor } from '../../styles/Styles'
import {withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeCartItem } from '../../actions'
import { BASE_URL } from '../../App'

const checkoutItemComp = class CheckoutItem extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.item = props.item
    }

    goToSellerPage(){
        this.props.navigation.navigate('SellerProfile', {seller: this.item.username})
    }
    render(){
        return(
            <SwipeRow
            rightOpenValue={-50}
            stopRightSwipe={-150}
            right={<Button danger onPress={this.props.onDelete}><Text>X</Text></Button>}
            body={<ListItem style={{backgroundColor: primaryTextColor }} avatar>
                
                 
                    <Thumbnail square small source={{uri: BASE_URL + this.photo}} />
                
                    <Text>{this.item.name}</Text>
                    <Button transparent onPress={this.goToSellerPage.bind(this)}>
                        <Text>{this.item.username}</Text>
                    </Button>
               
                    <Text note>${this.item.price}</Text>
                
            </ListItem>}
            />
        )
    }
}

checkoutItemComp.propTypes={
    item: PropTypes.object,
    onDelete: PropTypes.func
}




export default connect()(withNavigation(checkoutItemComp))
//export default withNavigation(checkoutItemComp)