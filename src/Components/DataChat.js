import React, {Component} from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  View,
  Row,
  Col,
  Input,
  Footer,
  Left,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

export default class ListCard extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
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

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  render() {
    return (
      <>
        <View style={{flexDirection: 'row'}}>
          <Card>
            <CardItem style={styles.CardFrom}>
              <Text>Halo</Text>
            </CardItem>
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card>
            <CardItem style={styles.CardTo}>
              <Text>Wa'alaikumsalam</Text>
            </CardItem>
          </Card>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  CardFrom: {
    backgroundColor: '#3498db',
  },
  CardTo: {
    backgroundColor: '#ecf0f1',
  },
});
