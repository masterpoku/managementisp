import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function Harga(props) {
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
      <View style={styles.group4}>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}>
            <View style={styles.button6Row}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Pelanggan')}
                style={styles.button6}>
                <FontAwesomeIcon name="user-circle-o" style={styles.icon2} />
                <Text style={styles.pelangggan1}>Pelangggan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Mikrotik')}
                style={styles.button7}>
                <FontAwesomeIcon name="cogs" style={styles.icon3} />
                <Text style={styles.mikrotik1}>Mikrotik</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button8}>
                <FontAwesomeIcon name="credit-card" style={styles.icon4} />
                <Text style={styles.pembayaran1}>Pembayaran</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button9}>
                <FontAwesomeIcon name="whatsapp" style={styles.icon5} />
                <Text style={styles.text}>Admin</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            style={styles.button5}>
            <FontAwesomeIcon name="home" style={styles.icon1} />
            <Text style={styles.dashboard1}>Dashboard</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.group5Row}>
        <View style={styles.group5}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Editpaket')}
            style={styles.button10}>
            <Text style={styles.mbps1}>5mbps</Text>
            <Text style={styles.rp50000}>Rp 50.000</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group6}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Editpaket')}
            style={styles.button11}>
            <Text style={styles.text2}>10mbps</Text>
            <Text style={styles.rp100000}>Rp 100.000</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.group7Row}>
        <View style={styles.group7}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Editpaket')}
            style={styles.button12}>
            <Text style={styles.text3}>15mbps</Text>
            <Text style={styles.rp150000}>Rp 150.000</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group8}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Editpaket')}
            style={styles.button13}>
            <Text style={styles.text4}>20mbps</Text>
            <Text style={styles.rp200000}>Rp 200.000</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.hargaPaketInternet}>HARGA PAKET INTERNET</Text>
      <View style={styles.group9}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Tambahpaket')}
          style={styles.button14}>
          <View style={styles.ellipse3Stack}>
            <Svg viewBox="0 0 62 64" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="#0e3de2"
                cx={31}
                cy={32}
                rx={31}
                ry={32}
              />
            </Svg>
            <FontAwesomeIcon name="plus-circle" style={styles.icon6} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(223,230,255,1)',
    borderRadius: 76,
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
  group4: {
    width: 400,
    height: 78,
    marginTop: 640,
    alignSelf: 'center',
  },
  rect3: {
    top: 0,
    width: 399,
    height: 78,
    position: 'absolute',
    backgroundColor: 'rgba(14,61,226,1)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    left: 1,
    flexDirection: 'row',
  },
  button6: {
    width: 73,
    height: 59,
  },
  icon2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: 22,
  },
  pelangggan1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 11,
  },
  button7: {
    width: 73,
    height: 59,
    marginLeft: 9,
  },
  icon3: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    width: 32,
    height: 30,
    marginTop: 5,
    marginLeft: 22,
  },
  mikrotik1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 20,
  },
  button8: {
    width: 73,
    height: 59,
    marginLeft: 10,
  },
  icon4: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    width: 32,
    height: 30,
    marginTop: 5,
    marginLeft: 19,
  },
  pembayaran1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 8,
  },
  button9: {
    width: 73,
    height: 59,
    marginLeft: 10,
  },
  icon5: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    width: 26,
    height: 30,
    marginTop: 5,
    marginLeft: 21,
  },
  text: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 18,
  },
  button6Row: {
    height: 59,
    flexDirection: 'row',
    flex: 1,
    marginLeft: 78,
    marginTop: 19,
  },
  button5: {
    top: 19,
    left: 0,
    width: 73,
    height: 59,
    position: 'absolute',
  },
  icon1: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    width: 28,
    height: 30,
    marginTop: 5,
    marginLeft: 21,
  },
  dashboard1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 10,
  },
  rect3Stack: {
    width: 400,
    height: 78,
  },
  group5: {
    width: 117,
    height: 85,
  },
  button10: {
    width: 117,
    height: 85,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 24,
  },
  mbps1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 25,
    marginTop: 17,
    marginLeft: 20,
  },
  rp50000: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 14,
    marginTop: 7,
    marginLeft: 27,
  },
  group6: {
    width: 117,
    height: 85,
    marginLeft: 71,
  },
  button11: {
    width: 117,
    height: 85,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 24,
  },
  text2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 25,
    marginTop: 17,
    marginLeft: 13,
  },
  rp100000: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 14,
    marginTop: 9,
    marginLeft: 23,
  },
  group5Row: {
    height: 85,
    flexDirection: 'row',
    marginTop: -635,
    marginLeft: 47,
    marginRight: 40,
  },
  group7: {
    width: 117,
    height: 85,
    justifyContent: 'center',
  },
  button12: {
    width: 117,
    height: 85,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 24,
  },
  text3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 25,
    marginTop: 17,
    marginLeft: 13,
  },
  rp150000: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 14,
    marginTop: 7,
    marginLeft: 23,
  },
  group8: {
    width: 117,
    height: 85,
    justifyContent: 'center',
    marginLeft: 71,
  },
  button13: {
    width: 117,
    height: 85,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 24,
  },
  text4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 25,
    marginTop: 17,
    marginLeft: 13,
  },
  rp200000: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 14,
    marginTop: 7,
    marginLeft: 23,
  },
  group7Row: {
    height: 85,
    flexDirection: 'row',
    marginTop: 42,
    marginLeft: 47,
    marginRight: 40,
  },
  hargaPaketInternet: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 25,
    marginTop: -276,
    alignSelf: 'center',
  },
  group9: {
    width: 111,
    height: 114,
    marginTop: 460,
    marginLeft: 263,
  },
  button14: {
    width: 62,
    height: 64,
    marginTop: 36,
    marginLeft: 38,
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 62,
    height: 64,
    position: 'absolute',
  },
  icon6: {
    top: 13,
    left: 14,
    position: 'absolute',
    color: 'rgba(255,255,255,1)',
    fontSize: 40,
    height: 40,
    width: 34,
  },
  ellipse3Stack: {
    width: 62,
    height: 64,
  },
});

export default Harga;
