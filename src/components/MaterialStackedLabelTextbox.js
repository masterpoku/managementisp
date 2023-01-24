import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialStackedLabelTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>StackedLabel</Text>
      <TextInput placeholder="Input" style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent"
  },
  label: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    height: 30,
    width: 72,
    marginLeft: 152
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    flex: 1,
    lineHeight: 16,
    height: 29,
    width: 0,
    marginLeft: 188
  }
});

export default MaterialStackedLabelTextbox;
