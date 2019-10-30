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
    };
  }

  componentDidMount() {
    // let dbRef = firebase.database().ref('User/');
    // dbRef.on('child_added', val => {
    //   let contact = val.val();
    //   contact.username = val.key;
    //   contact.avatar = val.key;
    //   this.setState(prevState => {
    //     return {
    //       users: [...prevState.users, contact],
    //     };
    //   });
    // });
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
    console.log(this.state.users);
    // let data = JSON.parse(JSON.stringify(item));

    return (
      <Container>
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
                <Text>M</Text>
              </ListItem>
            </List>
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
                  <Card>
                    <ListItem
                      avatar
                      onPress={() => this.props.navigation.navigate('Profile')}>
                      <Left>
                        <Thumbnail
                          style={{marginVertical: -6}}
                          source={Image_Http_URL}
                        />
                      </Left>
                      <Body>
                        <View style={{paddingTop: 5}}>
                          <Text>{data.username}</Text>
                          <Text note>Di Kantor</Text>
                        </View>
                      </Body>
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
