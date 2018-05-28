import React from 'react'
import { Container, Content, Button, Picker, ListItem, Thumbnail, Body, Left } from 'native-base'
import { Text, FlatList } from 'react-native'
import { Row } from 'react-native-easy-grid'
import {connect } from 'react-redux'
import { buyFood } from '../../actions'
import { primaryColor, primaryTextColor, secondaryColor } from '../../styles/Styles'
import NavHeader from '../navheader/NavHeader'
import { BASE_URL} from '../../App'

const confirmScreen = class Confirm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address:"",
            available_address:[]
        }
    }

    componentDidMount(){
        let addy = [
            "1400 Midvale Ave, Los Angeles, CA",
            "420 N Doheny St, Los Angeles, CA"
        ]

        this.setState({
            available_address:addy,
            address: addy[0]
        })
    }

    static navigationOptions = {
        header: null
    }

    addressChange(value){
        this.setState({
            address: value
        })
    }

    onConfirm(){
        let o = {
           order: this.props.order,
           address: this.state.address,
        }
        
        console.log("onconfirm the confirm.js")
        console.log(this.props.auth.token)
        this.props.onConfirmation(o, this.props.auth.token);
    }

    _createItem({item}){
        return(
            <ListItem avatar>
                
                <Thumbnail square small source={{uri: BASE_URL + item.photo}} />
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
            </ListItem>
        )
    }
    render(){
        console.log("the confirm js state is");
                        console.log(this.state.available_address);
        const child = this.state.available_address.map((v, idx)=> {
            console.log("ocnfig in picker item")
            return <Picker.Item label={v} value={v} /> 
        })
        return(
            <Container style={{backgroundColor: primaryColor}} >
                <NavHeader title="Confirm" backPage="Foodlist" hideCart />
                <Content>
                    <Row style={{backgroundColor:primaryTextColor}} >
                    <FlatList 
                        data={this.props.order}
                        renderItem={this._createItem.bind(this)}
                        style={{backgroundColor:primaryTextColor}}
                    />
                    </Row>
                    <Row style={{backgroundColor: primaryTextColor}}>
                    <Picker
                        iosHeader="Select Address"
                        mode="dropdown"
                        placeholder="Select Address"
                        selectedValue={this.state.address}
                        onValueChange={this.addressChange.bind(this)}
                        style={{backgroundColor:primaryTextColor}}
                        >
                    {child}
                    </Picker>
                    </Row>
                    <Button full onPress={this.onConfirm.bind(this)} style={{backgroundColor:secondaryColor}}>
                        <Text style={{color:primaryTextColor}}>Confirm Order</Text>
                    </Button>

                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        order: state.cart,
        auth: state.user
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        onConfirmation: (order, token) => {
            return dispatch(buyFood(order, token))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(confirmScreen)