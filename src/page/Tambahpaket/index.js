import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';

function Tambahpaket(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.rect}>
        <View style={styles.setHargaPaketRow}>
          <Text style={styles.setHargaPaket}>SET HARGA PAKET</Text>
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
      <Text style={styles.tambahHargaPaket}>TAMBAH HARGA PAKET</Text>
      <View style={styles.rect4}>
        <TextInput placeholder="10 (Only Number)" style={styles.textInput} />
      </View>
      <View style={styles.rect5}>
        <TextInput
          placeholder="10000 (Only Number)"
          style={styles.placeholder}
        />
      </View>
      <Text style={styles.harga}>Harga</Text>
      <Text style={styles.kecepatanMbps}>Kecepatan (mbps)</Text>
      <View style={styles.group5}>
        <View style={styles.button11Row}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button11}>
            <Text style={styles.buat}>BUAT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button10}>
            <Text style={styles.kembali1}>KEMBALI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(223,230,255,1)',
  },
  rect: {
    width: 392,
    height: 61,
    backgroundColor: 'rgba(14,61,226,1)',
    flexDirection: 'row',
  },
  setHargaPaket: {
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
  setHargaPaketRow: {
    height: 34,
    flexDirection: 'row',
    flex: 1,
    marginRight: 29,
    marginLeft: 102,
    marginTop: 13,
  },
  tambahHargaPaket: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 25,
    marginTop: 19,
    alignSelf: 'center',
  },
  rect4: {
    width: 294,
    height: 41,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 9,
    marginTop: 61,
    marginLeft: 49,
  },
  textInput: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 41,
    width: 227,
    backgroundColor: 'rgba(255,255,255,1)',
    textAlign: 'center',
    marginLeft: 34,
  },
  rect5: {
    width: 294,
    height: 41,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 9,
    marginTop: 71,
    marginLeft: 49,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 41,
    width: 227,
    backgroundColor: 'rgba(255,255,255,1)',
    textAlign: 'center',
    marginLeft: 34,
  },
  harga: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 16,
    marginTop: -70,
    alignSelf: 'center',
  },
  kecepatanMbps: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 16,
    marginTop: -128,
    alignSelf: 'center',
  },
  group5: {
    width: 256,
    height: 49,
    flexDirection: 'row',
    marginTop: 269,
    alignSelf: 'center',
  },
  button11: {
    width: 100,
    height: 49,
    backgroundColor: 'rgba(14,61,226,1)',
    borderRadius: 30,
  },
  buat: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 28,
  },
  button10: {
    width: 100,
    height: 49,
    backgroundColor: 'rgba(208,2,27,1)',
    borderRadius: 30,
    marginLeft: 56,
  },
  kembali1: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 12,
  },
  button11Row: {
    height: 49,
    flexDirection: 'row',
    flex: 1,
  },
});

export default Tambahpaket;
