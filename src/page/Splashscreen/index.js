import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

function Splashscreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}
        style={styles.button}>
        <Text style={styles.getStarted}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Management Biling ISP</Text>
      <Image
        source={require('../image/logo.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(14,61,226,1)',
  },
  button: {
    width: 272,
    height: 57,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 584,
    alignSelf: 'center',
  },
  getStarted: {
    fontFamily: 'roboto-regular',
    color: 'rgba(14,61,226,1)',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 15,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    height: 28,
    width: 360,
    textAlign: 'center',
    marginTop: -141,
    alignSelf: 'center',
  },
  image: {
    width: 360,
    height: 269,
    marginTop: -331,
  },
});

export default Splashscreen;
