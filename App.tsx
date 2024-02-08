import { View, Text, StyleSheet, TextInput, StatusBar } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [cal, setCal] = useState("");

  const num = Number(cal) * 44187.9;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
      }}
    >
      <StatusBar hidden  />

      <Text style={[styles.text, { fontSize: 36 }]}>Hi,</Text>
      <Text style={[styles.text, { fontSize: 16 }]}>
        Wellcome to simple bitcoin calculator
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          keyboardType="decimal-pad"
          style={[styles.border, styles.money]}
          onChangeText={(val) => setCal(val)}
        />
        <View style={styles.border2}>
          <Text style={styles.money}>BTC</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            styles.border,
            styles.money,
            { padding: 25, fontSize: Number(cal) < 19990 ? 20 : 10 },
          ]}
        >
          {num}
        </Text>
        <View style={styles.border2}>
          <Text style={styles.money}>USD</Text>
        </View>
      </View>

      {Number(cal) > 100000 ? (
        <Text style={[styles.money, { textAlign: "center" }]}>
          What ! you have {cal} bitcoin{"\n"}(min ayna laka hadha?){" "}
        </Text>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: "700",
    fontStyle: "normal",
    color: "#FFFFFFA6",
  },
  money: {
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",

    color: "#FFFFFFA6",
  },
  border: {
    backgroundColor: "#313949",
    height: 80,
    width: 200,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 15,
  },
  border2: {
    backgroundColor: "#313959",
    height: 80,
    width: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
