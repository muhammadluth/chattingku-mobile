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

export default class Register extends Component {
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
                    }}>
                    Sign Up
                  </Title>
                </View>
                <Form>
                  <View style={{marginLeft: 20, marginRight: 20}}>
                    <Item floatingLabel style={styles.Items}>
                      <Label>Username</Label>
                      <Input
                        // onChangeText={text => setEmail(text)}
                        // value={email}
                        keyboardType="default"
                        autoCapitalize="none"
                      />
                    </Item>
                    <Item floatingLabel style={styles.Items}>
                      <Label>No.Telephone</Label>
                      <Input
                        // onChangeText={text => setEmail(text)}
                        // value={email}
                        keyboardType="name-phone-pad"
                        autoCapitalize="none"
                      />
                    </Item>
                    <Item floatingLabel style={styles.Items}>
                      <Label>Email</Label>
                      <Input
                        // onChangeText={text => setEmail(text)}
                        // value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </Item>
                    <PasswordInputText
                    // onChangeText={text => setPassword(text)}
                    // value={password}
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
