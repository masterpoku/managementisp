import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function Mikrotik(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.rect}>
        <View style={styles.settingMikrotikRow}>
          <Text style={styles.settingMikrotik}>SETTING MIKROTIK</Text>
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
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Pembayaran')}
                style={styles.button8}>
                <FontAwesomeIcon name="credit-card" style={styles.icon4} />
                <Text style={styles.pembayaran1}>Pembayaran</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Admin')}
                style={styles.button9}>
                <FontAwesomeIcon name="whatsapp" style={styles.icon5} />
                <Text style={styles.admin1}>Admin</Text>
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
      <View style={styles.group7}>
        <Text style={styles.ipApiMikrotik}>IP API MIKROTIK</Text>
        <View style={styles.placeholderRow}>
          <TextInput placeholder="IP MIKROTIK" style={styles.placeholder} />
          <TextInput placeholder="PORT" style={styles.placeholder1} />
        </View>
        <Text style={styles.userApi}>USER API</Text>
        <TextInput
          placeholder="Username"
          textBreakStrategy="simple"
          style={styles.textInput2}
        />
        <Text style={styles.passwordApi}>PASSWORD API</Text>
        <TextInput placeholder="Password" style={styles.textInput3} />
      </View>
      <View style={styles.group6}>
        <View style={styles.button10Row}>
          <TouchableOpacity style={styles.button10}>
            <Text style={styles.setup}>SETUP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button11}>
            <Text style={styles.test}>TEST</Text>
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
    borderRadius: 33,
  },
  rect: {
    width: 492,
    height: 61,
    backgroundColor: 'rgba(14,61,226,1)',
    flexDirection: 'row',
  },
  settingMikrotik: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: 0,
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
  settingMikrotikRow: {
    height: 34,
    flexDirection: 'row',
    marginRight: 29,
    marginLeft: 102,
    marginTop: 13,
  },
  group4: {
    width: 400,
    height: 78,
    marginTop: 640,
    marginLeft: -7,
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
  group7: {
    width: 290,
    height: 38,
    marginTop: -621,
    alignSelf: 'center',
  },
  ipApiMikrotik: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 163,
    height: 24,
    textAlign: 'center',
    marginTop: -4,
    alignSelf: 'center',
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 38,
    width: 194,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 38,
    textAlign: 'center',
  },
  placeholder1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 38,
    width: 79,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 38,
    textAlign: 'center',
    marginLeft: 17,
  },
  placeholderRow: {
    height: 38,
    flexDirection: 'row',
    marginTop: 10,
  },
  userApi: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 14,
    width: 163,
    height: 24,
    textAlign: 'center',
    marginTop: 38,
    alignSelf: 'center',
  },
  textInput2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 38,
    width: 290,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 38,
    textAlign: 'center',
    letterSpacing: 0,
  },
  passwordApi: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 14,
    width: 163,
    height: 24,
    textAlign: 'center',
    marginTop: 32,
    alignSelf: 'center',
  },
  textInput3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 38,
    width: 290,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 38,
    textAlign: 'center',
  },
  group6: {
    width: 253,
    height: 49,
    flexDirection: 'row',
    marginTop: 310,
    alignSelf: 'center',
  },
  button10: {
    width: 100,
    height: 49,
    backgroundColor: '#0e3de2',
    borderRadius: 30,
  },
  setup: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 22,
  },
  button11: {
    width: 100,
    height: 49,
    backgroundColor: 'rgba(208,2,27,1)',
    borderRadius: 30,
    marginLeft: 53,
  },
  test: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 28,
  },
  button10Row: {
    height: 49,
    flexDirection: 'row',
    flex: 1,
  },
});

export default Mikrotik;
