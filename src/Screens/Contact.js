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
      contact: [],
      search: '',
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

  render() {
    console.log(this.props.navigation.getParam('username'));
    return (
      <Container style={{backgroundColor: '#fff'}}>
        <Header {...this.props} />
        <View
          style={{
            paddingHorizontal: 10,
            borderRadius: 20,
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <Card style={{borderRadius: 10, width: '85%'}}>
            <View style={{flexDirection: 'row'}}>
              <Item style={{width: '100%', paddingHorizontal: 10}}>
                <Icon name="ios-search" />
                <Input
                  placeholder="Search"
                  onChangeText={Text => this.setState({search: Text})}
                  autoCapitalize="none"
                  value={this.state.search}
                />
              </Item>
            </View>
          </Card>
          <View style={{paddingVertical: 8}}>
            <Button
              transparent
              style={{padding: 5, marginHorizontal: 10, borderRadius: 10}}
              onPress={() => this.props.navigation.navigate('AddContact')}>
              <View style={{alignItems: 'center'}}>
                <Icon type="Ionicons" name="ios-person-add" />
              </View>
            </Button>
          </View>
        </View>
        <Content>
          <List>
            <List>
              <ListItem itemDivider style={{backgroundColor: '#dfe4ea'}}>
                <Text>KONTAK SAYA</Text>
              </ListItem>
            </List>
            {this.state.users
              .filter(item => item._id !== firebase.auth().currentUser.uid)
              .map(item => {
                let Image_Http_URL = {
                  uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${item.username}`,
                };
                console.log(item.status);
                return (
                  <View style={{marginTop: 2, marginLeft: 10, marginRight: 10}}>
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
                            status: item.status,
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
                            <Text note>{item.status}</Text>
                          </View>
                        </Body>
                      </ListItem>
                    </Card>
                  </View>
                );
              })}
          </List>
        </Content>
      </Container>
    );
  }
}
