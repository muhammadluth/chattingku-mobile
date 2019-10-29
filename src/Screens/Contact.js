import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }
  render() {
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
            <Card>
              <ListItem
                avatar
                onPress={() => this.props.navigation.navigate('Profile')}>
                <Left>
                  <Thumbnail source={require('../Assets/images/profile.png')} />
                </Left>
                <Body>
                  <View style={{paddingTop: 10}}>
                    <Text>Muhammad Luthfi</Text>
                    <Text note>Di Kantor</Text>
                  </View>
                </Body>
              </ListItem>
            </Card>
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
