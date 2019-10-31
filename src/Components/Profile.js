import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Linking} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Icon,
  Button,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  View,
  ListItem,
  List,
} from 'native-base';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      avatar: this.props.navigation.getParam('avarar'),
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
            <View style={{paddingRight: 5, marginVertical: -3}}>
              <Card style={styles.cardView}>
                <View>
                  <ImageBackground
                    source={Image_Http_URL}
                    style={{height: 200, width: '100%'}}>
                    <View style={styles.viewOverlay}>
                      <Text style={styles.textProduct}>
                        {this.state.username}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </Card>
            </View>
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
                        Linking.openURL(`mailto:${this.state.email}`)
                      }>
                      {this.state.email}
                    </Text>
                    <Text style={{fontSize: 14}}>Email</Text>
                  </View>
                </CardItem>
                <CardItem>
                  <View>
                    <Text
                      onPress={() =>
                        Linking.openURL(`tel:${this.state.phoneNumber}`)
                      }>
                      {this.state.phoneNumber}
                    </Text>
                    <Text style={{fontSize: 14}}>Ponsel</Text>
                  </View>
                  <View style={{paddingHorizontal: 150}}>
                    <Button
                      transparent
                      onPress={() =>
                        this.props.navigation.navigate('ListChat', {
                          avatar: this.state.avatar,
                          username: this.state.username,
                          email: this.state.email,
                          phoneNumber: this.state.phoneNumber,
                        })
                      }>
                      <Icon
                        style={{color: '#000'}}
                        type="Ionicons"
                        name={'ios-chatboxes'}
                      />
                    </Button>
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
const styles = StyleSheet.create({
  cardView: {
    width: '100%',
    borderColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  textProduct: {
    justifyContent: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    right: -20,
    bottom: -70,
  },
  viewOverlay: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});
