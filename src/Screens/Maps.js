import React, {Component} from 'react';
import {Linking} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
import Header from '../Components/Header';
export default class Splashscreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button
            onPress={() =>
              Linking.openURL('https://goo.gl/maps/h6quTg9HKV2hUVSj8')
            }>
            <Text>Ini Maps</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
