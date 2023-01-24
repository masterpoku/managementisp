import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

function CupertinoFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="home"
          style={[
            styles.icon,
            {
              color: props.active ? '#007AFF' : 'rgba(255,255,255,1)',
            },
          ]}
        />
        <Text
          style={[
            styles.dashboard,
            {
              color: props.active ? '#007AFF' : 'rgba(255,255,255,1)',
            },
          ]}>
          Dashboard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon name="poll" style={styles.icon3} />
        <Text style={styles.pelanggan}>Pelanggan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name="server-network"
          style={styles.icon2}
        />
        <Text style={styles.mikrotik}>Mikrotik</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <MaterialCommunityIconsIcon name="credit-card" style={styles.icon1} />
        <Text style={styles.pembayaran}>Pembayaran</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <IoniconsIcon name="logo-whatsapp" style={styles.icon4} />
        <Text style={styles.admin}>Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,1)',
    justifyContent: 'space-between',
  },
  btnWrapper1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: 'transparent',
    opacity: 0.8,
    fontSize: 30,
  },
  dashboard: {
    backgroundColor: 'transparent',
    paddingTop: 4,
    fontSize: 12,
    fontFamily: 'roboto-700',
  },
  btnWrapper4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon3: {
    backgroundColor: 'transparent',
    opacity: 0.8,
    fontSize: 30,
    color: 'rgba(255,255,255,1)',
  },
  pelanggan: {
    backgroundColor: 'transparent',
    paddingTop: 4,
    fontSize: 12,
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
  },
  btnWrapper3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon2: {
    backgroundColor: 'transparent',
    opacity: 0.8,
    fontSize: 30,
    color: 'rgba(255,255,255,1)',
  },
  mikrotik: {
    backgroundColor: 'transparent',
    paddingTop: 4,
    fontSize: 12,
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
  },
  btnWrapper2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon1: {
    backgroundColor: 'transparent',
    opacity: 0.8,
    fontSize: 30,
    color: 'rgba(255,255,255,1)',
  },
  pembayaran: {
    backgroundColor: 'transparent',
    paddingTop: 4,
    fontSize: 12,
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
  },
  btnWrapper5: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon4: {
    backgroundColor: 'transparent',
    opacity: 0.8,
    fontSize: 30,
    color: 'rgba(255,255,255,1)',
  },
  admin: {
    backgroundColor: 'transparent',
    paddingTop: 4,
    fontSize: 12,
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
  },
});

export default CupertinoFooter2;
