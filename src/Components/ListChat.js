import React, {Component} from 'react';
import {Container} from 'native-base';
import Header from './HeaderChat';
import {GiftedChat} from 'react-native-gifted-chat';
import firebase from 'firebase';
export default class ListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Messages: [],
      TextMessages: [],
      avatar: this.props.navigation.getParam('avarar'),
      username: this.props.navigation.getParam('username'),
      email: this.props.navigation.getParam('email'),
      phoneNumber: this.props.navigation.getParam('phoneNumber'),
      userON: firebase.auth().currentUser.displayName,
      emailON: firebase.auth().currentUser.email,
      avatarON: firebase.auth().currentUser.photoURL,
      currentUser: firebase.auth().currentUser.uid,
    };
  }

  userData = () => {
    return {
      name: this.state.userON,
      email: this.state.emailON,
      avatar: this.state.avatarON,
      id: this.state.currentUser,
      _id: this.state.currentUser,
    };
  };

  OnPressSend = async messages => {
    for (let i = 0; i < messages.length; i++) {
      const {text, user} = messages[i];
      const message = {
        text,
        user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      };
      await firebase
        .database()
        .ref(`Messages/${this.state.userON}/${this.state.username}/`)
        .push(message);
      firebase
        .database()
        .ref(`Messages/${this.state.username}/${this.state.userON}/`)
        .push(message);
    }
  };
  componentDidMount() {
    firebase
      .database()
      .ref(`Messages/${this.state.username}/${this.state.userON}/`)
      .on('value', data => {
        var message = [];
        data.forEach(child => {
          message = [
            {
              _id: child.key,
              text: child.val().text,
              createdAt: child.val().createdAt,
              user: {
                _id: child.val().user._id,
                name: child.val().user.name,
              },
            },
            ...message,
          ];
        });
        this.setState({Messages: message});
      });
  }

  render() {
    console.log(this.state.userON);
    return (
      <Container>
        <Header
          {...this.props}
          username={this.state.username}
          email={this.state.email}
          avatar={this.state.avatar}
          phoneNumber={this.state.phoneNumber}
        />

        <GiftedChat
          messages={this.state.Messages}
          user={this.userData()}
          onSend={Messages => this.OnPressSend(Messages)}
        />
      </Container>
    );
  }
}
