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
import {StyleSheet, Image, AsyncStorage, ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PasswordInputText from 'react-native-hide-show-password-input';
import firebaseSDK from '../Public/Firebase/config/firebaseSDK';
import firebase from 'firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: '',
      email: '',
      password: '',
      avatar: '',
    };
  }

  onPressLogin = async () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    const response = firebaseSDK.login(
      user,
      this.loginSuccess,
      this.loginFailed,
    );
  };

  loginSuccess = () => {
    console.log('login successful, navigate to chat.');
    ToastAndroid.show('Login Success', ToastAndroid.TOP, ToastAndroid.SHORT);
    this.props.navigation.navigate('Index', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.avatar,
    });
    AsyncStorage.setItem('isLogined', firebase.auth().currentUser.uid);
  };

  loginFailed = () => {
    alert('Login failure. Please tried again.');
  };

  onChangeTextEmail = email => this.setState({email});
  onChangeTextPassword = password => this.setState({password});

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
              <Card style={{borderRadius: 20}}>
                <View>
                  <Title
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 28,
                      paddingBottom: 20,
                      paddingTop: 20,
                    }}>
                    Sign In
                  </Title>
                </View>
                <Form>
                  <View style={{marginLeft: 20, marginRight: 20}}>
                    <Item floatingLabel>
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
                        onPress={this.onPressLogin}>
                        <Text>Sign In</Text>
                      </Button>
                    </View>
                    <View style={styles.Button}>
                      <Button
                        bordered
                        primary
                        style={{borderRadius: 10}}
                        onPress={() =>
                          this.props.navigation.navigate('Register')
                        }>
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
    marginBottom: 5,
    marginTop: 5,
  },
  Card: {
    elevation: 0,
    margin: 10,
    borderRadius: 20,
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
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
});
