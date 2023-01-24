import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Register(props) {
  return (
    <View style={styles.container}>
      <View style={styles.halaman}>
        <View style={styles.group}>
          <Image
            source={require('../image/logo.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.loremIpsum}>Management Biling ISP</Text>
        </View>
        <View style={styles.group3Stack}>
          <View style={styles.group3}>
            <TextInput placeholder="Nama" style={styles.nama} />
            <TextInput placeholder="Nomor (Whatsapp)" style={styles.whatsapp} />
            <TextInput placeholder="Username" style={styles.username} />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.password}
            />
          </View>
          <View style={styles.group4}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
              style={styles.button}>
              <Text style={styles.daftar}>DAFTAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.group2}>
          <View style={styles.sudahPunyaAkunStack}>
            <Text style={styles.sudahPunyaAkun}>Sudah Punya Akun?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
              style={styles.button2}>
              <Text style={styles.login2}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 39,
    backgroundColor: '#fff',
  },
  halaman: {
    width: 200,
    height: 200,
    marginTop: 133,
    alignSelf: 'center',
  },
  group: {
    width: 200,
    height: 200,
    alignItems: 'center',
    marginTop: -75,
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  loremIpsum: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 20,
  },
  group3: {
    top: 0,
    width: 132,
    height: 40,
    position: 'absolute',
    alignSelf: 'center',
  },
  nama: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 46,
    width: 283,
    textAlign: 'center',
    backgroundColor: 'rgba(230,230,230,1)',
    borderRadius: 39,
    fontSize: 15,
    marginTop: -235,
    alignSelf: 'center',
  },
  whatsapp: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 46,
    width: 283,
    textAlign: 'center',
    backgroundColor: 'rgba(230,230,230,1)',
    borderRadius: 39,
    fontSize: 15,
    marginTop: 15,
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
    marginTop: 13,
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
    marginTop: 14,
    alignSelf: 'center',
  },
  group4: {
    left: 0,
    width: 132,
    height: 40,
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
  },
  button: {
    width: 132,
    height: 40,
    backgroundColor: 'rgba(14,61,226,1)',
    borderRadius: 39,
    alignSelf: 'center',
  },
  daftar: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    textAlign: 'center',
    height: 18,
    width: 56,
    marginTop: 11,
    alignSelf: 'center',
  },
  group3Stack: {
    width: 132,
    height: 50,
    marginTop: 288,
    alignSelf: 'center',
  },
  group2: {
    width: 126,
    height: 16,
    marginTop: 28,
    alignSelf: 'center',
  },
  sudahPunyaAkun: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    position: 'absolute',
    top: 0,
    left: 0,
    height: 16,
    width: 123,
    alignSelf: 'center',
  },
  button2: {
    top: 15,
    left: 37,
    width: 48,
    height: 17,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,1)',
    alignSelf: 'center',
  },
  login2: {
    fontFamily: 'roboto-regular',
    color: '#0f3ae6',
    width: 39,
    height: 16,
    marginTop: 10,
    alignSelf: 'center',
  },
  sudahPunyaAkunStack: {
    width: 123,
    height: 32,
    alignSelf: 'center',
  },
});

export default Register;
