import React, {Component} from 'react';
import {StyleSheet, AsyncStorage} from 'react-native';
import {
  Container,
  Content,
  Input,
  Text,
  Form,
  Label,
  Textarea,
  Header,
  Left,
  Button,
  Title,
  Icon,
  Body,
  View,
  Item,
  Right,
} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
export default class AddContact extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#7158e2'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name={'arrow-back'} />
            </Button>
          </Left>
          <Body>
            <Title>Add Contact</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            <Text style={styles.text}>Search Contact</Text>
          </View>
          <View style={{paddingHorizontal: 30}}>
            <Form>
              <Item regular style={styles.itemProduct}>
                <Icon name="ios-search" />
                <Input placeholder="Please Input Email Your Friend" />
                <Icon name="ios-person" />
              </Item>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 18,
    fontFamily: 'GothamRounded-Bold',
    fontWeight: 'bold',
    color: '#ff4757',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#000',
    marginLeft: '25%',
  },
  itemProduct: {
    borderColor: '#bdc3c7',
    borderRadius: 20,
  },
  icons: {
    margin: 20,
  },
});
