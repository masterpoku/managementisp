import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Svg, {Ellipse} from 'react-native-svg';

function Historipembayaran(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.group3}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}>
            <View style={styles.button6Row}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Pelangggan')}
                style={styles.button6}>
                <FontAwesomeIcon name="user-circle-o" style={styles.icon6} />
                <Text style={styles.pelangggan1}>Pelangggan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Mikrotik')}
                style={styles.button7}>
                <FontAwesomeIcon name="cogs" style={styles.icon7} />
                <Text style={styles.mikrotik1}>Mikrotik</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Pembayaran')}
                style={styles.button8}>
                <FontAwesomeIcon name="credit-card" style={styles.icon8} />
                <Text style={styles.text2}>Pembayaran</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Admin')}
                style={styles.button9}>
                <FontAwesomeIcon name="whatsapp" style={styles.icon9} />
                <Text style={styles.admin1}>Admin</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            style={styles.button5}>
            <FontAwesomeIcon name="home" style={styles.icon5} />
            <Text style={styles.dashboard1}>Dashboard</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.rect2}>
          <View style={styles.noRow}>
            <Text style={styles.no}>No</Text>
            <Text style={styles.user}>User</Text>
            <Text style={styles.harga}>Harga</Text>
            <Text style={styles.tglIsolir}>Tgl Isolir</Text>
            <Text style={styles.status}>Status</Text>
          </View>
        </View>
      </View>
      <View style={styles.group5}>
        <View style={styles.rect4} />
        <View style={styles.rect3}>
          <View style={styles.no2Row}>
            <Text style={styles.no2}>1</Text>
            <Text style={styles.wafi}>Wafi</Text>
            <Text style={styles.harga2}>100.000</Text>
            <Text style={styles.tglIsolir2}>12/08/23</Text>
            <Text style={styles.lunas}>Lunas</Text>
          </View>
        </View>
      </View>
      <View style={styles.historiPembyaranRow}>
        <Text style={styles.historiPembyaran}>HISTORI PEMBYARAN</Text>
        <View style={styles.group6}>
          <View style={styles.ellipse1Row}>
            <Svg viewBox="0 0 12 11.72" style={styles.ellipse1}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe6ff',
  },
  group3: {
    width: 400,
    height: 78,
    marginTop: 701,
    marginLeft: -7,
  },
  rect1: {
    top: 0,
    width: 599,
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
  icon6: {
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
  icon7: {
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
  icon8: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    width: 32,
    height: 30,
    marginTop: 5,
    marginLeft: 19,
  },
  text2: {
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
  icon9: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    width: 26,
    height: 30,
    marginTop: 5,
    marginLeft: 21,
  },
  admin1: {
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
  icon5: {
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
  rect1Stack: {
    width: 400,
    height: 78,
  },
  group4: {
    width: 373,
    height: 39,
    marginTop: -708,
    alignSelf: 'center',
  },
  rect2: {
    width: 373,
    height: 39,
    backgroundColor: 'rgba(217,217,217,1)',
    flexDirection: 'row',
  },
  no: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  user: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 25,
  },
  harga: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 34,
  },
  tglIsolir: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 43,
  },
  status: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 43,
  },
  noRow: {
    height: 16,
    flexDirection: 'row',
    flex: 1,
    marginRight: 37,
    marginLeft: 14,
    marginTop: 11,
  },
  group5: {
    width: 373,
    height: 39,
    marginTop: 8,
    alignSelf: 'center',
  },
  rect4: {
    width: 392,
    height: 61,
    backgroundColor: 'rgba(14,61,226,1)',
    marginTop: -118,
    marginLeft: -10,
  },
  rect3: {
    width: 373,
    height: 39,
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'row',
    marginTop: 57,
  },
  no2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  wafi: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 35,
  },
  harga2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 27,
  },
  tglIsolir2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 37,
  },
  lunas: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 37,
  },
  no2Row: {
    height: 16,
    flexDirection: 'row',
    flex: 1,
    marginRight: 39,
    marginLeft: 14,
    marginTop: 11,
  },
  historiPembyaran: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    width: 229,
    height: 24,
    textAlign: 'center',
  },
  group6: {
    width: 38,
    height: 12,
    flexDirection: 'row',
    marginLeft: 15,
  },
  ellipse1: {
    width: 12,
    height: 12,
    flex: 0.01,
  },
  ellipse2: {
    width: 12,
    height: 12,
    flex: 0.01,
    marginLeft: 14,
  },
  ellipse1Row: {
    height: 12,
    flexDirection: 'row',
    flex: 1,
  },
  historiPembyaranRow: {
    height: 34,
    flexDirection: 'row',
    marginTop: -144,
    marginLeft: 82,
    marginRight: 28,
  },
});

export default Historipembayaran;
