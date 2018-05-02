import React from 'react'
import { connect } from 'react-redux'
import { Container, Content, Button, Card, Icon, CardItem, Body, Text, Left, Right } from 'native-base'
import { Image, StyleSheet } from 'react-native'
import Foodcard from '../foodcard/Foodcard'
import Naimport { loadavg } from 'os';
vHeader from '../navheader/NavHeader'
import PropTypes from 'prop-types'
import { addItemToCart, getFoodlist } from '../../actions/index'
const foodlist = class Foodlist extends React.Component{
    

    static navigationOptions = {
        title: '',
        header: null
    }
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.load()
    }

    render(){
        return(
            <Container style={{ backgroundColor: '#ff9d1c'}}>
                <NavHeader title="Local Goodies" />
                <Content>
                    {this.props.data.map((val, idx) => {
                        return <Foodcard key={idx} item={val} onAddCart={() => this.props.addCartAction(val) }/>
                    })}
                </Content>
            </Container>
        )
    }
}

foodlist.propTypes = {
    addCartAction: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    load: PropTypes.func
}

const mapDispatchToProps = function(dispatch){
    return ({
            addCartAction: (item) => {
                    console.log("inside of cart action")
                    dispatch(addItemToCart(item))
                },
            

            load: ()=> {
                dispatch(getFoodlist())
            }
        })
}

const mapStateToProps = function(state){
    return ({
        data: state.foodlist 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(foodlist)