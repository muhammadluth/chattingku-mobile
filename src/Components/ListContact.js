import React, {Component} from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Text, View, Button} from 'native-base';
export default class ListContact extends Component {
  render() {
    return (
      <View style={{margin: 20}}>
        {this.props.users
          .filter(item => item.email === this.props.search)
          .map(item => {
            return (
              <Card>
                <View style={{alignItems: 'center'}}>
                  <CardItem>
                    <Image
                      style={{width: 100, height: 100}}
                      source={require('../Assets/images/profile.png')}
                    />
                  </CardItem>
                  <Text>{item.username}</Text>
                  <CardItem>
                    <Text>{item.email}</Text>
                  </CardItem>
                  <Text>{item.phoneNumber}</Text>
                  <CardItem style={{marginTop: 20}}>
                    <Button
                      danger
                      style={{
                        marginRight: 10,
                        width: 130,
                        justifyContent: 'center',
                      }}>
                      <Text>Cancel</Text>
                    </Button>
                    <Button
                      onPress={() =>
                        this.props.navigation.navigate('Contact', {
                          userID: item._id,
                          avatar: item.avatar,
                          username: item.username,
                          email: item.email,
                          phoneNumber: item.phoneNumber,
                          status: item.status,
                        })
                      }
                      info
                      style={{
                        marginLeft: 10,
                        width: 130,
                        justifyContent: 'center',
                      }}>
                      <Text>Add Contact</Text>
                    </Button>
                  </CardItem>
                </View>
              </Card>
            );
          })}
      </View>
    );
  }
}
