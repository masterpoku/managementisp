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

function Pembayaran(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.rect}>
        <View style={styles.group}>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Harga')}
              style={styles.button}>
              <FontAwesomeIcon name="user-circle-o" style={styles.icon} />
              <Text style={styles.dataPelangganPpoe}>HARGA PAKET</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Historipembayaran')}
              style={styles.button2}>
              <FontAwesomeIcon name="credit-card" style={styles.icon2} />
              <Text style={styles.text}>Histori Pembayaran</Text>
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
        <View style={styles.group3}>
          <View style={styles.rect1Stack}>
            <View style={styles.rect1}>
              <View style={styles.button6Row}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Pelanggan')}
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
                <TouchableOpacity style={styles.button8}>
                  <FontAwesomeIcon name="credit-card" style={styles.icon8} />
                  <Text style={styles.pembayaran1}>Pembayaran</Text>
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
      </View>
      <View style={styles.group2}>
        <View style={styles.ellipseRow}>
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
        <Text style={styles.pembayaran2}>PEMBAYARAN</Text>
        <Text style={styles.managemen}>Management Billing ISP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(14,61,226,1)',
  },
  rect: {
    width: 413,
    height: 551,
    backgroundColor: 'rgba(223,230,255,1)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 292,
    marginLeft: -10,
  },
  group: {
    width: 303,
    height: 136,
    flexDirection: 'row',
    marginTop: 34,
    marginLeft: 55,
  },
  button: {
    width: 132,
    height: 133,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
  },
  icon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 67,
    height: 67,
    width: 67,
    marginTop: 17,
    marginLeft: 32,
  },
  dataPelangganPpoe: {
    fontFamily: 'roboto-700',
    color: '#121212',
    textAlign: 'center',
    marginTop: 7,
  },
  button2: {
    width: 132,
    height: 133,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
    marginLeft: 39,
  },
  icon2: {
    color: 'rgba(0,0,0,1)',
    fontSize: 67,
    height: 67,
    width: 72,
    marginTop: 12,
    marginLeft: 30,
  },
  text: {
    fontFamily: 'roboto-700',
    color: '#121212',
    textAlign: 'center',
    marginTop: 12,
  },
  buttonRow: {
    height: 133,
    flexDirection: 'row',
    flex: 1,
  },
  group4: {
    width: 373,
    height: 39,
    marginTop: 26,
    marginLeft: 20,
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
    marginTop: 2,
    marginLeft: 20,
  },
  rect3: {
    width: 373,
    height: 39,
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'row',
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
  group3: {
    width: 400,
    height: 78,
    marginTop: 133,
    marginLeft: 3,
  },
  rect1: {
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
  group2: {
    width: 334,
    height: 114,
    marginTop: -830,
    alignSelf: 'center',
  },
  ellipse: {
    width: 12,
    height: 12,
    flex: 0.01,
  },
  ellipse2: {
    width: 12,
    height: 12,
    flex: 0.01,
    marginLeft: 13,
  },
  ellipseRow: {
    height: 12,
    flexDirection: 'row',
    marginLeft: 297,
  },
  pembayaran2: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    width: 134,
    height: 24,
    marginTop: 62,
  },
  managemen: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    width: 153,
    height: 16,
  },
});

export default Pembayaran;
