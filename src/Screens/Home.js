import React, {Component} from 'react';
import {TouchableOpacity, TouchableHighlight} from 'react-native';
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
  View,
  Grid,
  Row,
  Col,
} from 'native-base';
import Header from '../Components/Header';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <List>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ListCard')}>
              <Card>
                <ListItem avatar>
                  <Left>
                    <Thumbnail
                      source={require('../Assets/images/profile.png')}
                    />
                  </Left>
                  <Body>
                    <Text>Muhammad Luthfi</Text>
                    <Text note>
                      Doing what you like will always keep you happy . .
                    </Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
              </Card>
            </TouchableOpacity>
          </List>
        </Content>
      </Container>
    );
  }
}
