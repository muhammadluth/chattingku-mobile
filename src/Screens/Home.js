import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Card,
  Badge,
  View,
  Input,
  Icon,
  Item,
} from 'native-base';
import firebase from 'firebase';
import Header from '../Components/Header';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users: [],
      currentUser: firebase.auth().currentUser,
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
            },
            ...arraydata,
          ];
        });
        this.setState({users: arraydata});
      });
  }

  getSearch = async () => {
    let search = this.state.search;
    await this.setState({search});
  };
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
          <Card style={{borderRadius: 20, width: '100%'}}>
            <View style={{flexDirection: 'row'}}>
              <Item style={{width: '100%', paddingHorizontal: 10}}>
                <Icon name="ios-search" />
                <Input
                  placeholder="Search"
                  onChangeText={Text => this.setState({search: Text})}
                  value={this.state.search}
                />
                <Icon name="ios-chatboxes" onPress={() => this.getSearch()} />
              </Item>
            </View>
          </Card>
        </View>
        <Content style={{backgroundColor: '#d2dae2'}}>
          <List>
            {this.state.users
              .filter(item => item._id !== this.state.currentUser.uid)
              .map(item => {
                let Image_Http_URL = {
                  uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${item.username}`,
                };
                return (
                  <Card style={{borderRadius: 20}}>
                    <ListItem
                      avatar
                      onPress={() =>
                        this.props.navigation.navigate('ListChat', {
                          // userID: i
                          avatar: item.avatar,
                          username: item.username,
                          email: item.email,
                          phoneNumber: item.phoneNumber,
                        })
                      }>
                      <Left>
                        <Thumbnail
                          style={{marginVertical: -8}}
                          source={Image_Http_URL}
                        />
                      </Left>
                      <Body>
                        <Text>{item.username}</Text>
                        <Text note>{item.phoneNumber}</Text>
                      </Body>
                      <Right>
                        <Text note style={{paddingVertical: 10}}>
                          3:43 pm
                        </Text>
                      </Right>
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
