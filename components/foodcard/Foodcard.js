import React from 'react'
import { Container, Content, Button, Card, Icon, CardItem, Body, Text, Left, Right } from 'native-base'
import { Image, StyleSheet } from 'react-native'

export default class Foodcard extends React.Component{
    constructor(props){
        super(props);
        console.log("insdie of foodcard")
        switch(props.url){
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
    render(){
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Text>{this.props.url}</Text>
                    </Left>
                    <Body>
                        <Button transparent style={{width:300}}>
                            <Text>@SellerUsername</Text>
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
                            <Text>112 likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>Buy</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}