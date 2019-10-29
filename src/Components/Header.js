import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Thumbnail,
  Row,
  Col,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
export default class Headers extends Component {
  render() {
    return (
      <>
        <Header style={styles.header}>
          <Right />
          <View style={{paddingVertical: 15, paddingHorizontal: 10}}>
            <Title style={styles.textProfile}>CHATTINGKU</Title>
          </View>
          <Body />

          <Left>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Left>
        </Header>
      </>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7d5fff',
  },
  textProfile: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
