import React from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Content, Form, Item, Input, Button} from 'native-base'
import { Col, Row, Grid} from 'react-native-easy-grid'
import { primaryColor, paddedContainer, inputField, secondaryColor } from '../../styles/Styles';
import NavHeader from '../navheader/NavHeader';
import { connect } from 'react-redux'
import { loginUser } from '../../actions'

const loginComponent = class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handlePass = this.handlePassChange.bind(this);
        this.handleUser = this.handleUserChange.bind(this);
    }

    static navigationOptions = {
        title: 'Login',
        header: null
    }

    handlePassChange(text){
        this.setState({
            password: text
        })
        
    }

    handleUserChange(text){
        this.setState({
            username: text
        })        
    }
    submitLogin(){
        this.props.onSubmit(this.state);
    }

    render(){
        return(
            <Container style={{backgroundColor: primaryColor}}>
                <NavHeader title="Login" backPage='Home' hideCart />
                <Content>
                    <Item underline style={inputField}>
                        <Input placeholder="Username" value={this.state.username} onChangeText={this.handleUser}/>
                    </Item>
                    <Item underline style={inputField}>
                        <Input placeholder="Password" secureTextEntry={true} value={this.state.password} onChangeText={this.handlePass}/>
                    </Item>           
                    <Button full style={{backgroundColor: secondaryColor}} onPress={this.submitLogin.bind(this)}>
                        <Text style={{color:'white'}}>Login To Your Account</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) =>{
    return({
        access: state.access
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        onSubmit: (usr) => {
            dispatch(loginUser(usr))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent)