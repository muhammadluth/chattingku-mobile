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
import {StyleSheet, TouchableOpacity} from 'react-native';
export default class HeaderChat extends Component {
  render() {
    var username = this.props.username;
    var email = this.props.email;
    var avatar = this.props.avatar;
    var phoneNumber = this.props.phoneNumber;
    let Image_Http_URL = {
      uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${username}`,
    };
    return (
      <>
        <Header style={styles.header}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>

          <Body>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Profile', {
                    username: username,
                    email: email,
                    avatar: avatar,
                    phoneNumber: phoneNumber,
                  })
                }>
                <Thumbnail
                  style={{width: 40, height: 40}}
                  source={Image_Http_URL}
                />
              </TouchableOpacity>
              <View style={{paddingHorizontal: 10}}>
                <Text style={styles.textProfile}>{username}</Text>
                <Text style={{color: 'white', fontSize: 14}}>Online</Text>
              </View>
            </View>
          </Body>

          <Button transparent>
            <Icon name="more" />
          </Button>
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
