import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

function Login(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../image/logo.png')}
        resizeMode="contain"
        style={styles.image1}
      />
      <TextInput placeholder="Username" style={styles.username} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.password}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.text}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.loremIpsum}>Management Billing ISP</Text>
      <Text style={styles.belumPunyaAkun}>Belum Punya Akun?</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Register')}
        style={styles.button2}>
        <Text style={styles.daftar}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 39,
    backgroundColor: '#fff',
  },
  image1: {
    width: 275,
    height: 206,
    marginTop: 89,
    alignSelf: 'center',
  },
  username: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 46,
    width: 283,
    textAlign: 'center',
    backgroundColor: 'rgba(230,230,230,1)',
    borderRadius: 39,
    fontSize: 15,
    marginTop: 108,
    alignSelf: 'center',
  },
  password: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 46,
    width: 283,
    textAlign: 'center',
    backgroundColor: 'rgba(230,230,230,1)',
    borderRadius: 39,
    fontSize: 15,
    marginTop: 13,
    alignSelf: 'center',
  },
  button: {
    width: 132,
    height: 40,
    backgroundColor: 'rgba(14,61,226,1)',
    borderRadius: 39,
    marginTop: 39,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    textAlign: 'center',
    height: 18,
    width: 56,
    marginTop: 11,
    alignSelf: 'center',
  },
  loremIpsum: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 19,
    marginTop: -253,
    alignSelf: 'center',
  },
  belumPunyaAkun: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 270,
    alignSelf: 'center',
  },
  button2: {
    width: 152,
    height: 36,
    marginTop: 2,
    alignSelf: 'center',
  },
  daftar: {
    fontFamily: 'roboto-regular',
    color: 'rgba(7,102,214,1)',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default Login;
