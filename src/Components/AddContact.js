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
import ListContact from './ListContact';
import firebase from 'firebase';
export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: '',
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref('User')
      .on('value', data => {
        let arraydata = [];
        data.forEach(child => {
          arraydata = [
            {
              _id: child.key,
              avatar: child.val().avatar,
              username: child.val().username,
              email: child.val().email,
              phoneNumber: child.val().phoneNumber,
              status: child.val().status,
            },
            ...arraydata,
          ];
        });
        this.setState({users: arraydata});
      });
  }

  render() {
    console.log(this.state.search);
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
          <View style={{paddingHorizontal: 30, marginBottom: 5}}>
            <Form>
              <Item regular style={styles.itemProduct}>
                <Icon name="ios-search" />
                <Input
                  placeholder="Please Input Email Your Friend"
                  onChangeText={Text => this.setState({search: Text})}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={this.state.search}
                />
                <Icon name="ios-person" />
              </Item>
            </Form>
          </View>
          <ListContact
            users={this.state.users}
            search={this.state.search}
            {...this.props}
          />
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
