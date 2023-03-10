import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialButtonShare(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
      <Icon name="account-multiple-plus" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(14,61,226,1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 2,
    minWidth: 40,
    minHeight: 40
  },
  button: {
    top: 8,
    left: 5,
    width: 47,
    height: 41,
    position: "absolute"
  },
  icon: {
    fontSize: 38,
    alignSelf: "center",
    color: "#fff"
  }
});

export default MaterialButtonShare;
