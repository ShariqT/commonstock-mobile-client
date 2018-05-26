import React from 'react'
import NavHeader from '../navheader/NavHeader'
import { Container, Content, Text, H3, Thumbnail } from 'native-base'
import {Grid, Row, Col} from 'react-native-easy-grid'
import { primaryTextColor, centerStyle } from '../../styles/Styles'
import { connect } from 'react-redux'

const sellerProfile = class SellerProfile extends React.Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)

        this.store_id = this.props.navigation.getParam('store_id', 0)
        console.log("sellerProfile")

        this.sellerInfo = {
            name: "@SellerUsername",
            num_of_likes: 122,
            join_date: "3/4/19",
            pic: require("../../assets/logo.png")
        }
    }

    componentDidMount(){
        console.log("mounting sellerprofile")
        console.log(this.store_id)
    }
    render(){
        return(
            <Container style={{backgroundColor: primaryTextColor}}>
                <NavHeader hideCart title={this.title} backPage={null} />
                <Content style={{padding: 20}}>
                    <Grid>
                        <Row>
                            <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Thumbnail source={this.sellerInfo.pic} circle large />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={centerStyle}>
                                <H3>Username:</H3>
                            </Col>
                            <Col style={centerStyle}>
                                <Text>{this.sellerInfo.name}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={centerStyle}>
                                <H3>Number of Likes:</H3>
                            </Col>
                            <Col style={centerStyle}>
                                <Text>{this.sellerInfo.num_of_likes}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={centerStyle}>                                
                                <H3>Seller since:</H3>
                            </Col>
                            <Col style={centerStyle}>
                                <Text>{this.sellerInfo.join_date}</Text>
                            </Col>
                        </Row>
                        <Row>
                            
                        </Row>
                    </Grid>
                    
                </Content>
            </Container>
        )
    }
}

export default connect()(sellerProfile)