import React, {Component} from 'react';
import {Container} from 'native-base';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import Header from '../Components/Header';
import Polyline from '@mapbox/polyline';
import Geolocation from '@react-native-community/geolocation';

class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords: [],
      x: 'false',
      cordLatitude: -6.23,
      cordLongitude: 106.75,
    };

    this.mergeLot = this.mergeLot.bind(this);
  }

  componentDidMount() {
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
        <Header />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -6.270565,
            longitude: 106.75955,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
          {!!this.state.latitude && !!this.state.longitude && (
            <MapView.Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}
              title={'Your Location'}
            />
          )}

          {!!this.state.cordLatitude && !!this.state.cordLongitude && (
            <MapView.Marker
              coordinate={{
                latitude: this.state.cordLatitude,
                longitude: this.state.cordLongitude,
              }}
              title={'Your Destination'}
            />
          )}

          {!!this.state.latitude &&
            !!this.state.longitude &&
            this.state.x == 'true' && (
              <MapView.Polyline
                coordinates={this.state.coords}
                strokeWidth={2}
                strokeColor="red"
              />
            )}

          {!!this.state.latitude &&
            !!this.state.longitude &&
            this.state.x == 'error' && (
              <MapView.Polyline
                coordinates={[
                  {
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                  },
                  {
                    latitude: this.state.cordLatitude,
                    longitude: this.state.cordLongitude,
                  },
                ]}
                strokeWidth={2}
                strokeColor="red"
              />
            )}
        </MapView>
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

// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';
// import MapView, {
//   Marker,
//   AnimatedRegion,
//   Polyline,
//   PROVIDER_GOOGLE,
// } from 'react-native-maps';
// import haversine from 'haversine';
// import Geolocation from '@react-native-community/geolocation';

// // const LATITUDE = 29.95539;
// // const LONGITUDE = 78.07513;
// const LATITUDE_DELTA = 0.009;
// const LONGITUDE_DELTA = 0.009;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;

// class Maps extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//       routeCoordinates: [],
//       distanceTravelled: 0,
//       prevLatLng: {},
//       coordinate: new AnimatedRegion({
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: 0,
//         longitudeDelta: 0,
//       }),
//     };
//   }

//   componentDidMount() {
//     const {coordinate} = this.state;

//     this.watchID = Geolocation.watchPosition(
//       position => {
//         const {routeCoordinates, distanceTravelled} = this.state;
//         const {latitude, longitude} = position.coords;

//         const newCoordinate = {
//           latitude,
//           longitude,
//         };

//         if (Platform.OS === 'android') {
//           if (this.marker) {
//             this.marker._component.animateMarkerToCoordinate(
//               newCoordinate,
//               500,
//             );
//           }
//         } else {
//           coordinate.timing(newCoordinate).start();
//         }

//         this.setState({
//           latitude,
//           longitude,
//           routeCoordinates: routeCoordinates.concat([newCoordinate]),
//           distanceTravelled:
//             distanceTravelled + this.calcDistance(newCoordinate),
//           prevLatLng: newCoordinate,
//         });
//       },
//       error => console.log(error),
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000,
//         distanceFilter: 10,
//       },
//     );
//   }

//   componentWillUnmount() {
//     Geolocation.clearWatch(this.watchID);
//   }

//   getMapRegion = () => ({
//     latitude: this.state.latitude,
//     longitude: this.state.longitude,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA,
//   });

//   calcDistance = newLatLng => {
//     const {prevLatLng} = this.state;
//     return haversine(prevLatLng, newLatLng) || 0;
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           provider={PROVIDER_GOOGLE}
//           showUserLocation
//           followUserLocation
//           loadingEnabled
//           region={this.getMapRegion()}>
//           <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
//           <Marker.Animated
//             ref={marker => {
//               this.marker = marker;
//             }}
//             coordinate={this.state.coordinate}
//           />
//         </MapView>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={[styles.bubble, styles.button]}>
//             <Text style={styles.bottomBarContent}>
//               {parseFloat(this.state.distanceTravelled).toFixed(2)} km
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   bubble: {
//     flex: 1,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20,
//   },
//   latlng: {
//     width: 200,
//     alignItems: 'stretch',
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginVertical: 20,
//     backgroundColor: 'transparent',
//   },
// });

// export default Maps;
