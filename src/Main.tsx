import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Main() {
  // 画面遷移の定義
  const navigation = useNavigation();

  // Compose画面に移動する関数を用意
  const toCompose = () => {
    navigation.navigate("Compose");
  };

  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Button onPress={toCompose} title="toCompose" />
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
