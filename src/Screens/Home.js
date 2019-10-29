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
  Badge,
} from 'native-base';
import Header from '../Components/Header';
export default class Home extends Component {
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
        <Content>
          <List>
            <Card>
              <ListItem
                avatar
                onPress={() => this.props.navigation.navigate('ListChat')}>
                <Left>
                  <Thumbnail source={require('../Assets/images/profile.png')} />
                </Left>
                <Body>
                  <Text>Muhammad Luthfi</Text>
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
