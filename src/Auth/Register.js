import React, {Component} from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Card,
  View,
  Title,
} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PasswordInputText from 'react-native-hide-show-password-input';
import firebaseSDK from '../Public/Firebase/config/firebaseSDK';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: '',
      phoneNumber: '',
      email: '',
      password: '',
      avatar: '',
    };
  }

  onPressCreate = async () => {
    try {
      const user = {
        username: this.state.name,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        password: this.state.password,
      };
      await firebaseSDK.createAccount(user);
    } catch ({message}) {
      console.log('create account failed. catch error:' + message);
    }
  };

  onChangeTextEmail = email => this.setState({email});
  onChangeTextPassword = password => this.setState({password});
  onChangeTextName = username => this.setState({username});
  onChangeTextPhone = phoneNumber => this.setState({phoneNumber});
  render() {
    return (
      <Container>
        <LinearGradient
          colors={['#7158e2', '#7d5fff', '#1B1464']}
          style={styles.linearGradient}>
          <Content>
            <View style={{alignItems: 'center', paddingTop: 50}}>
              <Image
                style={{width: 150, height: 150}}
                source={require('../Assets/images/Logo.png')}
              />
            </View>
            <View style={styles.Card}>
              <Card>
                <View>
                  <Title
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 28,
                      paddingBottom: 20,
                      paddingTop: 20,
                    }}>
                    Sign Up
                  </Title>
                </View>
                <Form>
                  <View style={{marginLeft: 20, marginRight: 20}}>
                    <Item floatingLabel style={styles.Items}>
                      <Label>Username</Label>
                      <Input
                        onChangeText={this.onChangeTextName}
                        value={this.state.username}
                        keyboardType="default"
                        autoCapitalize="none"
                      />
                    </Item>
                    <Item floatingLabel style={styles.Items}>
                      <Label>No.Telephone</Label>
                      <Input
                        onChangeText={this.onChangeTextPhone}
                        value={this.state.phoneNumber}
                        keyboardType="name-phone-pad"
                        autoCapitalize="none"
                      />
                    </Item>
                    <Item floatingLabel style={styles.Items}>
                      <Label>Email</Label>
                      <Input
                        onChangeText={this.onChangeTextEmail}
                        value={this.state.email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </Item>
                    <PasswordInputText
                      onChangeText={this.onChangeTextPassword}
                      value={this.state.password}
                    />
                  </View>
                  <View style={styles.ViewButton}>
                    <View style={styles.Button}>
                      <Button
                        style={{borderRadius: 10}}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text>Sign Up</Text>
                      </Button>
                    </View>
                  </View>
                </Form>
              </Card>
            </View>
          </Content>
        </LinearGradient>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Items: {
    marginBottom: 10,
  },
  Card: {
    elevation: 0,
    margin: 10,
  },
  ViewButton: {
    flexDirection: 'row',
  },
  Input: {
    borderColor: '#000',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  Button: {
    flex: 1,
    paddingVertical: 30,
    alignItems: 'center',
  },
});
