import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';

function Aktifdata(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.rect}>
        <View style={styles.dataPelangganRow}>
          <Text style={styles.dataPelanggan}>DATA PELANGGAN</Text>
          <Svg viewBox="0 0 12 11.72" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(42,244,9,1)"
              cx={6}
              cy={6}
              rx={6}
              ry={6}
            />
          </Svg>
          <Svg viewBox="0 0 12 11.72" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(42,244,9,1)"
              cx={6}
              cy={6}
              rx={6}
              ry={6}
            />
          </Svg>
        </View>
      </View>
      <Text style={styles.isolirUser}>AKTIFKAN USER</Text>
      <View style={styles.group}>
        <View style={styles.button11Row}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button11}>
            <Text style={styles.isolir2}>AKTIFKAN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button10}>
            <Text style={styles.kembali}>KEMBALI</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.paket1}>10mbps</Text>
      <Text style={styles.user}>User</Text>
      <Text style={styles.password}>Password</Text>
      <Text style={styles.wafi}>WAFI</Text>
      <Text style={styles.password1}>123456</Text>
      <Text style={styles.paket}>Paket</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(223,230,255,1)',
    borderRadius: 33,
  },
  rect: {
    width: 392,
    height: 61,
    backgroundColor: 'rgba(14,61,226,1)',
    flexDirection: 'row',
  },
  dataPelanggan: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  ellipse: {
    width: 12,
    height: 12,
    flex: 0.01,
    marginLeft: 35,
  },
  ellipse2: {
    width: 12,
    height: 12,
    flex: 0.01,
    marginLeft: 13,
  },
  dataPelangganRow: {
    height: 34,
    flexDirection: 'row',
    flex: 1,
    marginRight: 29,
    marginLeft: 102,
    marginTop: 13,
  },
  isolirUser: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 16,
    marginLeft: 102,
  },
  group: {
    width: 256,
    height: 49,
    flexDirection: 'row',
    marginTop: 409,
    marginLeft: 68,
  },
  button11: {
    width: 100,
    height: 49,
    backgroundColor: 'rgba(208,2,27,1)',
    borderRadius: 30,
  },
  isolir2: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 14,
  },
  button10: {
    width: 100,
    height: 49,
    backgroundColor: '#0e3de2',
    borderRadius: 30,
    marginLeft: 56,
  },
  kembali: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 16,
  },
  button11Row: {
    height: 49,
    flexDirection: 'row',
    flex: 1,
  },
  paket1: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: -211,
    marginLeft: 102,
  },
  user: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: -244,
    marginLeft: 102,
  },
  password: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 74,
    marginLeft: 102,
  },
  wafi: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: -90,
    marginLeft: 102,
  },
  password1: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 76,
    marginLeft: 102,
  },
  paket: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 34,
    marginLeft: 102,
  },
});

export default Aktifdata;
