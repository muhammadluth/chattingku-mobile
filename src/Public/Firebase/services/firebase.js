import * as firebase from 'firebase';

export const initialize = () =>
  firebase.initializeApp({
    apiKey: 'AIzaSyBIFr7-ds1SUplewGtYTo0nAwjI3Or7ZK4',
    authDomain: 'chattingku-4d0d7.firebaseapp.com',
    databaseURL: 'https://chattingku-4d0d7.firebaseio.com',
    projectId: 'chattingku-4d0d7',
    storageBucket: 'chattingku-4d0d7.appspot.com',
    messagingSenderId: '466425941889',
  });

export const setListener = (endpoint, updaterFn) => {
  firebase
    .database()
    .ref(endpoint)
    .on('value', updaterFn);
  return () =>
    firebase
      .database()
      .ref(endpoint)
      .off();
};

export const pushData = (endpoint, data) => {
  return firebase
    .database()
    .ref(endpoint)
    .push(data);
};

export const Login = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const Register = (username, no_telepone, email, password) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(username, no_telepone, email, password);
