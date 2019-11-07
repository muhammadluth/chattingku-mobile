import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Left,
  Right,
  Body,
  Title,
  Text,
  View,
  Label,
} from 'native-base';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.navigation.getParam('userID'),
      avatar: this.props.navigation.getParam('avatar'),
      username: '',
      email: this.props.navigation.getParam('email'),
      phoneNumber: '',
      status: '',
      uidON: firebase.auth().currentUser.uid,
      newUsername: '',
      newPhoneNumber: '',
      newStatus: '',
    };
  }
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({image: response.fileName});
      }
    });
  };
  handleEditProfile = () => {
    firebase
      .database()
      .ref(`User/${this.state.uidON}`)
      .update({
        avatar: `https://ui-avatars.com/api/?size=256&rounded=true&name=${this.state.username.replace(
          ' ',
          '+',
        )}`,
        username: this.state.username,
        phoneNumber: this.state.phoneNumber,
        status: this.state.status,
      });
    this.props.navigation.navigate('Account');
  };
  componentDidMount() {
    this.setState({username: this.props.navigation.getParam('username')});
    this.setState({phoneNumber: this.props.navigation.getParam('phoneNumber')});
    this.setState({status: this.props.navigation.getParam('status')});
  }
  onChangeTextStatus = status => this.setState({status});
  onChangeTextName = username => this.setState({username});
  onChangeTextPhone = phoneNumber => this.setState({phoneNumber});
  render() {
    console.log(this.state.status);
    console.log(this.state.phoneNumber);
    console.log(this.state.newUsername);
    return (
      <Container>
        <Header style={{backgroundColor: '#7158e2'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name={'arrow-back'} />
            </Button>
          </Left>
          <Body>
            <Title>Edit Account</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.handleChoosePhoto()}>
              <Image
                style={{width: 120, height: 120, marginVertical: 20}}
                source={{uri: this.state.avatar}}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Item regular style={{marginVertical: 5}}>
              <Input
                placeholder={this.state.username}
                onChangeText={this.onChangeTextName}
                value={this.state.username}
                keyboardType="default"
                autoCapitalize="none"
              />
              <Icon active name="ios-contact" />
            </Item>
            <Item regular style={{marginVertical: 5}}>
              <Input
                placeholder={this.state.phoneNumber}
                onChangeText={this.onChangeTextPhone}
                value={this.state.phoneNumber}
                keyboardType="default"
                autoCapitalize="none"
              />
              <Icon active name="ios-call" />
            </Item>
            <Item regular style={{marginVertical: 5}}>
              <Input
                placeholder={this.state.status}
                onChangeText={this.onChangeTextStatus}
                value={this.state.status}
                keyboardType="default"
                autoCapitalize="none"
              />
              <Icon active name="ios-paper" />
            </Item>
            <Text note style={{fontWeight: 'bold'}}>
              Note: Tolong isi semua form data,agar data lebih terupdate
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 10,
            }}>
            <Button
              info
              style={{borderRadius: 10}}
              onPress={() => this.handleEditProfile()}>
              <Text>Update Profile</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
