import React, {Component} from 'react';
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
  Spinner,
} from 'native-base';
import firebase from 'firebase';
import Header from '../Components/Header';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users: [],
      search: '',
      loading: true,
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
        this.setState({users: arraydata, loading: false});
      });
  }

  getSearch = async () => {
    let search = this.state.search;
    await this.setState({search});
  };
  render() {
    return (
      <Container style={{backgroundColor: '#fff'}}>
        <Header {...this.props} />
        <Content style={{backgroundColor: '#fff'}}>
          {this.state.loading ? (
            <Spinner color="#7d5fff" />
          ) : (
            <List style={{margin: 15}}>
              {this.state.users
                .filter(item => item._id !== firebase.auth().currentUser.uid)
                .map(item => {
                  let Image_Http_URL = {
                    uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${item.username}`,
                  };
                  return (
                    <Card style={{borderRadius: 10, paddingVertical: 4}}>
                      <ListItem
                        avatar
                        onPress={() =>
                          this.props.navigation.navigate('ListChat', {
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
          )}
        </Content>
      </Container>
    );
  }
}
