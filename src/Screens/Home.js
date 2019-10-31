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
} from 'native-base';
import firebase from 'firebase';
import Header from '../Components/Header';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users: [],
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref('User')
      .on('value', data => {
        let arraydata = [];
        data.forEach(key => {
          arraydata.push(key);
        });
        this.setState({users: arraydata});
      });
  }
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <List>
            <FlatList
              data={this.state.users}
              keyExtractor={item => {
                let data = JSON.parse(JSON.stringify(item));
                return data.id;
              }}
              renderItem={({item, key}) => {
                let data = JSON.parse(JSON.stringify(item));
                let Image_Http_URL = {uri: data.avatar};
                return (
                  <Card style={{borderRadius: 20}}>
                    <ListItem
                      avatar
                      onPress={() =>
                        this.props.navigation.navigate('ListChat', {
                          userID: key,
                          avatar: data.avatar,
                          username: data.username,
                          email: data.email,
                          phoneNumber: data.phoneNumber,
                        })
                      }>
                      <Left>
                        <Thumbnail source={Image_Http_URL} />
                      </Left>
                      <Body>
                        <Text>{data.username}</Text>
                        <Text note>
                          Doing what you like will always keep you happy . .
                        </Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                        <Badge success style={{marginVertical: 5}}>
                          <Text>2</Text>
                        </Badge>
                      </Right>
                    </ListItem>
                  </Card>
                );
              }}
            />
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Logo: {
    width: 100,
    height: 100,
  },
});
