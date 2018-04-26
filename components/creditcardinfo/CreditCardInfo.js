import React from 'react'
import { Container, Content, Text, Item, Input, Button } from 'native-base'

export default class CreditCardInfo extends React.Component{

    updateCreditInfo(){
        
    }
    render(){
        return(
            <Container style={{backgroundColor: '#ff9d1c', padding:20}}>
                <Content>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Input placeholder="Username" />
                    </Item>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Input placeholder="Email" />
                    </Item>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Input placeholder="Password" secureTextEntry={true} />
                    </Item>
                    <Button block style={{marginTop:20, backgroundColor:'#795546'}} onPress={this.updateCreditInfo.bind(this)}>
                        <Text>Sign Up</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}