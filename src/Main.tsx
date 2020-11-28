import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { loadAll } from "./Store";
import { FAB, List } from "react-native-paper";
import moment from "moment";

export function Main() {
  // 画面遷移の定義
  const navigation = useNavigation();

  // Compose画面に移動する関数を用意
  const toCompose = () => {
    navigation.navigate("Compose");
  };

  const [memos, setMemos] = useState<Memo[]>([]);

  // useEffectは最初にページが読み込まれた時に呼び出される
  useEffect(() => {
    // asyncで非同期で読み込みとstate更新を定義
    const initialize = async () => {
      // awaitで読み込みが終わるまで待機
      const newMemos = await loadAll();
      setMemos(newMemos);
    };
    // 画面が戻ってきた時に動作するようにnavigationの動作に追加
    navigation.addListener("focus", initialize);
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={item => (
          <List.Item
            style={styles.item}
            title={item.item.text}
            titleNumberOfLines={5}
            description={`作成日時：${moment(item.item.createdAt).format(
              "yyyy-MM-DD ddd HH:mm"
            )}`}
            descriptionStyle={styles.description}
          />
        )}
      />
      <FAB style={styles.addButton} icon="pencil" onPress={toCompose} />
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
  },
  item: {
    minWidth: "100%",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10
  },
  description: {
    flex: 1,
    textAlign: "right"
  },
  addButton: {
    position: "absolute",
    right: 16,
    bottom: 16
  }
});
