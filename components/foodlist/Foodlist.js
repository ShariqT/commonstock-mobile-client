import React from 'react'
import { Container, Content, Button, Card, Icon, CardItem, Body, Text, Left, Right } from 'native-base'
import { Image, StyleSheet } from 'react-native'
import Foodcard from '../foodcard/Foodcard'
import NavHeader from '../navheader/NavHeader'
export default class Foodlist extends React.Component{
    state = {
        list: ['Nachos', 'Burrito']
    }

    static navigationOptions = {
        title: '',
        header: null
    }
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Container style={{ backgroundColor: '#ff9d1c'}}>
                            <NavHeader title="Local Goodies" />

                <Content>

                    {this.state.list.map((val, idx) => {
                        return <Foodcard key={idx} url={val} />
                    })}
                </Content>
            </Container>
        )
    }
}