import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Main() {
  // defaultを削除して名前をMainに変更
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text> {/* 画面が変わった時に分かるように変更 */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
