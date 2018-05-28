import React from 'react'
import NavHeader from '../navheader/NavHeader'
import { Container, Content, Text, H3, Thumbnail, Toast } from 'native-base'
import {Grid, Row, Col} from 'react-native-easy-grid'
import { primaryTextColor, centerStyle } from '../../styles/Styles'
import { connect } from 'react-redux'
import { BASE_URL } from '../../App'
import { apiUrl } from '../../middleware'
import fetch from 'cross-fetch'

const sellerProfile = class SellerProfile extends React.Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)

        this.store_id = this.props.navigation.getParam('store_id', 0)
        console.log("sellerProfile")
        this.state = {}
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
        console.log(this.props.auth)
        const self = this;
        console.log("auth token is ")
            console.log(this.props.auth)
            fetch(apiUrl + "store/" + self.store_id,{headers: {
                'Authorization': 'Bearer ' + this.props.auth.token
            }}).then((response) => {
                console.log(response)
                if(response.status == 200){
                    console.log("inside of 200")
                    response.json().then((val) => {
                        console.log("unrolling val")
                        console.log(val)
                        self.setState(val);
                    })
                    
                }else{
                    console.log(response)
                    self.setState({
                        "error": true,
                        "message": "Could not locate vendor profile"
                    }, (state) => {
                        Toast.show(text=self.state.message, duration=1400)
                    })
                }
            }, (error) => {
                self.setState({
                    "error":true,
                    "message": error.message
                })
            })
        
        
    }
    render(){
        console.log("rendering seller profile state")
        console.log(this.state)
        return(
            <Container style={{backgroundColor: primaryTextColor}}>
                <NavHeader hideCart title={this.state.name} backPage={null} />
                <Content style={{padding: 20}}>
                    <Grid>
                        <Row>
                            <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Thumbnail source={{ uri: BASE_URL + this.state.photo}} circle large />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={centerStyle}>
                                <H3>Username:</H3>
                            </Col>
                            <Col style={centerStyle}>
                                <Text>{this.state.name}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <H3>Personal Note:</H3>
                            </Col>
                            
                        </Row>
                        <Row style={{paddingBottom: 20}}>
                            <Col>
                                <Text>{this.state.description}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={centerStyle}>
                                <Text>Address</Text>
                            </Col>
                            <Col style={centerStyle}>
                                <Text>{this.state.address}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={centerStyle}>
                                <H3>Opening Time:</H3>
                            </Col>
                            <Col style={centerStyle}>
                                <Text>{this.state.opening_time_hour + ":" + this.state.opening_time_minutes}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={centerStyle}>                                
                                <H3>Closing Time:</H3>
                            </Col>
                            <Col style={centerStyle}>
                                <Text>{this.state.closing_time_hour + ":" + this.state.closing_time_minutes}</Text>
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

const mapStateToProps = (state) => {
    return {
        auth: state.user
    }
}
export default connect(mapStateToProps)(sellerProfile)