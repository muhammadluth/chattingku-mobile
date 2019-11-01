import React, {Component} from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
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
            <Button transparent onPress={() => alert('MORE')}>
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
