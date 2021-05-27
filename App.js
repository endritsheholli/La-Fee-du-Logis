import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AdminApp from './Admin/AdminApp'
import LogIn from './Login/Login'

export default function App() {
  return (
    <Greeting isLoggedIn={false}/>
  );
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <AdminApp />;
  }
  return <LogIn />;
}