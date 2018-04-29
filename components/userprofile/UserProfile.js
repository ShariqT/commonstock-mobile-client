import React from 'react'
import { Container, Content, Text, Button, Item } from 'native-base'
import { Image } from 'react-native'
import { Row, Col } from 'react-native-easy-grid'
import NavHeader from '../navheader/NavHeader';

export default class UserProfile extends React.Component{
    static navigationOptions ={
        header: null
    }
    goToCreditCardScreen(){
        this.props.navigation.navigate('CreditCardInfo')
    }
    render(){
        return(
            <Container style={{backgroundColor: '#ff9d1c'}}>
                <NavHeader backPage="Foodlist" title="Profile" hideCart />
                <Content>
                    <Row style={{justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Username</Text>
                    </Row>
                    <Row style={{justifyContent:'center'}}>
                        <Image source={require('../../assets/logo.png')} style={{width:200, height:200, borderRadius:50, borderColor:'white', borderWidth:10}}/>
                    </Row>
                    <Row style={{paddingTop:20}}>
                        <Col>
                        <Button full style={{backgroundColor: '#795546'}} onPress={this.goToCreditCardScreen.bind(this)}>
                            <Text style={{color:'white'}}>Update Credit Card Info</Text>
                        </Button>
                        </Col>
                    </Row>
                </Content>
            </Container>
        )
    }
}