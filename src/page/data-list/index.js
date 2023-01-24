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
import CupertinoSearchBarBasic from '../../components/CupertinoSearchBarBasic';

function Pelanggan(props) {
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
      <View style={styles.group5}>
        <View style={styles.loremIpsum1Row}>
          <Text style={styles.loremIpsum1}>1</Text>
          <Text style={styles.wafi1}>WAFI</Text>
          <Text style={styles.loremIpsum2}>10mbps</Text>
          <Text style={styles.aktif1}>Aktif</Text>
          <View style={styles.group6}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Isolir')}
              style={styles.button10}>
              <FontAwesomeIcon name="ban" style={styles.icon6} />
            </TouchableOpacity>
          </View>
          <View style={styles.group7}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Editpelanggan')}
              style={styles.button11}>
              <FontAwesomeIcon name="gear" style={styles.icon7} />
            </TouchableOpacity>
          </View>
          <View style={styles.group8}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Aktifdata')}
              style={styles.button12}>
              <FontAwesomeIcon name="play-circle-o" style={styles.icon8} />
            </TouchableOpacity>
          </View>
          <View style={styles.group9}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Detailuser')}
              style={styles.button13}>
              <FontAwesomeIcon name="eye" style={styles.icon9} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CupertinoSearchBarBasic style={styles.cupertinoSearchBarBasic1} />
      <View style={styles.rect4}>
        <View style={styles.no2Row}>
          <Text style={styles.no2}>No</Text>
          <Text style={styles.nama1}>Nama</Text>
          <Text style={styles.paket1}>Paket</Text>
          <Text style={styles.status1}>Status</Text>
          <Text style={styles.aksi1}>Aksi</Text>
        </View>
      </View>
      <View style={styles.group10}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Addpelanggan')}
          style={styles.button14}>
          <View style={styles.ellipse3Stack}>
            <Svg viewBox="0 0 100 100" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="#0e3de2"
                cx={50}
                cy={50}
                rx={50}
                ry={50}
              />
            </Svg>
            <FontAwesomeIcon name="plus-circle" style={styles.icon10} />
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
    borderRadius: 33,
  },
  rect: {
    width: 422,
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
    marginRight: 59,
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
  group5: {
    width: 337,
    height: 26,
    flexDirection: 'row',
    marginTop: -577,
    marginLeft: 25,
  },
  loremIpsum1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 2,
  },
  wafi1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 34,
    marginTop: 2,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 28,
    marginTop: 2,
  },
  aktif1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 21,
    marginTop: 2,
  },
  group6: {
    width: 19,
    height: 19,
    marginLeft: 40,
  },
  button10: {
    width: 22,
    height: 22,
    backgroundColor: 'rgba(208,2,27,1)',
    borderRadius: 59,
  },
  icon6: {
    color: 'rgba(128,128,128,1)',
    fontSize: 14,
    height: 14,
    width: 12,
    marginTop: 4,
    marginLeft: 5,
  },
  group7: {
    width: 19,
    height: 19,
    marginLeft: 8,
  },
  button11: {
    width: 22,
    height: 22,
    backgroundColor: 'rgba(14,61,226,1)',
    borderRadius: 59,
  },
  icon7: {
    color: 'rgba(128,128,128,1)',
    fontSize: 16,
    height: 16,
    width: 16,
    flex: 1,
    marginBottom: 3,
    marginTop: 3,
    marginLeft: 4,
    marginRight: 2,
  },
  group8: {
    width: 19,
    height: 19,
    marginLeft: 7,
  },
  button12: {
    width: 22,
    height: 22,
    backgroundColor: 'rgba(42,244,9,1)',
    borderRadius: 59,
  },
  icon8: {
    color: 'rgba(128,128,128,1)',
    fontSize: 16,
    height: 16,
    width: 14,
    marginTop: 3,
    marginLeft: 5,
  },
  group9: {
    width: 22,
    height: 22,
    marginLeft: 7,
  },
  button13: {
    width: 22,
    height: 22,
    backgroundColor: 'rgba(245,250,6,1)',
    borderRadius: 59,
  },
  icon9: {
    color: 'rgba(128,128,128,1)',
    fontSize: 16,
    height: 16,
    width: 16,
    marginTop: 3,
    marginLeft: 3,
  },
  loremIpsum1Row: {
    height: 22,
    flexDirection: 'row',
    flex: 1,
    marginRight: -4,
    marginLeft: -4,
  },
  cupertinoSearchBarBasic1: {
    height: 46,
    width: 375,
    marginTop: -151,
    marginLeft: 9,
  },
  rect4: {
    width: 428,
    height: 49,
    backgroundColor: 'rgba(155,155,155,1)',
    flexDirection: 'row',
    marginTop: 13,
  },
  no2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  nama1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 23,
  },
  paket1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 31,
  },
  status1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 24,
  },
  aksi1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 63,
  },
  no2Row: {
    height: 16,
    flexDirection: 'row',
    flex: 1,
    marginRight: 109,
    marginLeft: 21,
    marginTop: 16,
  },
  group10: {
    width: 111,
    height: 114,
    marginTop: 384,
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
  icon10: {
    top: 13,
    left: 13,
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

export default Pelanggan;
