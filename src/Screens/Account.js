import React, {Component} from 'react';
import {
  Container,
  Content,
  ListItem,
  Text,
  CardItem,
  Card,
  View,
  Button,
  Icon,
  Left,
  Input,
} from 'native-base';
import {
  Image,
  Linking,
  ImageBackground,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import Header from '../Components/Header';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';

export default class Account extends Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
      ImageURL: '',
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref('User')
      .on('value', data => {
        let arraydata = [];
        data.forEach(child => {
          arraydata = [
            {
              _id: child.key,
              avatar: child.val().avatar,
              username: child.val().username,
              email: child.val().email,
              phoneNumber: child.val().phoneNumber,
              status: child.val().status,
            },
            ...arraydata,
          ];
        });
        this.setState({users: arraydata});
      });
  }

  logOut = async () => {
    await firebase.auth().signOut();
    await AsyncStorage.removeItem('isLogined');
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Container style={{backgroundColor: '#d2dae2'}}>
        <Header />
        <Content>
          <View>
            {this.state.users
              .filter(item => item._id === firebase.auth().currentUser.uid)
              .map(item => {
                let Image_Http_URL = {
                  uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${item.username}`,
                };
                console.log(item._id);
                return (
                  <>
                    <Card style={{borderRadius: 10}}>
                      <ImageBackground
                        source={require('../Assets/images/backgroud.png')}
                        style={{height: 180, width: '100%'}}>
                        <View style={styles.viewOverlay}>
                          <Image
                            style={{width: 120, height: 120, marginTop: 20}}
                            source={Image_Http_URL}
                          />
                          <Text
                            style={{
                              fontSize: 18,
                              fontWeight: 'bold',
                              paddingVertical: 20,
                              color: '#fff',
                            }}>
                            {item.username}
                          </Text>
                        </View>
                      </ImageBackground>
                    </Card>

                    <Card>
                      <View>
                        <CardItem>
                          <Text>Info dan Nomor Telepone</Text>
                        </CardItem>
                        <CardItem>
                          <Text>{item.status}</Text>
                        </CardItem>
                        <CardItem>
                          <View>
                            <Text
                              onPress={() =>
                                Linking.openURL(
                                  'mailto:muhammadluthfi059@gmail.com',
                                )
                              }>
                              {item.email}
                            </Text>
                            <Text style={{fontSize: 14}}>Email</Text>
                          </View>
                        </CardItem>
                        <CardItem>
                          <View>
                            <Text
                              style={{color: '#000'}}
                              onPress={() =>
                                Linking.openURL('tel:+6281392371406')
                              }>
                              {item.phoneNumber}
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
                                style={{backgroundColor: '#f0932b'}}
                                onPress={() =>
                                  this.props.navigation.navigate(
                                    'EditProfile',
                                    {
                                      userID: item._id,
                                      avatar: item.avatar,
                                      username: item.username,
                                      email: item.email,
                                      phoneNumber: item.phoneNumber,
                                      status: item.status,
                                    },
                                  )
                                }>
                                <Icon
                                  type={'Ionicons'}
                                  name="ios-cloud-upload"
                                />
                              </Button>
                              <View style={{paddingHorizontal: 10}}>
                                <Text>Update Profile</Text>
                              </View>
                            </Left>
                          </ListItem>
                        </CardItem>
                      </View>
                    </Card>
                  </>
                );
              })}
            <Card>
              <View style={{marginHorizontal: -20}}>
                <CardItem>
                  <ListItem icon>
                    <Left>
                      <Button
                        style={{backgroundColor: '#007AFF'}}
                        onPress={this.logOut}>
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
const styles = StyleSheet.create({
  cardView: {
    borderColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  viewOverlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
  },
});
