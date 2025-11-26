import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { themeColors } from "../theme";

export default function ConvertScreen() {

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("TRY");
  const [amount, setAmount] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Text style={styles.title}>Döviz Çevirici</Text>

      <View style={styles.card}>
        
        <Text style={styles.label}>Kaynak Döviz</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{from}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.label}>Miktar</Text>
        <TextInput
          style={styles.input}
          placeholder="Örn: 100"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Text style={styles.label}>Hedef Döviz</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{to}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Çevir</Text>
        </TouchableOpacity>

      </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bgPrimary,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1D1B20",
    marginTop: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    marginBottom: 6,
    marginTop: 14,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#37008aff",
    padding: 16,
    borderRadius: 14,
    marginTop: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
