import React, {Component} from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  CardItem,
  Card,
  View,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Toast,
} from 'native-base';
import {Image, Linking, AsyncStorage} from 'react-native';
import Header from '../Components/Header';
import firebase from 'firebase';
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
        <Header />
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
            <Card>
              <View style={{marginHorizontal: -20}}>
                <CardItem>
                  <ListItem icon>
                    <Left>
                      <Button
                        style={{backgroundColor: '#007AFF'}}
                        onPress={() => this.props.navigation.goBack()}>
                        <Icon type={'Ionicons'} name="ios-log-out" />
                      </Button>
                      <View style={{paddingHorizontal: 10}}>
                        <Text>Kembali ke Maps</Text>
                      </View>
                    </Left>
                  </ListItem>
                </CardItem>
              </View>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}
