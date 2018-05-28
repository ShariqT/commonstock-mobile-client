import React from 'react'
import {Container, Content, H1, Thumbnail} from 'native-base'
import {Text} from 'react-native'
import { Row, Col} from 'react-native-easy-grid'
import { primaryColor, primaryTextColor } from '../../styles/Styles'
import NavHeader from '../navheader/NavHeader'
import { BASE_URL } from '../../App'
export default class OrderInfo extends React.Component{
    constructor(props){
        super(props)
        this.order = this.props.navigation.getParam('order', {})
    }
    static navigationOptions ={
        header: null
    }
    render(){
        console.log("orderinfo order")
        console.log(this.order)
        let items = this.order.items.map((val) => {
            return (<Row>
                    <Thumbnail square small source={{uri: BASE_URL + val.photo}} />
                    <Text>{val.name} @ ${val.price} from { val.store.name}</Text>
                </Row>)
        })
        return(
            <Container style={{backgroundColor: primaryColor}}>
                <NavHeader title="Order Summary" backPage='Foodlist' hideCart />
                <Content style={{backgroundColor:primaryTextColor, padding:20}}>
                <H1>Thank you for your order!</H1>

                    <Row style={{marginTop:20}}>
                    <Text>Your order has been accepted and is being worked
                        on this minute.</Text>
                    </Row>
                    <Row>
                        <Col><Text style={{fontWeight:"bold"}}>Order Being Delivered To:</Text></Col>
                    <Col><Text>{this.order.delivery_address}</Text></Col>
                    </Row>
                    <Row style={{marginTop:20}}>
                        <Text style={{fontWeight:"bold"}}>Items</Text>
                    </Row>
                    
                    {items}
                    
                </Content>
            </Container>
        )
    }
}