import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputStyleRow}>
        <TextInput
          placeholder={props.inputStyle || "Label"}
          style={styles.inputStyle}
        ></TextInput>
        <Icon name="eye" style={styles.iconStyle}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    flex: 1,
    lineHeight: 16,
    textAlign: "left",
    letterSpacing: 2,
    height: 42,
    width: 325
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    height: 26,
    width: 32,
    marginTop: 8
  },
  inputStyleRow: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginLeft: 18
  }
});

export default MaterialRightIconTextbox1;
