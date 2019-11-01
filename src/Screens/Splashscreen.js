import React, {Component} from 'react';
import {View, Container} from 'native-base';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
export default class Splashscreen extends Component {
  constructor(props) {
    super(props);

    this.state = {isLoading: true};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }
  render() {
    return (
      <Container>
        <View style={styles.content}>
          <ImageBackground
            source={require('../Assets/images/Logo.png')}
            style={styles.Logo}
          />
        </View>
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
