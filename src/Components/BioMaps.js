import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  CardItem,
  Card,
  View,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Title,
  Header,
} from 'native-base';
import {Image, Linking} from 'react-native';
export default class BioMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      avatar: this.props.navigation.getParam('avatar'),
      username: this.props.navigation.getParam('username'),
      email: this.props.navigation.getParam('email'),
      phoneNumber: this.props.navigation.getParam('phoneNumber'),
    };
  }
  render() {
    console.log(this.state.username);
    let Image_Http_URL = {
      uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${this.state.username}`,
    };
    return (
      <Container>
        <Header style={{backgroundColor: '#7158e2'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name={'arrow-back'} />
            </Button>
          </Left>
          <Body>
            <Title>PROFILE</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            <Card style={{}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{width: 120, height: 120, marginTop: 20}}
                  source={Image_Http_URL}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    paddingVertical: 20,
                  }}>
                  {this.state.username}
                </Text>
              </View>
            </Card>
            <Card>
              <View>
                <CardItem>
                  <Text>Info dan Nomor Telepone</Text>
                </CardItem>
                <CardItem>
                  <Text>Di Kantor</Text>
                </CardItem>
                <CardItem>
                  <View>
                    <Text
                      onPress={() =>
                        Linking.openURL('mailto:muhammadluthfi059@gmail.com')
                      }>
                      {this.state.email}
                    </Text>
                    <Text style={{fontSize: 14}}>Email</Text>
                  </View>
                </CardItem>
                <CardItem>
                  <View>
                    <Text
                      style={{color: '#000'}}
                      onPress={() =>
                        Linking.openURL(`tel:${this.state.phoneNumber}`)
                      }>
                      {this.state.phoneNumber}
                    </Text>
                    <Text style={{fontSize: 14}}>Ponsel</Text>
                  </View>
                </CardItem>
              </View>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}
