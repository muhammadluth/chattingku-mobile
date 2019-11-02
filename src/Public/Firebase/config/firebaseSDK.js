import firebase from 'firebase';
import {
  BASE_API,
  BASE_AUTH_DOMAIN,
  BASE_DATABASE_URL,
  BASE_PROJECT_ID,
  BASE_STORAGE_BUCKET,
  BASE_MESSAGING_SENDER_ID,
  BASE_APP_ID,
  BASE_MEASUREMENTID,
} from 'react-native-dotenv';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      // avoid re-initializing
      firebase.initializeApp({
        apiKey: BASE_API,
        authDomain: BASE_AUTH_DOMAIN,
        databaseURL: BASE_DATABASE_URL,
        projectId: BASE_PROJECT_ID,
        storageBucket: BASE_STORAGE_BUCKET,
        messagingSenderId: BASE_MESSAGING_SENDER_ID,
        appId: BASE_APP_ID,
        measurementId: BASE_MEASUREMENTID,
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    console.log(BASE_API);
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };

  register = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };

  readUserData() {
    firebase
      .database()
      .ref('Users/')
      .once('value', function(snapshot) {
        console.log(snapshot.val());
      });
  }
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;
