'use strict';
var config = {
    apiKey: "AIzaSyBDSNuDcpOIxQIvuOoJTAOM-7FXnTKFXJo",
    authDomain: "todolist-7e61f.firebaseapp.com",
    databaseURL: "https://todolist-7e61f.firebaseio.com",
    storageBucket: "todolist-7e61f.appspot.com",
    messagingSenderId: "855590573775"
};
firebase.initializeApp(config);

var todolistApp = angular.module('todolistApp', ['firebase']);