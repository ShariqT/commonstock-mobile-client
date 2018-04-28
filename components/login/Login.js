import React from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Content, Form, Item, Input, Button} from 'native-base'
import { Col, Row, Grid} from 'react-native-easy-grid'

const style = StyleSheet.create({
    container: {
        padding:20,
        backgroundColor: '#ff9d1c'
    },
    logoContainer:{
        flex:1,
        justifyContent: 'center'
    },
    loginContainer:{
        flex:.3,
        flexDirection:'row'
    },
    buttonStyle: {
        backgroundColor: '#795546',
        alignItems:'stretch',
        justifyContent:'center'
    },

    InputStyle: {
        color:'black',
        backgroundColor:'white',
        borderColor: 'white',
        height:30,
        width:200,
        justifyContent:'center',
        borderRadius: 5
    }
})

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.username = ''
        this.password = ''
    }

    static navigationOptions = {
        title: 'Login'
    }
    submitLogin(){

    }

    render(){
        return(
            <Container style={style.container}>
                <Content>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Input placeholder="Username" value={this.username} />
                    </Item>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Input placeholder="Password" secureTextEntry={true} value={this.password} />
                    </Item>           
                    <Button block style={{marginTop:20, backgroundColor:'#795546'}}>
                        <Text style={{color:'white'}}>Login</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}