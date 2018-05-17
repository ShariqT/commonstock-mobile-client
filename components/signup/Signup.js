import React from 'react'
import { Container, Grid, Row, Col, Content, Button, Item, Input, Text } from 'native-base'
import { formItemStyle, primaryColor, mainButtonStyle } from '../../styles/Styles'
import NavHeader from '../navheader/NavHeader'
import { connect } from 'react-redux'
import { signUpUser } from '../../actions/index'

const signup = class Signup extends React.Component {

    constructor(props){
        super(props)
        this.state = {username:'', password: ''}
    }
    static navigationOptions = {
        title: 'Sign Up',
        header: null
    }
    processSignup(){
        console.log(this.props.auth)
        this.props.onAccess({username: this.state.username, password: this.state.password})
        
        
    }
    
    
    render(){
        return(
            <Container style={{backgroundColor: primaryColor}}>
                <NavHeader title="Get Started!" backPage='Home' hideCart />
                <Content>
                    <Item underline style={formItemStyle}>
                        <Input placeholder="Username" value={this.state.username} />
                    </Item>
                    <Item underline style={formItemStyle}>
                        <Input placeholder="Email" />
                    </Item>
                    <Item underline style={formItemStyle}>
                        <Input placeholder="Password" secureTextEntry={true} value={this.state.password} />
                    </Item>
                        
                    <Button full style={mainButtonStyle} onPress={this.processSignup.bind(this)}>
                        <Text>Sign Up</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapPropsToDispatch = function(dispatch){
    return {
        onAccess: (usr) => {
            dispatch(signUpUser(usr))
        }
    }
}


const mapStateToProps = function(state){
    return {
        auth: state.access
    }
}
export default connect(mapStateToProps, mapPropsToDispatch)(signup)