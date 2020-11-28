import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Compose() {
  // 画面遷移の定義
  const navigation = useNavigation();

  // Main画面に戻る関数を用意
  const toBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <Button onPress={toBack} title="戻る" />
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
