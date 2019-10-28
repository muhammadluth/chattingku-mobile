import React, {Component} from 'react';
import {Container, Header, Content, Button, Text} from 'native-base';
export default class Splashscreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button onPress={() => this.props.navigation.navigate('Index')}>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
