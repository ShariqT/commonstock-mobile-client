import React from 'react'
import { Container, Grid, Row, Col, Content, Button, Item, Input, Text } from 'native-base'
import { formItemStyle, primaryColor, mainButtonStyle } from '../../styles/Styles'
import NavHeader from '../navheader/NavHeader'
export default class Signup extends React.Component {
    static navigationOptions = {
        title: 'Sign Up',
        header: null
    }
    processSignup(){
        this.props.navigation.navigate('Foodlist')
    }
    render(){
        return(
            <Container style={{backgroundColor: primaryColor}}>
                <NavHeader title="Get Started!" backPage='Home' hideCart />
                <Content>
                    
                    
                    <Item underline style={formItemStyle}>
                        <Input placeholder="Username" />
                    </Item>
                    <Item underline style={formItemStyle}>
                        <Input placeholder="Email" />
                    </Item>
                    <Item underline style={formItemStyle}>
                        <Input placeholder="Password" secureTextEntry={true} />
                    </Item>
                        
                    <Button full style={mainButtonStyle} onPress={this.processSignup.bind(this)}>
                        <Text>Sign Up</Text>
                    </Button>
                    
                    
                </Content>
            </Container>
        )
    }
}