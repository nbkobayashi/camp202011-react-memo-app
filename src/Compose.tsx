import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Compose() {
  // defaultを削除して名前をComposeに変更
  return (
    <View style={styles.container}>
      <Text>Compose Screen</Text> {/* 画面が変わった時に分かるように変更 */}
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
