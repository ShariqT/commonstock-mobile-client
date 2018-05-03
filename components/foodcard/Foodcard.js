import React from 'react'
import { connect } from 'react-redux'
import { Container, Content, Button, Card, Icon, CardItem, Body, Text, Left, Right } from 'native-base'
import { Image, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

const foodcardComp = class Foodcard extends React.Component{
    constructor(props){
        super(props);
        console.log("insdie of foodcard")
        switch(props.item.url){
            case 'Nachos':
                this.data = require('../../assets/Nachos.jpg')
            break;
            case 'Burrito':
                this.data = require('../../assets/California-Burrito.jpg')
            break;
            default:
                this.data = require('../../assets/logo.png')
            break;
        }
    }
    goToSellerProfile(name){
        this.props.navigation.navigate('SellerProfile', {seller: name})
    }

    render(){
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Text>{this.props.item.url}</Text>
                    </Left>
                    <Body>
                        <Button transparent style={{width:300}} onPress={this.goToSellerProfile.bind(this, this.props.item.username)}>
                            <Text>{this.props.item.username}</Text>
                        </Button>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image source={this.data} style={{ height:200, width: null, flex:1}} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon ios="ios-thumbs-up" android="thumbs-up" active />
                            <Text>{this.props.item.num_of_likes} likes</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent onPress={this.props.onAddCart}>
                            <Text>Add To Cart</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}

foodcardComp.propTypes = {
    item: PropTypes.object,
    onAddCart: PropTypes.func.isRequired
}

export default connect()(withNavigation(foodcardComp))
