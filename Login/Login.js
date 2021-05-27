import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Login = props => {
  return (
    <View style={styles.container}>
      <Text>LOG IN !!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;