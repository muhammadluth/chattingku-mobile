import React, {Component} from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Text,
  Card,
  Item,
  Icon,
  Button,
  Input,
  View,
} from 'native-base';
import Header from '../Components/Header';
import firebase from 'firebase';
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      avatar: '',
      username: '',
      email: '',
      phoneNumber: '',
      currentUser: firebase.auth().currentUser,
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
            },
            ...arraydata,
          ];
        });
        this.setState({users: arraydata});
      });
  }

  render() {
    return (
      <Container style={{backgroundColor: '#d2dae2'}}>
        <Header {...this.props} />
        <View
          style={{
            paddingHorizontal: 20,
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <Card style={{borderRadius: 20, width: '75%'}}>
            <View style={{flexDirection: 'row'}}>
              <Item style={{width: '100%', paddingHorizontal: 10}}>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
              </Item>
            </View>
          </Card>
          <View style={{paddingVertical: 8, paddingHorizontal: 30}}>
            <Button
              bordered
              danger
              style={{padding: 5, borderRadius: 10}}
              onPress={() => this.props.navigation.navigate('AddContact')}>
              <View style={{alignItems: 'center'}}>
                <Icon
                  style={{color: 'red'}}
                  type={'Ionicons'}
                  name={'ios-add-circle'}
                />
                <Text style={{fontSize: 11, fontWeight: 'bold'}}>CONTACT</Text>
              </View>
            </Button>
          </View>
        </View>
        <Content>
          <List>
            <List>
              <ListItem itemDivider>
                <Text>KONTAK SAYA</Text>
              </ListItem>
            </List>
            {this.state.users
              .filter(item => item._id !== this.state.currentUser.uid)
              .map(item => {
                let Image_Http_URL = {
                  uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${item.username}`,
                };
                return (
                  <Card style={{borderRadius: 10}}>
                    <ListItem
                      avatar
                      onPress={() =>
                        this.props.navigation.navigate('Profile', {
                          userID: item._id,
                          avatar: item.avatar,
                          username: item.username,
                          email: item.email,
                          phoneNumber: item.phoneNumber,
                        })
                      }>
                      <Left>
                        <Thumbnail
                          style={{marginVertical: -6}}
                          source={Image_Http_URL}
                        />
                      </Left>
                      <Body>
                        <View style={{paddingTop: 5}}>
                          <Text>{item.username}</Text>
                          <Text note>Di Kantor</Text>
                        </View>
                      </Body>
                    </ListItem>
                  </Card>
                );
              })}
          </List>
        </Content>
      </Container>
    );
  }
}
