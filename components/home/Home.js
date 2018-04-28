import React from 'react'
import { View, Image, StyleSheet} from 'react-native'
import { Container, Content, Button, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { mainButtonStyle, primaryColor, paddedContainer, logoContainer } from '../../styles/Styles'

export default class Home extends React.Component{
    static navigationOptions = {
        header: null
    }

    navigateScreen(screen){
        switch(screen){
            case 'login':
                this.props.navigation.navigate('Login')
            break;
            case 'signup':
                this.props.navigation.navigate('Signup')
            break;
        }
    }
    render(){
        
        return(
            <Container style={paddedContainer}>
                <Content >
                    <Row size={70} style={logoContainer}>
                        <Image source={require('../../assets/logo.png')} />
                    </Row>
                    <Row size={15} style={{paddingBottom:20}}>
                        <Col>
                        <Button block style={mainButtonStyle} onPress={this.navigateScreen.bind(this, 'login')}>
                            <Text color={primaryColor}> Login </Text>
                        </Button>
                        
                        </Col>
                        
                    </Row>
                    <Row size={15}>
                    <Col>
                        <Button block style={mainButtonStyle} onPress={this.navigateScreen.bind(this, 'signup')}>
                            <Text color={primaryColor}>Sign Up</Text>
                        </Button>
                        </Col>
                    </Row>
                </Content>
            </Container>
        )
    }
}