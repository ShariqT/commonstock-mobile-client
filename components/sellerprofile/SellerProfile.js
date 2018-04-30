import React from 'react'
import NavHeader from '../navheader/NavHeader'
import { Container, Content, Text } from 'native-base'
export default class SellerProfile extends React.Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)

        this.title = this.props.navigation.getParam('seller', "No Seller")
    }
    render(){
        return(
            <Container>
                <NavHeader hideCart title={this.title} backPage={null} />
                <Content>

                </Content>
            </Container>
        )
    }
}