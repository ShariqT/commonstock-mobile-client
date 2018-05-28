import React from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Content, Form, Toast, Item, Input, Button} from 'native-base'
import { Col, Row, Grid} from 'react-native-easy-grid'
import { primaryColor, paddedContainer, inputField, secondaryColor } from '../../styles/Styles';
import NavHeader from '../navheader/NavHeader';
import { connect } from 'react-redux'
import { loginUser, resetError } from '../../actions'
import Loading from '../loading/Loading'

const loginComponent = class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''        
        }
        this.handlePass = this.handlePassChange.bind(this);
        this.handleUser = this.handleUserChange.bind(this);

    }

    static navigationOptions = {
        title: 'Login',
        header: null
    }

    componentDidMount(){
        if(this.props.auth.token){
            //we already have a valid token, so let's go the 
            //food list page
            this.props.navigation.navigate('Foodlist')
        }
    }
    componentDidUpdate(){
        console.log("compontentdid login moutn")
        console.log(this.props.error);
        if(this.props.error.message){
            Toast.show({text:this.props.error.message, duration:1400 })
            
        }
    }

    handlePassChange(text){
        this.setState({
            password: text
        })
        
    }

    handleUserChange(text){
        this.setState({
            email: text
        })        
    }
    submitLogin(){
        this.props.onSubmit(this.state);
        //Toast.show({text: "Logging in...", duration:300})
    }

    render(){

        return(
            <Container style={{backgroundColor: primaryColor}}>
                <NavHeader title="Login" backPage='Home' hideCart />
                <Content>
                    <Item underline style={inputField}>
                        <Input placeholder="Email" keyboardType="email-address" value={this.state.email} onChangeText={this.handleUser}/>
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
        access: state.access,
        error: state.error,
        auth: state.user
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        onSubmit: (usr) => {
            dispatch(loginUser(usr))
        },

        resetError: () =>{
            dispatch(resetError())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent)