import React from 'react'
import { Container, Content, Text, Item, Input, Button, Picker } from 'native-base'

export default class CreditCardInfo extends React.Component{

    constructor(props){
        super(props)
        this.validYears = [];
        let year = new Date().getFullYear();
        for( let i = 0; i < 10; i++){
            this.validYears.push(year)
            year++;
        }
    }
    updateCreditInfo(){

    }
    render(){
        const pickerChildren = this.validYears.map((year) => {
            return(<Picker.Item label={year} value={year} />)
        }) 
        return(
            <Container style={{backgroundColor: '#ff9d1c', padding:20}}>
                <Content>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Input placeholder="Name of Credit Card" />
                    </Item>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Input placeholder="Card Number" secureTextEntry={true} />
                    </Item>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Input placeholder="CVC" />
                    </Item>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Input placeholder="Zip Code" />
                    </Item>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Picker 
                        mode="dropdown"
                        placeholder="Expiration Month">
                            <Picker.Item label="January" value="1" />
                            <Picker.Item label="Feburary" value="2" />
                            <Picker.Item label="March" value="3" />
                            <Picker.Item label="April" value="4" />
                            <Picker.Item label="May" value="5" />
                            <Picker.Item label="June" value="6" />
                            <Picker.Item label="July" value="7" />
                            <Picker.Item label="August" value="8" />
                            <Picker.Item label="September" value="9" />
                            <Picker.Item label="October" value="10" />
                            <Picker.Item label="November" value="11" />
                            <Picker.Item label="December" value="12" />
                        </Picker>
                    </Item>
                    <Item underline style={{backgroundColor:'white', paddingLeft:20}}>
                        <Picker 
                        mode="dropdown"
                        placeholder="Expiration Year">
                            
                            {pickerChildren}
                        </Picker>
                    </Item>
                    <Button block style={{marginTop:20, backgroundColor:'#795546'}} onPress={this.updateCreditInfo.bind(this)}>
                        <Text>UPDATE PAYMENT INFO</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}