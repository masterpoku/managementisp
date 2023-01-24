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
import MaterialCheckboxWithLabel from '../../components/MaterialCheckboxWithLabel';
import MaterialCheckboxWithLabel2 from '../../components/MaterialCheckboxWithLabel2';
import MaterialCheckboxWithLabel1 from '../../components/MaterialCheckboxWithLabel1';
import MaterialCheckboxWithLabel3 from '../../components/MaterialCheckboxWithLabel3';

function Addpelanggan(props) {
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
              <TouchableOpacity style={styles.button8}>
                <FontAwesomeIcon name="credit-card" style={styles.icon4} />
                <Text style={styles.pembayaran1}>Pembayaran</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button9}>
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
      <TextInput placeholder="Username" style={styles.placeholder} />
      <Text style={styles.tambahPelanggan}>Tambah Pelanggan</Text>
      <TextInput placeholder="Password" style={styles.placeholder1} />
      <View style={styles.group5}>
        <View style={styles.materialCheckboxWithLabelRow}>
          <MaterialCheckboxWithLabel style={styles.materialCheckboxWithLabel} />
          <MaterialCheckboxWithLabel2
            style={styles.materialCheckboxWithLabel2}
          />
        </View>
        <View style={styles.materialCheckboxWithLabel1Row}>
          <MaterialCheckboxWithLabel1
            style={styles.materialCheckboxWithLabel1}
          />
          <MaterialCheckboxWithLabel3
            style={styles.materialCheckboxWithLabel3}
          />
        </View>
      </View>
      <View style={styles.group6}>
        <TouchableOpacity style={styles.button10}>
          <Text style={styles.tambah2}>TAMBAH</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.user}>User</Text>
      <Text style={styles.password}>Password</Text>
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
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 38,
    width: 281,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 38,
    textAlign: 'center',
    marginTop: -621,
    marginLeft: 56,
  },
  tambahPelanggan: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    width: 189,
    height: 24,
    textAlign: 'center',
    marginTop: -119,
    marginLeft: 102,
  },
  placeholder1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 38,
    width: 281,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 38,
    textAlign: 'center',
    marginTop: 153,
    alignSelf: 'center',
  },
  group5: {
    width: 223,
    height: 125,
    marginTop: 35,
    alignSelf: 'center',
  },
  materialCheckboxWithLabel: {
    height: 40,
    width: 90,
  },
  materialCheckboxWithLabel2: {
    height: 40,
    width: 90,
    marginLeft: 43,
  },
  materialCheckboxWithLabelRow: {
    height: 40,
    flexDirection: 'row',
  },
  materialCheckboxWithLabel1: {
    height: 40,
    width: 90,
  },
  materialCheckboxWithLabel3: {
    height: 40,
    width: 90,
    marginLeft: 39,
  },
  materialCheckboxWithLabel1Row: {
    height: 40,
    flexDirection: 'row',
    marginTop: 46,
    marginLeft: 4,
  },
  group6: {
    width: 253,
    height: 49,
    marginTop: 54,
    alignSelf: 'center',
  },
  button10: {
    width: 100,
    height: 49,
    backgroundColor: '#0e3de2',
    borderRadius: 30,
    alignSelf: 'center',
  },
  tambah2: {
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
});

export default Addpelanggan;
