import React, {Component} from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  View,
  Row,
  Col,
  Input,
  Footer,
  Left,
} from 'native-base';
import Header from './Header';
export default class ListCard extends Component {
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <View style={{flexDirection: 'row'}}>
            <Card>
              <CardItem>
                <Icon active name="logo-googleplus" />
                <Text>Google Plus</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Row>
              <Col size={20}>
                <Card>
                  <CardItem>
                    <Icon active name="logo-googleplus" />
                    <Text>Google Plus</Text>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
            </Row>
          </View>
        </Content>
        <Footer style={{backgroundColor: '#fff'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '100%'}}>
              <Row>
                <Col>
                  <Icon type="Ionicons" name="ios-add-circle" />
                </Col>
                <Col>
                  <Input
                    placeholder={'Ketik Pesan'}
                    style={{borderColor: 'black'}}
                  />
                </Col>
              </Row>
            </View>
          </View>
        </Footer>
      </Container>
    );
  }
}
