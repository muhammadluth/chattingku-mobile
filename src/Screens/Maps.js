import React, {Component} from 'react';
import {Container, View, Button, Text, Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import MapView, {Polyline, Marker} from 'react-native-maps';
import {TouchableOpacity} from 'react-native';
import Header from '../Components/Header';
// import Polyline from '@mapbox/polyline';
import firebase from 'firebase';
import Geolocation from '@react-native-community/geolocation';

class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords: [],
      x: 'false',
      cordLatitude: -6.23,
      cordLongitude: 106.75,
      userON: firebase.auth().currentUser.displayName,
      userId: '',
    };

    this.mergeLot = this.mergeLot.bind(this);
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
              latitude: child.val().latitude,
              longitude: child.val().longitude,
              username: child.val().username,
              email: child.val().email,
              phoneNumber: child.val().phoneNumber,
            },
            ...arraydata,
          ];
        });
        this.setState({users: arraydata});
      });
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        this.mergeLot();
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
    );
    setInterval(this.mergeLot, 5000);
  }

  mergeLot() {
    if (this.state.latitude != null && this.state.longitude != null) {
      let concatLot = this.state.latitude + ',' + this.state.longitude;
      this.setState(
        {
          concat: concatLot,
        },
        () => {
          this.getDirections(concatLot, '-6.270565,106.759550');
        },
      );
    }
  }
  TrackingLocation = () => {
    this.state.users.map(item => {
      this.setState({userId: item._id});
    });
    console.log(this.state.userId);
    firebase
      .database()
      .ref(`User/${this.state.userId}`)
      .update({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
      });
  };

  async getDirections(startLoc, destinationLoc) {
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`,
      );
      let respJson = await resp.json();
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });
      this.setState({coords: coords});
      this.setState({x: 'true'});
      return coords;
    } catch (error) {
      console.log('masuk fungsi');
      this.setState({x: 'error'});
      return error;
    }
  }
  render() {
    return (
      <Container>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -6.270565,
            longitude: 106.75955,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
          {this.state.users.map(item => {
            return (
              <Marker
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                title={item.username}
                onPress={() =>
                  this.props.navigation.navigate('BioMaps', {
                    avatar: item.avatar,
                    username: item.username,
                    email: item.email,
                    phoneNumber: item.phoneNumber,
                  })
                }
              />
            );
          })}
        </MapView>
        <View
          style={{
            backgroundColor: '#dfe4ea',
            marginHorizontal: 40,
            marginTop: 10,
            borderRadius: 20,
          }}>
          <TouchableOpacity
            onPress={() => this.TrackingLocation()}
            style={{
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 20,
            }}>
            <Text>Push Your Location</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Maps;
