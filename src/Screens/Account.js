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
export default class Account extends Component {
  onLogOut = async () => {
    logOut = async () => {
      firebase.auth().signOut();
      this.props.navigation.navigate('Login');
    };
  };
  render() {
    let email = AsyncStorage.getItem('email');
    console.log(email);
    return (
      <Container>
        <Header />
        <Content>
          <View>
            <Card>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{width: 120, height: 120}}
                  source={require('../Assets/images/profile.png')}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    paddingVertical: 20,
                  }}>
                  MUHAMMAD LUTHFI
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
                      muhammadluthfi059@gmail.com
                    </Text>
                    <Text style={{fontSize: 14}}>Email</Text>
                  </View>
                </CardItem>
                <CardItem>
                  <View>
                    <Text onPress={() => Linking.openURL('tel:+6281392371406')}>
                      +6281392371406
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
                        onPress={this.onLogOut}>
                        <Icon type={'Ionicons'} name="ios-log-out" />
                      </Button>
                      <View style={{paddingHorizontal: 10}}>
                        <Text>Log-out</Text>
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
