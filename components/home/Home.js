import React from 'react'
import { View, Image, StyleSheet} from 'react-native'
import { Container, Content, Button, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
const style = StyleSheet.create({
    container: {
        backgroundColor: '#ff9d1c',
        padding:10
    },
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 150
    },
    loginContainer:{
        flex:.3,
        flexDirection:'row'
    },
    buttonStyle: {
        backgroundColor: '#795546'
    },

    buttonStyleText: {
        color:'white'
    }
})
export default class Home extends React.Component{
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
            <Container style={style.container}>
                <Content >
                    <Row size={70} style={style.logoContainer}>
                        <Image source={require('../../assets/logo.png')} />
                    </Row>
                    <Row size={15} style={{paddingBottom:20}}>
                        <Col>
                        <Button block style={style.buttonStyle} onPress={this.navigateScreen.bind(this, 'login')}>
                            <Text> Login </Text>
                        </Button>
                        
                        </Col>
                        
                    </Row>
                    <Row size={15}>
                    <Col>
                        <Button block style={style.buttonStyle} onPress={this.navigateScreen.bind(this, 'signup')}>
                            <Text>Sign Up</Text>
                        </Button>
                        </Col>
                    </Row>
                </Content>
            </Container>
        )
    }
}