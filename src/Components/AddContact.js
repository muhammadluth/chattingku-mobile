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
// import ImagePicker from 'react-native-image-picker';
// import Axios from 'axios';
// import {REACT_NATIVE_APP_API_BASEURL} from 'react-native-dotenv';
export default class AddContact extends Component {
  //   constructor(props) {
  //     super();
  //     this.state = {
  //       data: [],
  //       name: '',
  //       description: '',
  //       image: '',
  //       category: '',
  //       price: '',
  //       qty: '',
  //       limit: '6',
  //       page: '1',
  //       allPage: [],
  //       visible: false,
  //       collapsed: false,
  //       count: 0,
  //     };
  //   }
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
            <Title>ADD CONTACT</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            <Text style={styles.text}>ADD CONTACT</Text>
          </View>
          <View>
            {/* <Form onSubmit={this.handleAddProduct.bind(this)}> */}
            <Form>
              <Grid>
                <Row>
                  <Col style={styles.col}>
                    <Label>Name</Label>
                  </Col>
                  <Col style={{width: 5, marginTop: 12}}>
                    <Label>:</Label>
                  </Col>
                  <Col>
                    <Item regular style={styles.itemProduct}>
                      <Input
                      // onChangeText={Text => this.setState({name: Text})}
                      // value={this.state.name}
                      />
                    </Item>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.col}>
                    <Label>Email</Label>
                  </Col>
                  <Col style={{width: 5, marginTop: 12}}>
                    <Label>:</Label>
                  </Col>
                  <Col>
                    <Item regular style={styles.itemProduct}>
                      <Input
                      // onChangeText={Text => this.setState({category: Text})}
                      // value={this.state.category}
                      />
                    </Item>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.col}>
                    <Label>No.Telepone</Label>
                  </Col>
                  <Col style={{width: 5, marginTop: 12}}>
                    <Label>:</Label>
                  </Col>
                  <Col>
                    <Item regular style={styles.itemProduct}>
                      <Input
                      // onChangeText={Text => this.setState({price: Text})}
                      // value={this.state.price}
                      />
                    </Item>
                  </Col>
                </Row>
              </Grid>
              <View style={styles.viewButton}>
                <Button success style={styles.buttons}>
                  {/* //   onPress={() => this.handleAddProduct()}> */}
                  <Icon name="ios-paper" />
                  <Text>Save Contact</Text>
                </Button>
              </View>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  col: {
    marginTop: 12,
    width: 100,
    marginLeft: 10,
  },
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
  buttons: {
    margin: 20,
    position: 'relative',
    borderRadius: 10,
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#000',
    marginLeft: '25%',
  },
  itemProduct: {
    borderColor: '#bdc3c7',
    marginBottom: 5,
    marginRight: 5,
  },
  icons: {
    margin: 20,
  },
});