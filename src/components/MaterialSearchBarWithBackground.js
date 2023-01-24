import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function MaterialSearchBarWithBackground(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#ffffff"
          style={styles.inputStyle}
        ></TextInput>
        <View style={styles.inputStyleFiller}></View>
        <TouchableOpacity style={styles.rightIconButton}>
          <Icon name="search" style={styles.rightIcon}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "rgba(14,61,226,1)",
    alignItems: "center",
    flex: 1
  },
  inputStyle: {
    height: 48,
    color: "#FFFFFF",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "center",
    width: 263,
    lineHeight: 16,
    marginLeft: 21
  },
  inputStyleFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    padding: 11,
    alignItems: "center"
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  }
});

export default MaterialSearchBarWithBackground;
