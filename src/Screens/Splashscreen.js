import React, {Component} from 'react';
import {View, Container} from 'native-base';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from 'react-native';
export default class Splashscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }
  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('isLogined');
      if (value !== null) {
        this.setState({token: value});
        console.log(value);
      }
      console.log(value);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      if (this.state.token === null) {
        this.props.navigation.navigate('Login');
      }
    }, 2000);
  }
  render() {
    console.log(this.state.token);
    return (
      <Container>
        {this.state.token !== null ? (
          this.props.navigation.navigate('Index')
        ) : (
          <View style={styles.content}>
            <ImageBackground
              source={require('../Assets/images/Logo.png')}
              style={styles.Logo}
            />
          </View>
        )}
      </Container>
    );
  }
}
const HEIGHT_DEVICE = Dimensions.get('window').height;
const WIDTH_DEVICE = Dimensions.get('window').width;
const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Logo: {
    width: 100,
    height: 100,
  },
});
