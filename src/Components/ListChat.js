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
import Header from './HeaderChat';
import DataChat from './DataChat';
import {GiftedChat} from 'react-native-gifted-chat';
export default class ListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     messages: [
  //       {
  //         _id: 1,
  //         text: 'Hello developer',
  //         createdAt: new Date(),
  //         user: {
  //           _id: 2,
  //           name: 'React Native',
  //           avatar: 'https://placeimg.com/140/140/any',
  //         },
  //       },
  //     ],
  //   });
  // }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {/* <Content>
          <DataChat />
        </Content>
        <Footer
          style={{
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            backgroundColor: '#bdc3c7',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '100%'}}>
              <Row>
                <Col size={2} style={{margin: 13}}>
                  <Icon type="Ionicons" name="ios-add-circle" />
                </Col>
                <Col size={18}>
                  <Input
                    placeholder={'Ketik Pesan'}
                    style={{borderColor: 'black', backgroundColor: '#ecf0f1'}}
                  />
                </Col>
                <Col size={2} style={{margin: 13}}>
                  <Icon type={'Ionicons'} name={'ios-send'} />
                </Col>
              </Row>
              <GiftedChat
                messages={this.props.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                  _id: 1,
                }}
              />
            </View>
          </View>
        </Footer> */}
      </Container>
    );
  }
}
