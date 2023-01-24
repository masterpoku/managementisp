import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';

function Detailuser(props) {
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
      <Text style={styles.detailPelanggan}>DETAIL PELANGGAN</Text>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.button10}>
        <Text style={styles.kembali}>KEMBALI</Text>
      </TouchableOpacity>
      <Text style={styles.user}>User</Text>
      <Text style={styles.password}>Password</Text>
      <Text style={styles.wafi}>WAFI</Text>
      <Text style={styles.password1}>123456</Text>
      <Text style={styles.paket}>Paket</Text>
      <Text style={styles.paket1}>10mbps</Text>
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
  detailPelanggan: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 16,
    marginLeft: 102,
  },
  button10: {
    width: 100,
    height: 49,
    backgroundColor: '#0e3de2',
    borderRadius: 30,
    marginTop: 405,
    alignSelf: 'center',
  },
  kembali: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 14,
    alignSelf: 'center',
  },
  user: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: -427,
    alignSelf: 'center',
  },
  password: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 74,
    alignSelf: 'center',
  },
  wafi: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: -90,
    alignSelf: 'center',
  },
  password1: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 76,
    alignSelf: 'center',
  },
  paket: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 34,
    alignSelf: 'center',
  },
  paket1: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 6,
    alignSelf: 'center',
  },
});

export default Detailuser;
