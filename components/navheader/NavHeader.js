import React from 'react'
import { Header, Left, Right, Body, Button, Text, Icon, Badge } from 'native-base'
import { withNavigation } from 'react-navigation'
class NavHeader extends React.Component{
    constructor(props){
        super(props);
        this.backPage = props.backPage;
        this.title = props.title;
        console.log(this.backPage)
    }

    goBack(){
        this.props.navigation.navigate(this.backPage);
    }
    render(){
        let headerChildren = null;
        if (this.backPage !== undefined){
            headerChildren = <Button transparent onPress={this.goBack.bind(this)}>
            <Text>Back</Text>
        </Button>
        }
        return(
            <Header>
                <Left>
                    {headerChildren}
                </Left>
                <Body>
                    <Text>{this.title}</Text>
                </Body>
                <Right>
                    <Badge>
                        <Text>2</Text>
                    </Badge>
                    <Icon name="basket" />
                </Right>
            </Header>
        )
    }
}

export default withNavigation(NavHeader);