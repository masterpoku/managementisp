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

function Home(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.rect}>
        <View style={styles.group}>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Pelanggan')}
              style={styles.button}>
              <FontAwesomeIcon name="user-circle-o" style={styles.icon} />
              <Text style={styles.dataPelangganPpoe}>
                Data Pelanggan {'\n'}PPOE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Pembayaran')}
              style={styles.button2}>
              <FontAwesomeIcon name="credit-card" style={styles.icon2} />
              <Text style={styles.pembayaran}>Pembayaran</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button3Row}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Mikrotik')}
              style={styles.button3}>
              <FontAwesomeIcon name="cogs" style={styles.icon3} />
              <Text style={styles.settingMikrotik}>Setting Mikrotik</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Admin')}
              style={styles.button4}>
              <FontAwesomeIcon name="whatsapp" style={styles.icon4} />
              <Text style={styles.chatAdmin}>Chat Admin</Text>
            </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Pembayaran')}
                  style={styles.button8}>
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
        <Text style={styles.dashboard}>DASHBOARD</Text>
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
    alignSelf: 'center',
  },
  group: {
    width: 303,
    height: 301,
    marginTop: 34,
    alignSelf: 'center',
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
    marginLeft: 14,
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
  pembayaran: {
    fontFamily: 'roboto-700',
    color: '#121212',
    marginTop: 12,
    marginLeft: 27,
  },
  buttonRow: {
    height: 133,
    flexDirection: 'row',
  },
  button3: {
    width: 132,
    height: 133,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
  },
  icon3: {
    color: 'rgba(0,0,0,1)',
    fontSize: 65,
    height: 65,
    width: 70,
    marginTop: 19,
    marginLeft: 24,
  },
  settingMikrotik: {
    fontFamily: 'roboto-700',
    color: '#121212',
    marginTop: 11,
    marginLeft: 15,
  },
  button4: {
    width: 132,
    height: 133,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
    marginLeft: 39,
  },
  icon4: {
    color: 'rgba(0,0,0,1)',
    fontSize: 67,
    height: 67,
    width: 57,
    marginTop: 19,
    marginLeft: 38,
  },
  chatAdmin: {
    fontFamily: 'roboto-700',
    color: '#121212',
    marginTop: 9,
    marginLeft: 29,
  },
  button3Row: {
    height: 133,
    flexDirection: 'row',
    marginTop: 35,
  },
  group3: {
    width: 400,
    height: 78,
    marginTop: 74,
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
  dashboard: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
    width: 134,
    height: 24,
    marginTop: 62,
  },
  managemen: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    width: 153,
    fontSize: 15,
    height: 16,
  },
});

export default Home;
