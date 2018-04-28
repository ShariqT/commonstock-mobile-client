import React from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Content, Form, Item, Input, Button} from 'native-base'
import { Col, Row, Grid} from 'react-native-easy-grid'
import { primaryColor, paddedContainer, inputField, secondaryColor } from '../../styles/Styles';
import NavHeader from '../navheader/NavHeader';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.username = ''
        this.password = ''
    }

    static navigationOptions = {
        title: 'Login',
        header: null
    }
    submitLogin(){

    }

    render(){
        return(
            <Container style={{backgroundColor: primaryColor}}>
                <NavHeader title="Login" backPage='Home' hideCart />
                <Content>
                    <Item underline style={inputField}>
                        <Input placeholder="Username" value={this.username} />
                    </Item>
                    <Item underline style={inputField}>
                        <Input placeholder="Password" secureTextEntry={true} value={this.password} />
                    </Item>           
                    <Button full style={{backgroundColor: secondaryColor}}>
                        <Text style={{color:'white'}}>Login To Your Account</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}