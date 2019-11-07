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
      userID: this.props.navigation.getParam('userID'),
      avatar: this.props.navigation.getParam('avatar'),
      username: this.props.navigation.getParam('username'),
      email: this.props.navigation.getParam('email'),
      phoneNumber: this.props.navigation.getParam('phoneNumber'),
      status: this.props.navigation.getParam('status'),
      uidON: firebase.auth().currentUser.uid,
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

  OnPressSend = messages => {
    for (let i = 0; i < messages.length; i++) {
      const {text, user} = messages[i];
      const message = {
        text,
        user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      };
      firebase
        .database()
        .ref(`Messages/${this.state.uidON}/${this.state.userID}/`)
        .push(message);
      firebase
        .database()
        .ref(`Messages/${this.state.userID}/${this.state.uidON}/`)
        .push(message);
    }
  };
  componentDidMount() {
    firebase
      .database()
      .ref(`Messages/${this.state.userID}/${this.state.uidON}/`)
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
    console.log(this.state.userID);
    return (
      <Container style={{backgroundColor: '#485460'}}>
        <Header
          {...this.props}
          username={this.state.username}
          email={this.state.email}
          avatar={this.state.avatar}
          phoneNumber={this.state.phoneNumber}
          status={this.state.status}
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
