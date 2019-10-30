import firebase from 'firebase';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: 'AIzaSyBIFr7-ds1SUplewGtYTo0nAwjI3Or7ZK4',
        authDomain: 'chattingku-4d0d7.firebaseapp.com',
        databaseURL: 'https://chattingku-4d0d7.firebaseio.com',
        projectId: 'chattingku-4d0d7',
        storageBucket: 'chattingku-4d0d7.appspot.com',
        messagingSenderId: '466425941889',
        appId: '1:466425941889:web:eb37977a5babaf973b2280',
        measurementId: 'G-E52X07M4ME',
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
  logOut = async user => {
    await firebase
      .auth()
      .signOut(user.email, user.password)
      .then(function() {})
      .catch(function(error) {});
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;
